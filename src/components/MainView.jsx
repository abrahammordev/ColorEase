import React from "react";
import styles from "./styles.module/MainView.module.css";
import Title from "./Title";
import MainFunctionalities from "./MainFunctionalities";

function MainView({ onUpdateColors }) {
    return (
        <div className={styles.MainView}>
            <Title />
            <MainFunctionalities onUpdateColors={onUpdateColors} />
        </div>
    );
}

export default MainView;