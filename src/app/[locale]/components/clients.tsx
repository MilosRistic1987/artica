"use client"
import { TClients } from '@/types/types';
import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Clients = ({ projectData }: any) => {
    console.log("projectDataClients", projectData)
    const t = useTranslations('Project');
    return (
        <section className="clientsWrapp">
            <article className="clientsHeadingWrapp"><h1>{t('footer')}</h1></article>
            <article className="clientsLogoWrapp">{projectData?.clients.map((client: TClients) =>
                <div className="cilentWrapper" key={client.id}>
                    <a href={client.link} target='_blank'>
                        <Image
                            fill
                            src={`${client?.src}`}
                            // width={client.width}
                            // height={60}
                            alt="Artica clients"
                            className="clientLogo"
                        />
                    </a>
                </div>
            )}</article>
        </section>
    )
}

export default Clients