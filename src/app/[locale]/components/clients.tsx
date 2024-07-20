"use client"
import { TClientsAndPartners } from '@/types/types';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ImageHandler from './imageHandler';

const Clients = ({ projectData }: any) => {
    console.log("projectDataClients", projectData)
    const [ratio, setRatio] = useState(16 / 9)
    const [dimensions, setDimensions] = useState({ width: 150, height: 150 })
    const t = useTranslations('Project');

    console.log("ratioooo", ratio)
    return (
        <section className="clientsWrapp">
            <article className="clientsHeadingWrapp"><h1>{t('footer')}</h1></article>
            <article className="clientsLogoWrapp">{projectData?.clients.map((client: TClientsAndPartners) =>
                <a href={client.link} target='_blank' key={client.id}>
                    <ImageHandler imgData={{ src: client.src, alt: 'Artica Partners', name: client.link }} />
                </a>
            )}</article>
        </section>
    )
}

export default Clients