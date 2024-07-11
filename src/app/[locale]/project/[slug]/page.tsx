
import ProjectNav from "@/app/[locale]/components/projectNav";
import { getProjectByName } from "@/firebase/actions";
import Image from 'next/image';
import Clients from "../../components/clients";
import {
    StarIcon
} from '@heroicons/react/24/solid';







export default async function Product({ params }: { params: { slug: string, locale: string } }) {

    const dencodedParam = decodeURIComponent(params.slug);
    console.log("dencodedParam", dencodedParam)
    const projectData = await getProjectByName(dencodedParam)



    console.log("projectData", projectData)

    return (
        <main className="articaProject">
            <ProjectNav projectName={projectData?.name[params.locale]} />
            <section className="projectMain">
                <article className="projectContentWrapper">
                    <div className="heading">
                        <h1>{projectData?.type[params.locale]}</h1>
                        <h3>{projectData?.location[params.locale]}</h3>
                    </div>
                    <div className="tagsWrapp">
                        <aside>
                            {projectData?.developmentTags.map((tag: any) => <div key={tag.id} className="tagList"><StarIcon /><label >{tag[params.locale]}</label></div>)}
                        </aside>
                        <aside>
                            {projectData?.managmentTags.map((tag: any) => <div key={tag.id} className="tagList"><StarIcon /><label key={tag.id}>{tag[params.locale]}</label></div>)}
                        </aside>
                    </div>
                </article>
                <article style={{ position: 'relative', padding: '2rem' }} className="test">
                    <Image
                        src={`${projectData?.src}`}
                        fill
                        style={{
                            objectFit: "cover",
                        }}
                        alt="Picture of the author"
                    />
                    <section className="insetBorder"></section>
                </article>
            </section>
            <Clients projectData={projectData} />

        </main>
    )
}