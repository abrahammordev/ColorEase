import React, { useState } from "react";
import ColorChoiceWindow from "./ColorChoiceWindow";
import PointsWindow from "./PointsWindow";
import styles from "./MainFunctionalities.module.css";

function MainFunctionalities({ onUpdateColors }) {
    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#000000");

    const handleColorsUpdate = ({ firstColor, secondColor }) => {
        if (firstColor !== undefined) {
            setFirstColor(firstColor);
            onUpdateColors({ firstColor, secondColor }); // Actualiza colores en App
        }
        if (secondColor !== undefined) {
            setSecondColor(secondColor);
            onUpdateColors({ firstColor, secondColor }); // Actualiza colores en App
        }
    };

    return (
        <div className={styles.mainFunctionalities}>
            <ColorChoiceWindow onColorsUpdate={handleColorsUpdate} />
            <PointsWindow firstColor={firstColor} secondColor={secondColor} />
        </div>
    );
}

export default MainFunctionalities;