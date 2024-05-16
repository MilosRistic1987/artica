
import ProjectNav from "@/app/components/projectNav";
import { projects } from "@/app/helpers/mockUp";
import Image from 'next/image';


export default async function Product({ params }: { params: { slug: string } }) {

    const dencodedParam = decodeURIComponent(params.slug);
    const projectData = projects?.find(project => project.name === dencodedParam)


    console.log("projectData", projectData)

    return (
        <main className="articaProject">
            <ProjectNav projectName={dencodedParam} />
            <section className="projectMain">
                <article className="projectContentWrapper">
                    <div className="heading">
                        <h1>{projectData?.type}</h1>
                        <h3>{projectData?.location}</h3>
                    </div>
                    <div></div>
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
            <section className="clientsWrapp">
                <article className="clientsHeadingWrapp"><h1>clients :</h1></article>
                <article className="clientsLogoWrapp">{projectData?.clients.map(client => <Image
                    key={client.id}
                    src={`${client?.src}`}
                    width={client.width}
                    height={60}
                    alt="Artica clients"
                    className="clientLogo"
                />)}</article>
            </section>
        </main>
    )
}