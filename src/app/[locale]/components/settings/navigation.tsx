import Link from 'next/link';
import {
    Cog6ToothIcon,
    DocumentTextIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/solid';
import { NavigationProps } from '@/types/types';







const SettingsNavigation: React.FC<NavigationProps> = ({ locale }) => {

    const navItems = [{ navLabel: "General Settings", path: `/${locale}/office/settings`, icon: <Cog6ToothIcon /> }, { navLabel: "Project Creator", path: `/${locale}/office/settings/project-creator`, icon: <DocumentTextIcon /> }, { navLabel: " Project List", path: `/${locale}/office/settings/projects-list`, icon: <ClipboardDocumentListIcon /> }]

    return (
        <nav className="settingsNav">
            <ul>
                {navItems.map(nav => <li className='settNavItem' key={nav.navLabel}>{nav.icon}<Link href={nav.path}>{nav.navLabel}</Link></li>)}
            </ul>
        </nav>
    );
};

export default SettingsNavigation;