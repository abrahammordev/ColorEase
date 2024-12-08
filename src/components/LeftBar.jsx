import DarkmodeIcon from "./icons/DarkModeIcon";
import FolderIcon from "./icons/FolderIcon";
import LogoIcon from "./icons/LogoIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "./LeftBar.module.css";

function LeftBar(){
    return(
        <div className={styles.LeftBar}>
            <ul>
                <li>
                    <LogoIcon/>
                </li>
                <li>
                    <ProfileIcon/>
                </li>
                <li>
                    <FolderIcon/>
                </li>
                <li>
                    <SettingsIcon/>
                </li>
                <li>
                    <DarkmodeIcon/>
                </li>
            </ul>
        </div>
    )
}

export default LeftBar;