import ColorChoiceWindow from "./ColorChoiceWindow";
import styles from "./MainFunctionalities.module.css";
import PointsWindow from "./PointsWindow";
import React, { useState } from "react";

function MainFunctionalities(){

    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#000000");

    //const handleColorsUpdate = (updatedColors) => {
      //setColors(updatedColors);
    //};

    const handleColorsUpdate = ({ firstColor, secondColor }) => {
        if (firstColor !== undefined) setFirstColor(firstColor);
        if (secondColor !== undefined) setSecondColor(secondColor);
      };

    return(
        <div className={styles.mainFunctionalities}>
            <ColorChoiceWindow onColorsUpdate={handleColorsUpdate}/> 
            <PointsWindow firstColor={firstColor} secondColor={secondColor}/>
        </div>
    )
}

export default MainFunctionalities;