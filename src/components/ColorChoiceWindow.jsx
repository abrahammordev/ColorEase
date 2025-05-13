import ColorChoice from "./ColorChoice";
import styles from "./styles.module/ColorChoiceWindow.module.css";
import React, { useState, useEffect } from "react";
import { generateOptimalcombination } from "../scripts/optimalColor.js";
import GitHubIcon from "./icons/GitHubIcon.jsx";
import BuyMeACoffee from "./icons/BuyMeACoffee.jsx";
import { contrastRatio } from "../scripts/colorChecker";
import GenerateOptimalButton from "./GenerateOptimalButton";

//Window where user can choose colors and generate optimal color combination, here are 2 ColorPicker components. 

function ColorChoiceWindow({
  onColorsUpdate = () => {},
  initialColors = { firstColor: "#ffffff" ,
  secondColor : "#000000"}
}) {
  const [firstColor, setFirstColor] = useState(initialColors.firstColor);
  const [secondColor, setSecondColor] = useState(initialColors.secondColor);
  useEffect(() => {
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
        <GenerateOptimalButton
          onClick={() => {
            const [color1, color2] = generateOptimalcombination(); 
            setFirstColor(color1); 
            setSecondColor(color2); 

            
            onColorsUpdate({ firstColor: color1, secondColor: color2 });
          }}
        />
      </div>
      <div className={styles["social-media"]}>
        
          <BuyMeACoffee />
        
        
          <GitHubIcon />
        
      </div>
    </div>
  );
}

export default ColorChoiceWindow;
