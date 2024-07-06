
import React from 'react';
import Image from 'next/image'
import { about, about2 } from '../../../helpers/mockUp';
import { useTranslations } from 'next-intl';




const About: React.FC = () => {

    const t = useTranslations('About');
    //console.log((t(`aboutII.mission.content`), { returnObjects: true }))

    return (
        <section className='aboutSection' id='about'>
            <section>
                <article className='aboutIconsWrapp'>
                    <Image
                        src="/diagram.png"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                        alt="Picture of the author"
                    />
                </article>
                <article className='paraWrapp'>
                    <div className='wrapp'>
                        {about.map((paragraph, index) => {
                            return (
                                <p key={paragraph.id}>
                                    {index === 0 ? <span>Artica</span> : null}
                                    {t(`about.${index}`)}
                                </p>
                            );
                        })}
                    </div>
                </article>
            </section>
            <section>
                <article className='paraWrappBottom'>
                    <div className='wrapp'>
                        {about2.map((paragraph) => {
                            return (
                                <div key={paragraph} className='articaGoals'>
                                    <h1>{t(`aboutII.${paragraph}.name`)}</h1>
                                    <div className='aboutIIWrapp' dangerouslySetInnerHTML={{ __html: t.raw(`aboutII.${paragraph}.content`) }} />
                                </div>

                            );
                        })}
                    </div>
                </article>
                <article className='aboutIconsWrapp'>
                    <Image
                        src="/diagramII.png"
                        fill
                        style={{
                            objectFit: "contain",
                        }}
                        alt="Picture of the author"
                    />
                </article>
            </section>
        </section>
    );
};

export default About;