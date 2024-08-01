"use client"

import React, { useEffect, useState } from 'react';
import styles from '../page.module.css'
import Image from 'next/image'
import { useClientMediaQuery } from '@/hooks/mediaQuery';

type TProject = {
    name: string;
    src: string,
    state: string
}



const CardOverlay: React.FC<{ projectData: any, locale: string }> = ({ projectData, locale }) => {
    const { name, state } = projectData

    const [overlayMesaure, setOverlayMesaure] = useState<number>(400);

    const isMobile = useClientMediaQuery('(max-width: 600px)')

    useEffect(() => {
        const newSize = isMobile ? 300 : 400;
        setOverlayMesaure(newSize)
    }, [isMobile]);

    const stateClassName = state['en'] === 'finished' ? state : 'inProgress'

    return (
        <div className="overlay">
            <div className="overlayContent">
                <Image
                    src="/articaOverlay.png"
                    width={overlayMesaure}
                    height={overlayMesaure}
                    alt="Picture of the author"
                />
                <h2 className={stateClassName}>{state[locale]}</h2>
                <h1>{name[locale]}</h1>
            </div>
        </div>

    );
};

export default CardOverlay;