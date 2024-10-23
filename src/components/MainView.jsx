import styles from "./MainView.module.css";
import Titulo from "./Titulo";
function MainView(){
    return(
        <div classNme={styles.MainView}>
            <Titulo/>
            //mainFunctionalities (div2.2) y socialSection (div 2.3) estos tres sin display: flex.
            // dentro del 2.2 va colorChoiceWindow (div 2.2.1) y pointsWindow (div 2.2.2) 
        </div>
    );
}

export default MainView;