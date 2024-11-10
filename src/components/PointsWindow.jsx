import ColorChoice from "./ColorChoice";
import Points from "./Points";
import styles from "./PointsWindow.module.css"

function PointsWindow({ firstColor, secondColor}){
    return(
        <div className={styles.PointsWindow}>
            <div className={styles["points-properties"]}>
                <Points firstColor={firstColor} secondColor={secondColor}/>
                
                
            </div>
            <p ><button className={styles["color-button"]}></button></p>
        </div>
    );
}

export default PointsWindow;