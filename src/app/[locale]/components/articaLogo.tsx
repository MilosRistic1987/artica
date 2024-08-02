
"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation'


type TLogoMeasures = {
    logoWidth: number;
    logoHeight: number;
};

interface ArticaLogoProps {
    logoMeasures: TLogoMeasures;
    locale: string;
    style?: React.CSSProperties; // Optional style prop
}
const ArticaLogo: React.FC<ArticaLogoProps> = ({ logoMeasures, locale, style }) => {

    console.log("LOCALEEARTICALOGO", locale)
    const { logoWidth, logoHeight } = logoMeasures
    const { theme, setTheme } = useTheme()
    //console.log(theme)
    const router = useRouter()
    const fillColor = theme === 'dark' ? "#fff" : '#231f20';

    const defaultStyles: React.CSSProperties = {
        width: logoWidth,
        height: logoHeight,
        cursor: 'pointer',
    };

    const logoStyles: React.CSSProperties = {
        ...defaultStyles,
        ...style,
    };

    return (
        <svg
            id="articaLogo"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 416.81 426.2"
            style={logoStyles}
            onClick={() => router.push(`/${locale}`)}
        >
            <defs>
                <linearGradient
                    id="linear-gradient"
                    x1="9.51"
                    y1="388.8"
                    x2="231.94"
                    y2="41.09"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0" stopColor="#2c719f" />
                    <stop offset="0.17" stopColor="#3279ad" />
                    <stop offset="0.31" stopColor="#3881bb" />
                    <stop offset="0.44" stopColor="#448fc3" />
                    <stop offset="0.63" stopColor="#5baad3" />
                    <stop offset="0.72" stopColor="#69b3d7" />
                    <stop offset="0.89" stopColor="#8ccbe2" />
                    <stop offset="1" stopColor="#a6dcea" />
                </linearGradient>
            </defs>
            <polygon
                points="365.96 426.2 365.67 426.2 365.62 426.12 365.96 426.2"
                style={{ fill: '#203d3f' }}
            />
            <polygon
                points="369.2 296.72 367.17 297.89 267.75 297.89 216.69 209.45 197.89 176.89 248.95 88.44 318.81 209.45 369.2 296.72"
                style={{ fill: '#2c719f' }}
            />
            <polygon
                points="248.95 88.44 197.89 176.89 179.09 209.45 128.02 297.89 28.61 297.89 26.58 296.72 76.96 209.45 146.82 88.44 197.88 0 248.95 88.44"
                style={{ fill: 'url(#linear-gradient)' }}
            />
            <g>
                <polygon
                    points="355.95 235.19 355.95 248.51 355.87 248.66 333.77 286.92 327.25 298.23 323.31 305.04 315.44 305.04 319.38 298.23 326.8 285.37 351.93 241.85 355.87 235.03 355.95 235.19"
                    style={{ fill: fillColor }}
                />
                <polygon
                    points="40.51 235.11 40.51 248.43 40.42 248.59 18.33 286.85 11.8 298.15 7.87 304.97 0 304.97 3.94 298.15 11.36 285.29 36.49 241.77 40.42 234.96 40.51 235.11"
                    style={{ fill: fillColor }}
                />
                <polygon
                    points="80.84 304.97 72.97 304.97 69.04 298.15 69.09 298.15 69.03 298.14 47.32 260.54 40.51 248.74 40.51 235.11 44.35 241.77 47.32 246.91 76.91 298.15 78.06 300.15 80.84 304.97"
                    style={{ fill: fillColor }}
                />
                <polygon
                    points="396.29 305.04 388.42 305.04 384.48 298.23 384.53 298.23 384.47 298.21 362.77 260.62 355.95 248.82 355.95 235.19 359.8 241.85 362.77 246.99 392.35 298.23 393.5 300.22 396.29 305.04"
                    style={{ fill: fillColor }}
                />
                <text
                    transform="translate(94.51 304.81)"
                    style={{
                        fontSize: '91.48499298095703px',
                        fill: fillColor,
                        // fontFamily: 'AgencyFB-Reg, Agency FB',
                        letterSpacing: '0.2999979735005593em',
                    }}
                >
                    RTIC
                </text>
            </g>
            <text
                transform="translate(1 338.53)"
                style={{
                    fontSize: '30px',
                    fill: fillColor,
                    // fontFamily: 'AgencyFB-Reg, Agency FB',
                    letterSpacing: '0.7em',
                }}
            >
                INTERNATIONAL
            </text>
        </svg>


    );
};

export default ArticaLogo;