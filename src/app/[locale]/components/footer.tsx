
import React from 'react';
import { footerData, partners } from '../../../helpers/mockUp';
import Image from 'next/image'
import { useTranslations } from 'next-intl';





const Footer: React.FC = () => {

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
                    {partners.map(p => <Image
                        key={p.id}
                        src={p.imgSrc}
                        width={p.width}
                        height={50}
                        alt="Artica Parthners"
                    />)}
                </div>

            </section>
        </footer>
    );
};

export default Footer;