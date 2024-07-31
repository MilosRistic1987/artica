


import Link from 'next/link';
import LanguagePicker from './languagePicker';
import ThemeChanger from './themeChanger';
import { NavItem, NavLabel, NavigationProps } from '@/types/types';







const Navigation: React.FC<NavigationProps> = ({ locale }) => {
    const navItems: NavItem[] = [
        { navLabel: { en: "HOME", rs: "POČETNA" }, path: '' },
        { navLabel: { en: "Projects", rs: "Projekti" }, path: '#project' },
        { navLabel: { en: "About Us", rs: "O Nama" }, path: '#about' },
        { navLabel: { en: "Contact", rs: "Kontakt" }, path: '#contact' },

    ]





    return (
        <ul className='navItems'>
            {navItems.map(nav => <li key={nav.navLabel['en']}><Link href={nav.path}>{nav.navLabel[locale as keyof NavLabel]}</Link></li>)}
            <LanguagePicker />
            <ThemeChanger />
        </ul>

    );
};

export default Navigation;
