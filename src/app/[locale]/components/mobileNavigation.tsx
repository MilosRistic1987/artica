import { NavigationProps, NavItem, NavLabel } from '@/types/types';
import Link from 'next/link';
import React, { useState } from 'react';
import LanguagePicker from './languagePicker';
import ThemeChanger from './themeChanger';
import ArticaLogo from './articaLogo';

const MobileNavigation: React.FC<NavigationProps> = ({ locale }) => {
  const navItems: NavItem[] = [
    { navLabel: { en: "HOME", rs: "POČETNA" }, path: '' },
    { navLabel: { en: "Projects", rs: "Projekti" }, path: '#project' },
    { navLabel: { en: "About Us", rs: "O Nama" }, path: '#about' },
    { navLabel: { en: "Contact", rs: "Kontakt" }, path: '#contact' },

  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <nav id="nav" className={`mobileNav ${isMenuOpen ? 'navOpen' : ''}`} role="navigation">
      <ul className="mobileNavMenu" id="menu" aria-label="main navigation" hidden={!isMenuOpen}>
        {navItems.map(nav => <li className='mobileNavItem' key={nav.navLabel['en']}><Link className='mobileNavLink' onClick={handleToggle} href={nav.path}>{nav.navLabel[locale as keyof NavLabel]}</Link></li>)}
        <li className='mobileNavItem mobileNavProItem'> <LanguagePicker /></li>
        <li className='mobileNavItem mobileNavProItem'><ThemeChanger /></li>
      </ul>

      <a href="#nav" className="mobileNavToggle" role="button" aria-expanded={isMenuOpen} aria-controls="menu" onClick={handleToggle}>
        <svg className="menuIcon" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50">
          <title>Toggle Menu</title>
          <g>
            <line className="menuIconBar" x1="13" y1="16.5" x2="37" y2="16.5" />
            <line className="menuIconBar" x1="13" y1="24.5" x2="37" y2="24.5" />
            <line className="menuIconBar" x1="13" y1="24.5" x2="37" y2="24.5" />
            <line className="menuIconBar" x1="13" y1="32.5" x2="37" y2="32.5" />
            <circle className="menuIconCircle" r="23" cx="25" cy="25" />
          </g>
        </svg>
      </a>

      <div className="splash"></div>
    </nav>

  );
};

export default MobileNavigation;
