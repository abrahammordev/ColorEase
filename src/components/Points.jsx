import styles from "./Points.module.css";
import {contrastRatio} from "../colorChecker";


function Points({ firstColor, secondColor }){
    return(
        <div className={styles.Points}>
            <p className={styles["points-properties"]}>Points</p>
            <p className={styles["points"]}>{contrastRatio(firstColor, secondColor)}</p>
            <div style={{backgroundColor: "#F2F2F2", width: "100%", height: '1.56vw'}} className={styles["progress-bar-cover"]}>
                <div className={styles["progress-bar"]} style={{backgroundColor: "black", width: `${contrastRatio(firstColor, secondColor)}%`, height: '1.05vw'}} ></div>
            </div>
        </div>
    );
}

export default Points;