import styles from "./Points.module.css";
import {contrastRatio} from "../colorChecker";


function Points({ firstColor, secondColor }){
    return(
        <div className={styles.Points}>
            <p style={{ color: firstColor }}>Points 1</p>
            <p style={{ color: secondColor }}>Points 2</p>
        </div>
    );
}

export default Points;