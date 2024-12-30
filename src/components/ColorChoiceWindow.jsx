import ColorChoice from "./ColorChoice";
import styles from "./ColorChoiceWindow.module.css";
import React, { useState, useEffect } from "react";
import { generateOptimalcombination } from "../optimalColor.js";
import GitHubIcon from "./icons/GitHubIcon.jsx";
import BuyMeACoffee from "./icons/BuyMeACoffee.jsx";
import { contrastRatio } from "../colorChecker";

function ColorChoiceWindow({
  onColorsUpdate = () => {},
  initialColors = { firstColor: "#ffffff" ,
  secondColor : "#000000"}
}) {
  const [firstColor, setFirstColor] = useState(initialColors.firstColor);
  const [secondColor, setSecondColor] = useState(initialColors.secondColor);
  const [contrast, setContrast] = useState(
    contrastRatio(firstColor, secondColor)
  );

  useEffect(() => {
    setContrast(contrastRatio(firstColor, secondColor));
    onColorsUpdate({ firstColor, secondColor });
  }, [firstColor, secondColor, onColorsUpdate]);

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
          <p className={styles["text-properties"]}>Color 1</p>
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
          <BuyMeACoffee />
        </a>
        <a href="https://github.com/abrahammordev/ColorEase" target="_blank">
          <GitHubIcon />
        </a>
      </div>
    </div>
  );
}

export default ColorChoiceWindow;
