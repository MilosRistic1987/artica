import Image from 'next/image'
import styles from './page.module.css'
import InlineStyledSVG from './components/animationLogo'
import ScrollButton from './components/scrollButton'
import Navigation from './components/navigation'
import { projects } from './helpers/mockUp'
import ProjectCard from './components/projectCard'
import About from './components/aboutSection'
import Contact from './components/contact'
import Footer from './components/footer'





export default function Home() {

  const sortedProjects = projects.sort((a, b) => (a.state === b.state ? 0 : a.state === "in progress" ? -1 : 1));

  return (
    <main className={styles.wrapp}>
      <ScrollButton />
      <section className='main'>
        <header className='navBar'>
          <Image
            src="/articaNew.svg"
            width={200}
            height={200}
            alt="Picture of the author"
          />
          <Navigation />
        </header>
        <InlineStyledSVG />
      </section>
      <section className='projectSection' id='project'>
        <div className='projectList'>
          {sortedProjects.map(project => <ProjectCard key={project.name} data={project} />)}
        </div>
        <div className={styles.paginationWrapp}>
        </div>
      </section>
      <About />
      <Contact />
      <Footer />
    </main >
  )
}
