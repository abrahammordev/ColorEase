import styles from "./Titulo.module.css";
import titleImage from "../images/Title.png";


function Titulo(){
    return(
        <div className={styles.Titulo}>
           <img src={titleImage}></img>
        </div>
    );
}

export default Titulo;