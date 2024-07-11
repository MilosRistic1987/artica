import ProjectListItem from "@/app/[locale]/components/settings/projectListItem";
import { getProjects } from "@/firebase/actions";




export default async function ProjectList() {
    const allProjectsList = await getProjects();
    console.log("allProjectsList", allProjectsList)
    return <main className="projectListWrapp">
        <section className="projectSetList">
            {allProjectsList.map((project) => <ProjectListItem key={project.name}  {...project} />)}
        </section>
        <section></section>
    </main>
}