import styles from "./Title.module.css";
import titleImage from "../images/Title.png";


function Title(){
    return(
        <div className={styles.Title}>
           <img src={titleImage}></img>
        </div>
    );
}

export default Title;