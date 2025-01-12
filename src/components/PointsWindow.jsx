import Points from "./Points";
import styles from "./styles.module/PointsWindow.module.css"

//Component that contains the Points component.

function PointsWindow({ firstColor, secondColor}){
    return(
        <div className={styles.PointsWindow}>
            <div className={styles["points-properties"]}>
                <Points firstColor={firstColor} secondColor={secondColor}/>
            </div>
        </div>
    );
}

export default PointsWindow;