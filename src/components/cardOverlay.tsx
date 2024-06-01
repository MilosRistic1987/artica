"use client"

import React, { useEffect, useState } from 'react';
import styles from '../page.module.css'
import Image from 'next/image'

type TProject = {
    name: string;
    src: string,
    state: string
}



const CardOverlay: React.FC<{ projectData: TProject }> = ({ projectData }) => {
    const { name, state } = projectData

    console.log(projectData)
    const stateClassName = state === 'finished' ? state : 'inProgress'

    return (
        <div className="overlay">
            <div className="overlayContent">
                <Image
                    src="/articaOverlay.png"
                    width={400}
                    height={400}
                    alt="Picture of the author"
                />
                {/* <h2 className={stateClassName}>{state}</h2> */}
                <h1>{name}</h1>
            </div>
        </div>

    );
};

export default CardOverlay;