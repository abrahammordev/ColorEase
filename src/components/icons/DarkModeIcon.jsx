import styles from "./styles.module/DarkModeIcon.module.css";
    
function DarkmodeIcon(){
    return(
        <div className={styles.DarkmodeIcon}>
            <label for="switch" class="switch">
            <input id="switch" type="checkbox" />
            <span class="slider"></span>
            <span class="decoration"></span>
            </label>
        </div>
    )
}

export default DarkmodeIcon;