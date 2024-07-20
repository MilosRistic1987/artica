
import React from 'react';
import { footerData } from '../../../helpers/mockUp';
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { TClientsAndPartners } from '@/types/types';
import ImageHandler from './imageHandler';


interface FooterProps {
    partners: TClientsAndPartners[];
}


const Footer: React.FC<FooterProps> = ({ partners }) => {

    const t = useTranslations('Footer');

    return (
        <footer className='aFooter'>
            <section>
                <div className='footerContentWrapp'>
                    {footerData.map(footSection =>
                        <article key={footSection.id} >
                            <div className='footerBarItem'>
                                <footSection.icon />
                                <label>{t(`${footSection.name}.name`)}</label>
                            </div>
                            <div className='footerContentInfo'>
                                {footSection.content.map((content, index) => <label key={content.trim()}>{t(`${footSection.name}.content.${index}`)}</label>)}
                            </div>
                        </article>)}

                </div>
                <div className='partnersWrapp'>
                    {partners.map(p => <a key={p.id} href={p.link}><ImageHandler imgData={{ src: p.src, alt: 'Artica Partners', name: p.link }} /></a>)}
                </div>

            </section>
        </footer>
    );
};

export default Footer;