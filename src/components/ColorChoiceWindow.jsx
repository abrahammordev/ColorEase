import { useRef } from "react";
import ColorChoice from "./ColorChoice";
import styles from "./ColorChoiceWindow.module.css";
import Points from "./Points";
import React, { useState } from "react";



function ColorChoiceWindow({ onColorsUpdate = () => {} }){

   
    const [firstColor, setFirstColor] = useState("#000000");
    const [secondColor, setSecondColor] = useState("#000000");

    const handleColorChange = (id, colorValue) => {
        if (id === "first") {
          setFirstColor(colorValue);
          onColorsUpdate({ firstColor: colorValue });
        } else if (id === "second") {
          setSecondColor(colorValue);
          onColorsUpdate({ secondColor: colorValue });
        }
         // Actualizamos los colores en el padre
        
    };

    return(
        <div className={styles.ColorChoiceWindow}>
            <div className={styles["color-properties"]}>
                <p>Color 1</p>
                <ColorChoice id="first" onColorChange={(color) => handleColorChange("first", color)} />
                <p>Color 2</p>
                <ColorChoice id="second" onColorChange={(color) => handleColorChange("second", color)} />
            </div>
            <p ><button className={styles["color-button"]}></button></p>
            
        </div>
    );
    //color={color2} setColor={setColor2}
    //<Points color1={color1} color2={color2} /> {/* Pasa los colores a Points */}
}

export default ColorChoiceWindow;