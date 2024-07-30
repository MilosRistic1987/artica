
"use client"
import { useTheme } from 'next-themes';
import Image from 'next/image'
import React from 'react';
import { useRouter } from 'next/navigation'

export type TLogoMeasures = {
    logoWidth: number;
    logoHeight: number
}
const ArticaLogo: React.FC<{ logoMesaures: TLogoMeasures, locale: string }> = ({ logoMesaures, locale }) => {

    console.log("LOCALEEARTICALOGO", locale)
    const { logoWidth, logoHeight } = logoMesaures
    const { theme, setTheme } = useTheme()
    //console.log(theme)
    const router = useRouter()
    const logoSrc = theme === 'dark' ? '/articaNewDark.svg' : '/articaNew.svg'

    return (
        <Image
            src={logoSrc}
            width={logoWidth}
            height={logoHeight}
            alt="Artica International"
            style={{ cursor: 'pointer' }}
            title='Back to HOME'
            onClick={() => router.push(`/${locale}`)}
        />

    );
};

export default ArticaLogo;