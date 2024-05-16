"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { about, aboutII, aboutIcons } from '../helpers/mockUp';




const About: React.FC = () => {

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
                                    {paragraph.content}
                                </p>
                            );
                        })}
                    </div>
                </article>
            </section>
            <section>
                <article className='paraWrappBottom'>
                    <div className='wrapp'>
                        {aboutII.map((paragraph) => {
                            return (
                                <div key={paragraph.id} className='articaGoals'>
                                    <h1>{paragraph.heading}</h1>
                                    {paragraph.heading !== 'Vision' ? <ul>{paragraph.content.map(p => <li key={p}>{p}</li>)}</ul> : <p>
                                        {paragraph.content}
                                    </p>}

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