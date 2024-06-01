// "use client"


import Link from 'next/link';
import LanguagePicker from './languagePicker';
import ThemeChanger from './themeChanger';





const Navigation: React.FC = () => {
    const navItems = [{ navLabel: "HOME", path: '' }, { navLabel: "Projects", path: '#project' }, { navLabel: "About Us", path: '#about' }, { navLabel: "Contact", path: '#contact' }]

    return (
        <ul className='navItems'>
            {navItems.map(nav => <li key={nav.navLabel}><Link href={nav.path}>{nav.navLabel}</Link></li>)}
            <LanguagePicker />
            <ThemeChanger />
        </ul>

    );
};

export default Navigation;
