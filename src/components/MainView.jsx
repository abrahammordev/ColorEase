import styles from "./MainView.module.css";
import Title from "./Title";
import MainFunctionalities from "./MainFunctionalities";
function MainView(){
    return(
        <div classNme={styles.MainView}>
            <Title/>
            <MainFunctionalities/>
            //socialSection (div 2.3) estos tres sin display: flex.
            // dentro del 2.2 va colorChoiceWindow (div 2.2.1) y pointsWindow (div 2.2.2) 
        </div>
    );
}

export default MainView;