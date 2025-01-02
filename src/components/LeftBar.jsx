import DarkmodeIcon from "./icons/DarkModeIcon";
import FolderIcon from "./icons/FolderIcon";
import LogoIcon from "./icons/LogoIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "./styles.module/LeftBar.module.css";
import ColorBlindIcon from "./icons/ColorBlindIcon";
import TitleBar from "./TitleBar";

function LeftBar() {
  return (
    <div className={styles.LeftBar}>
      <div className={styles.LogoIcon}>
        <LogoIcon />
      </div>
      <TitleBar/>
      <div className={styles.Icons}>
        <SettingsIcon />
        <DarkmodeIcon />
      </div>
    </div>
  );
}

export default LeftBar;
