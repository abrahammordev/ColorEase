import DarkmodeIcon from "./icons/DarkModeIcon";
import FolderIcon from "./icons/FolderIcon";
import LogoIcon from "./icons/LogoIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SettingsIcon from "./icons/SettingsIcon";
import styles from "./LeftBar.module.css";
import ColorBlindIcon from "./icons/ColorBlindIcon";

function LeftBar() {
  return (
    <div className={styles.LeftBar}>
      <div className={styles.LogoIcon}>
        <LogoIcon />
      </div>

      <div className={styles.Icons}>
        <SettingsIcon />
        <DarkmodeIcon />
      </div>
    </div>
  );
}

export default LeftBar;
