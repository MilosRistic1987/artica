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

const ProjectCard: React.FC<{ data: any, locale: string }> = ({ data, locale }) => {

    const router = useRouter()
    const { name, src } = data
    console.log(name, src, 'ProjectCard')

    const redirectToProject = (name: string) => {
        router.push(`/${locale}/project/${name}`)
    }
    return (
        <article className='projectCard' onClick={() => redirectToProject(name['en'])}>
            <section className="projectImageWrapp">
                <Image
                    src={`${src}`}
                    fill
                    style={{
                        objectFit: "cover",
                    }}
                    alt="Picture of the author"
                />
                <CardOverlay projectData={data} locale={locale} />
            </section>
            <section className='projectCardHeading'>
                <h1>{name[locale]}</h1>
            </section>
        </article>


    );
};

export default ProjectCard;