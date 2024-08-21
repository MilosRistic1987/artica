"use client"

import { useClientMediaQuery } from '@/hooks/mediaQuery';
import { useTheme } from 'next-themes';
import React from 'react';

const InlineStyledSVG: React.FC = () => {

    const isMobile = useClientMediaQuery('(max-width: 600px)')
    const { theme } = useTheme()
    const fillColor = theme === 'dark' ? "#fff" : '#231f20';

    const mainWidth = isMobile ? '210px' : '550px'
    const padding = isMobile ? '25px' : '40px'
    const svgStyle = { fill: 'none', stroke: fillColor, strokeMiterlimit: 10, opacity: 0.2 };
    const mainSvg = { top: '60%', position: 'absolute', width: mainWidth, left: '10%', padding } as any
    const polygonStyle = { fill: fillColor };
    const pathStyle = { fill: 'none', stroke: fillColor, strokeMiterlimit: 10 };
    const textStyle = { fontSize: '30px', fill: fillColor, fontFamily: 'AgencyFB-Reg, Agency FB', letterSpacing: '0.7em' };
    const circleStyle = { fill: fillColor, opacity: 0.2 };








    return (
        <svg id='animeSvg' className='animationSvg' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 433.96 134.05" style={mainSvg} >
            <line className='bootomPart' x1="422.5" y1="117.1" y2="117.1" style={svgStyle} />
            <polygon points="394.48 134.05 394.19 134.05 394.14 133.97 394.48 134.05" style={polygonStyle} />
            <path className='child1' d="M175.21,424.46h-7.87l-3.94-6.82h0L141.69,380l-6.82-11.81v-.31l-.08.16L112.7,406.34l-6.53,11.3-3.94,6.82H94.36l3.94-6.82,7.42-12.85,25.13-43.52,3.94-6.82.08.15,3.85,6.67,3,5.14,29.58,51.23,1.15,2Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <path className='child2' d="M490.65,424.54h-7.87l-3.93-6.82h0l-21.71-37.6-6.81-11.8V368l-.09.15-22.09,38.27-6.53,11.3-3.93,6.82h-7.87l3.93-6.82,7.43-12.86,25.13-43.52,3.93-6.81.09.15,3.84,6.66,3,5.14,29.58,51.24,1.16,2Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <path className='child3' d="M224.21,424.31h-6.53l-13-37.44.84-1.25h11.08V359.89h-16v64.42h-6.2V354.4h23.4a4.73,4.73,0,0,1,5,5v26.54c0,3.36-2.26,5.05-6.79,5.05-.45,0-1.1,0-2-.07s-1.49-.07-1.88-.07Q218.22,407.51,224.21,424.31Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <path className='child4' d="M285,359.89H274.21v64.42H268V359.89H257.1V354.4H285Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <path className='child5' d="M326.31,424.31h-6.2V354.4h6.2Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <path className='child6' d="M393.43,419.35a4.75,4.75,0,0,1-1.43,3.57,5,5,0,0,1-3.62,1.39h-18a4.75,4.75,0,0,1-5-5v-60a4.73,4.73,0,0,1,5-5h18a5,5,0,0,1,3.62,1.38,4.77,4.77,0,0,1,1.43,3.57v16.26h-6.26V359.89H371.63v58.92h15.54v-17.2h6.26Z" transform="translate(-80.66 -353.45)" style={pathStyle} />
            <text className='bootomPartText' transform="translate(14.71 104.57)" style={textStyle}>INTERNATIONAL</text>
            <circle className='bootomPart' cx="432.4" cy="117.1" r="1.56" style={circleStyle} />
        </svg>
    );
};

export default InlineStyledSVG;
