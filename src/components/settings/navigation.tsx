import Link from 'next/link';
import {
    Cog6ToothIcon,
    DocumentTextIcon,
    ClipboardDocumentListIcon
} from '@heroicons/react/24/solid';







const SettingsNavigation: React.FC = () => {

    const navItems = [{ navLabel: "General Settings", path: '/office/settings', icon: <Cog6ToothIcon /> }, { navLabel: "Project Creator", path: '/office/settings/project-creator', icon: <DocumentTextIcon /> }, { navLabel: " Project List", path: '/office/settings/projects-list', icon: <ClipboardDocumentListIcon /> }]

    return (
        <nav className="settingsNav">
            <ul>
                {navItems.map(nav => <li className='settNavItem' key={nav.navLabel}>{nav.icon}<Link href={nav.path}>{nav.navLabel}</Link></li>)}
            </ul>
        </nav>
    );
};

export default SettingsNavigation;