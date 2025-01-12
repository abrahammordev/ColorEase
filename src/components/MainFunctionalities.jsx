import React, { useState } from "react";
import ColorChoiceWindow from "./ColorChoiceWindow";
import PointsWindow from "./PointsWindow";
import styles from "./styles.module/MainFunctionalities.module.css";
import PreviewMobile from "./PreviewMobile";

//Component that contains the main functionalities of the app.

function MainFunctionalities({ onUpdateColors }) {
    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#ffffff");

    const handleColorsUpdate = ({ firstColor, secondColor }) => {
        if (firstColor !== undefined) {
            setFirstColor(firstColor);
            onUpdateColors({ firstColor, secondColor }); 
        }
        if (secondColor !== undefined) {
            setSecondColor(secondColor);
            onUpdateColors({ firstColor, secondColor });
        }
    };

    return (
      <div className={styles.mainFunctionalities}>
        <ColorChoiceWindow onColorsUpdate={handleColorsUpdate} />
        <PreviewMobile firstColor={firstColor} secondColor={secondColor} />
        <PointsWindow firstColor={firstColor} secondColor={secondColor} />
      </div>
    );
}

export default MainFunctionalities;