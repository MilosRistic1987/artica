"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import CardOverlay from './cardOverlay';


export type TProject = {
    name: string;
    src: string,
    state: string;
    type: string;
}

const ProjectCard: React.FC<{ data: TProject }> = ({ data }) => {
    const router = useRouter()
    const { name, src } = data

    const redirectToProject = (name: string) => {
        router.push(`/project/${name}`)
    }
    return (
        <article className='projectCard' onClick={() => redirectToProject(name)}>
            <section className="projectImageWrapp">
                <Image
                    src={`${src}`}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    alt="Picture of the author"
                />
                <CardOverlay projectData={data} />
            </section>
            <section className='projectCardHeading'>
                <h1>{name}</h1>
            </section>
        </article>


    );
};

export default ProjectCard;