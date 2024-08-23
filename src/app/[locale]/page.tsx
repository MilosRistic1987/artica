
import styles from "./page.module.css";
import InlineStyledSVG from "./components/animationLogo";
import ScrollButton from "./components/scrollButton";
import Navigation from "./components/navigation";
import ProjectCard from "./components/projectCard";
import About from "./components/aboutSection";
import Contact from "./components/contact";
import Footer from "./components/footer";
import ArticaLogo from "@/app/[locale]/components/articaLogo";
import { getPageImage, getPartners, getProjects } from "@/firebase/actions";
import { HomeProps, ImageBucket } from "@/types/types";
import PaginationControls from "./components/paginationControl";
import NavigationHandler from "./components/navigationHandler";


export const revalidate = 0;

export default async function Home({ params, searchParams }: HomeProps) {
  const { locale } = params
  const { page = '1', per_page = '2' } = searchParams;
  const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
  const end = start + Number(per_page) // 5, 10, 15 ...
  const aaproject = await getProjects()
  const partners = await getPartners()
  const sortedProjects = aaproject.sort((a, b) => {
    // Check if createdAt exists and is a valid date
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : new Date(0).getTime();
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : new Date(0).getTime();

    // Ensure both are numbers before subtracting
    return dateA - dateB;
  });
  const projects = sortedProjects.slice(start, end)


  // const sortedProjects = projects.sort((a, b) =>
  //   a.state["en"] === b.state["en"]
  //     ? 0
  //     : a.state["en"] === "in progress"
  //       ? -1
  //       : 1
  // );

  //console.log("FINALSOLUTION$$", aaproject);

  const articaLandingBg = await getPageImage(
    ImageBucket.BACKGROUND,
    "articaWall"
  );

  const displayPagination = aaproject.length > Number(per_page)

  return (
    <main className={styles.wrapp}>

      <ScrollButton />
      <div
        className="animationMain"
        style={{
          backgroundImage: `url(${articaLandingBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <section className="main">
          <NavigationHandler locale={locale} />
          <InlineStyledSVG />
        </section>
      </div>
      <section className="projectSection" id="project">
        <div className="projectList">
          {projects?.map((project) => (
            <ProjectCard key={project.name['en']} data={project} locale={locale} />
          ))}
        </div>
        {displayPagination && <PaginationControls
          hasNextPage={end < aaproject.length}
          hasPrevPage={start > 0}
          totalItems={aaproject.length}
          locale={locale}
        />}

      </section>
      <About />
      <Contact />
      <Footer partners={partners} />
    </main>
  );
}
