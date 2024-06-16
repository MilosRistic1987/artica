import Avatar from "./avatar";
import NavInfo from "./navInfo";
import SettingsNavigation from "./navigation";



const SideNavMain: React.FC = () => {
    return (
        <aside className="sidenav">
            <Avatar />
            <SettingsNavigation />
            <NavInfo />
        </aside>
    );
};

export default SideNavMain;
