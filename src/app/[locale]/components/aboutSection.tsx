
import React from 'react';
import Image from 'next/image'
import { about, about2 } from '../../../helpers/mockUp';
import { useTranslations } from 'next-intl';




const About: React.FC = () => {

    const t = useTranslations('About');
    console.log("transaltion", t('main'))
    const lang = t('main')
    // let srcOne:string='', srcTwo:string=''
    const srcTwo = `/diagramII${lang}.png`
    const srcOne = `/diagram${lang}.png`
    // if(lang==='rs'){
    //     srcOne='/diagramIIrs.png'
    // }
    //console.log((t(`aboutII.mission.content`), { returnObjects: true }))

    return (
        <section className='aboutSection' id='about'>
            <section>
                <article className='aboutIconsWrapp'>
                    <Image
                        src={srcOne}
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
                <article className='paraWrapp'>
                    <div className='wrapp'>
                        {about2.map((paragraph) => {
                            return (
                                <div key={paragraph} className='articaGoals'>
                                    <h1>{t(`aboutII.${paragraph}.name`)}</h1>
                                    {/* <div className='aboutIIWrapp' dangerouslySetInnerHTML={{ __html: t.raw(`aboutII.${paragraph}.content`) }} /> */}
                                    <p>{t(`aboutII.${paragraph}.content`)}</p>
                                </div>

                            );
                        })}
                    </div>
                </article>
                <article className='aboutIconsWrapp'>
                    <Image
                        src={srcTwo}
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