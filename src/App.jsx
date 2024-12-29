import React, { useState } from "react";
import LeftBar from "./components/LeftBar";
import MainView from "./components/MainView";
import Preview from "./components/Preview";
import styles from "./App.module.css";

function App() {
    const [firstColor, setFirstColor] = useState("#ffffff");
    const [secondColor, setSecondColor] = useState("#000000");

    const handleUpdateColors = ({ firstColor, secondColor }) => {
        if (firstColor !== undefined) setFirstColor(firstColor);
        if (secondColor !== undefined) setSecondColor(secondColor);
    };

    return (
        <div className={styles.appContainer}>
            <LeftBar className={styles.leftBar}/>
            <MainView onUpdateColors={handleUpdateColors} />
            <Preview firstColor={firstColor} secondColor={secondColor} />
        </div>
    );
}

export default App;