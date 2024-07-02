import Image from "next/image";
import styles from "./page.module.css";
import InlineStyledSVG from "../components/animationLogo";
import ScrollButton from "../components/scrollButton";
import Navigation from "../components/navigation";
import { bbb, projects } from "../helpers/mockUp";
import ProjectCard from "../components/projectCard";
import About from "../components/aboutSection";
import Contact from "../components/contact";
import Footer from "../components/footer";
import ArticaLogo from "@/components/articaLogo";
import { getPageImage, getProjects } from "@/firebase/actions";
import { ImageBucket } from "@/types/types";


export const revalidate = 0;

export default async function Home() {
  const sortedProjects = projects.sort((a, b) =>
    a.state === b.state ? 0 : a.state === "in progress" ? -1 : 1
  );

  const aaproject = await getProjects();

  console.log("FINALSOLUTION$$", aaproject);





  const articaLandingBg = await getPageImage(ImageBucket.BACKGROUND, 'articaWall');

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
          <header className="navBar">
            <ArticaLogo logoMesaures={{ logoWidth: 200, logoHeight: 200 }} />
            <Navigation />
          </header>
          <InlineStyledSVG />
        </section>
      </div>
      <section className="projectSection" id="project">
        <div className="projectList">
          {sortedProjects.map(project => <ProjectCard key={project.name} data={project} />)}

        </div>
        <div className={styles.paginationWrapp}></div>
      </section>
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
