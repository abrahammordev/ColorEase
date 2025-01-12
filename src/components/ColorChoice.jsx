import { useRef, useState, useEffect } from "react";
import styles from "./styles.module/ColorChoice.module.css";
import colorCircle from "../images/color-circle-icon.png";

//Component for color picker where user can choose color by entering hex code or using color picker.

function ColorChoice({value = "#000000", onColorChange = () => {} }) {
  const colorInputRef = useRef(null);
  const textInputRef = useRef(null);
  const [textValue, setTextValue] = useState(value);

  
  useEffect(() => {
    setTextValue(value);
    if (colorInputRef.current) {
      colorInputRef.current.value = value;
    }
  }, [value]);

  const handleClick = () => colorInputRef.current.click();

  const handleChange = () => {
    const colorValue = colorInputRef.current.value;
    setTextValue(colorValue);
    onColorChange(colorValue);
  };

  const handleTextChange = (e) => {
    let value = e.target.value;
    if (value.length > 7) {
      value = value.substring(0, 7);
    }
    
    if (!value.startsWith("#")) {
      value = "#" + value;
    }
    setTextValue(value);
    
    if (value.length === 7) {
      colorInputRef.current.value = value;
      onColorChange(value);
    }
  };

  return (
    <div className={styles.ColorChoice}>
      <input
        type="text"
        className={styles["text-input"]}
        placeholder="#Hex"
        maxLength="7"
        value={textValue}
        ref={textInputRef}
        onChange={handleTextChange}
      />
      <input
        type="color"
        ref={colorInputRef}
        className={styles["hidden-color-input"]}
        onInput={handleChange}
      />
      <img
        src={colorCircle}
        alt="color-picker-icon"
        onClick={handleClick}
        className={styles["color-icon"]}
      />
    </div>
  );
}

export default ColorChoice;
