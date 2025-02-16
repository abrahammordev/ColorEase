import React, { useState } from "react";
import LeftBar from "./components/LeftBar";
import MainView from "./components/MainView";
import Preview from "./components/Preview";
import styles from "./App.module.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Analytics } from "@vercel/analytics/react";

function App() {
    const [firstColor, setFirstColor] = useState("#ffffff");
    const [secondColor, setSecondColor] = useState("#000000");

    const handleUpdateColors = ({ firstColor, secondColor }) => {
        if (firstColor !== undefined) setFirstColor(firstColor);
        if (secondColor !== undefined) setSecondColor(secondColor);
    };

    return (
      <ThemeProvider>
        <div className={styles.appContainer}>
          <Analytics />
          <LeftBar className={styles.leftBar} />
          <MainView onUpdateColors={handleUpdateColors} />
          <Preview firstColor={firstColor} secondColor={secondColor} />
        </div>
      </ThemeProvider>
    );
}

export default App;
