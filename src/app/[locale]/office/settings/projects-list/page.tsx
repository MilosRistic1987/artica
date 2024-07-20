import PartnerListItem from "@/app/[locale]/components/settings/partnerListItem";
import ProjectListItem from "@/app/[locale]/components/settings/projectListItem";
import { getPartners, getProjects } from "@/firebase/actions";




export default async function ProjectList() {
    const allProjectsList = await getProjects();
    const partners = await getPartners()
    console.log("allProjectsList", allProjectsList)
    const gridItemsNumber = allProjectsList.length >= 5 ? 5 : allProjectsList.length
    const gridStyle = {

        gridTemplateColumns: `repeat(${gridItemsNumber}, 1fr)`,

    };
    return <main className="projectListWrapp">
        <section className="projectSetList" style={gridStyle}>
            {allProjectsList.map((project) => <ProjectListItem key={project.name}  {...project} />)}
        </section>
        <section className="partnerSetList">
            {partners.map((partner) => <PartnerListItem key={partner.id}  {...partner} />)}
        </section>
    </main>
}