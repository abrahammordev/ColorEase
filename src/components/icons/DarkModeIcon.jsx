import styles from "./styles.module/DarkModeIcon.module.css";


function DarkModeIcon() {

    
    return(
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                className={styles.checkbox}
                
                
            />
        </div>
    )
}

export default DarkModeIcon;