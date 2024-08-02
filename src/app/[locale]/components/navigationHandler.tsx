
"use client"
import React, { useEffect, useState } from 'react'
import ArticaLogo from './articaLogo'
import Navigation from './navigation'
import { NavigationProps } from '@/types/types'
import { useClientMediaQuery } from '@/hooks/mediaQuery'
import MobileNavigation from './mobileNavigation'

const NavigationHandler: React.FC<NavigationProps> = ({ locale }) => {

    const [logoWidth, setLogoWidth] = useState<number>(200);
    const [logoHeight, setLogoHeight] = useState<number>(200);
    const isMobile = useClientMediaQuery('(max-width: 600px)')
    const isTablet = useClientMediaQuery('(min-width: 769px) and (max-width: 1024px)');
    console.log("isTablet", isTablet)
    console.log("isMobile", isMobile)
    useEffect(() => {
        const newSize = isTablet ? 100 : 200;
        setLogoWidth(newSize);
        setLogoHeight(newSize);
    }, [isTablet, isMobile]);


    return (
        <>
            {isMobile ?
                <>
                    <ArticaLogo logoMeasures={{ logoWidth: 130, logoHeight: 130 }} locale={locale} style={{ position: 'absolute', left: 0, margin: '1rem' }} />
                    <MobileNavigation locale={locale} />
                </> :
                <header className="navBar">
                    <ArticaLogo logoMeasures={{ logoWidth, logoHeight }} locale={locale} />
                    <Navigation locale={locale} />
                </header>}

        </>
    )
}

export default NavigationHandler