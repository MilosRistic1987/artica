"use client"
import React from 'react';
import { useTheme } from 'next-themes';
import styles from '../page.module.css'



const ThemeChanger = () => {
    const { theme, setTheme } = useTheme()
    console.log("theme", theme)
    return (
        // <div className="themeWrapp" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        //     <label>{theme} <span>mode</span></label>
        //     {theme === 'dark' ? (
        //         <SunIcon className="sun" />
        //     ) : (
        //         <MoonIcon className="moon" />
        //     )}
        // </div>
        <div className={styles.toggleSwitch} >
            <label className={styles.switchLabel}>
                <input type='checkbox' className={styles.checkInput} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
                <span className={styles.slider}></span>
            </label>

        </div>
    )
}

export default ThemeChanger