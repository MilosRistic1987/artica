import { NavigationProps } from "@/types/types";
import Avatar from "./avatar";
import NavInfo from "./navInfo";
import SettingsNavigation from "./navigation";



const SideNavMain: React.FC<NavigationProps> = ({ locale }) => {
    return (
        <aside className="sidenav">
            <Avatar />
            <SettingsNavigation locale={locale} />
            <NavInfo />
        </aside>
    );
};

export default SideNavMain;
