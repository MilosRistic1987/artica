"use client"

import React, { useEffect, useState } from 'react';
import styles from '../page.module.css'
import Image from 'next/image'



const ScrollButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        // Show the button when scrolled down 100vh
        setIsVisible(scrollY > 100);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            {isVisible && <div className='scrollButton' onClick={scrollToTop} >
                <Image
                    src="/articaAnimeLines.svg"
                    width={30}
                    height={30}
                    alt="Picture of the author"
                />
            </div>}
        </>

    );
};

export default ScrollButton;
