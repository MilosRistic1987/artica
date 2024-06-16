"use client"

import React, { useEffect, useState } from 'react';
import { footerData, partners } from '../helpers/mockUp';
import Image from 'next/image'





const Footer: React.FC = () => {

    return (
        <footer className='aFooter'>
            <section>
                <div className='footerContentWrapp'>
                    {footerData.map(footSection =>
                        <article key={footSection.id} >
                            <div className='footerBarItem'>
                                <footSection.icon />
                                <label>{footSection.name}</label>
                            </div>
                            <div className='footerContentInfo'>
                                {footSection.content.map(content => <label key={content.trim()}>{content}</label>)}
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