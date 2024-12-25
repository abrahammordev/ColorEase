import { useRef } from "react";
import ColorChoice from "./ColorChoice";
import styles from "./ColorChoiceWindow.module.css";
import Points from "./Points";
import React, { useState } from "react";
import buyMeCoffee from "../images/cib--buy-me-a-coffee.png";
import githubIcon from "../images/mdi--github.png";
import { generateOptimalcombination } from "../optimalColor.js";

function ColorChoiceWindow({ onColorsUpdate = () => {} }) {
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

  return (
    <div className={styles.ColorChoiceWindow}>
      <div>
        <div className={styles["color-properties"]}>
          <p>Color 1</p>
          <ColorChoice
            id="first"
            value={firstColor}
            onColorChange={(color) => handleColorChange("first", color)}
          />
          <p className={styles["text-properties"]}>Color 2</p>
          <ColorChoice
            id="second"
            value={secondColor}
            onColorChange={(color) => handleColorChange("second", color)}
          />
        </div>
      </div>
      <div className={styles["random-colors"]}>
        <button
          onClick={() => {
            const [color1, color2] = generateOptimalcombination(); // Llama a la función y desestructura los colores
            setFirstColor(color1); // Actualiza el estado de `firstColor`
            setSecondColor(color2); // Actualiza el estado de `secondColor`

            // Notifica al componente padre sobre los nuevos colores
            onColorsUpdate({ firstColor: color1, secondColor: color2 });
          }}
        >
          Generate optimal
        </button>
      </div>
      <div className={styles["social-media"]}>
        <a href="https://buymeacoffee.com/colorease">
          <img src={buyMeCoffee} width={50} height={50}></img>
        </a>
        <a href="https://github.com/abrahammordev/ColorEase" target="_blank">
          <img src={githubIcon} width={50} height={50}></img>
        </a>
      </div>
    </div>
  );
  //color={color2} setColor={setColor2}
  //<Points color1={color1} color2={color2} /> {/* Pasa los colores a Points */}
}

export default ColorChoiceWindow;
