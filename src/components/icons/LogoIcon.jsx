import styles from "./styles.module/LogoIcon.module.css";
import mainIcon from "../../images/main-icon.webp";

function LogoIcon() {
  return (
    <div>
      <img src={mainIcon} className={styles.LogoIcon}/>
    </div>
  );
}

export default LogoIcon;
