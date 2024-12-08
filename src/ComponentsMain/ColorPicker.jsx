import React, { useState } from "react";
import colorChecker from "../AccesibilityChecker/colorChecker";
import "./ColorPicker.css";

const ColorPicker = ({ color1, color2, setColor1, setColor2 }) => {
  const handleColorChange = (setColor) => (e) => {
    const newColor = e.target.value;
    setColor(newColor);
  };
  const handleTextChange = (setColor) => (e) => {
    setColor(e.target.value);
  };
  const handleBlur = (color, setColor) => () => {
    if (/^#([0-9A-F]{3}){1,2}$/i.test(color)) {
      setColor(color);
    } else {
      //Provisional
      setColor("#ffffff");
      alert("Por favor, introduce un color hexadecimal válido.");
    }
  };

  const handleSubmit = () => {
    const isValidColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

    if (isValidColor(color1)  && isValidColor(color2)){
      console.log("Color 1:", color1);
      console.log("Color 2:", color2);
      console.log("Contraste: ", colorChecker(color1, color2));
    }
    
  };

  return (
    <div className="color-picker-container">
      <h2 className="color-picker-title"></h2>
      <div className="color-picker-input-group">
        <label htmlFor="color1" className="color-picker-label">
          Color 1:
        </label>
        <input
          type="text"
          id="color1-text"
          value={color1}
          onChange={handleTextChange(setColor1)}
          onBlur={handleBlur(color1, setColor1)}
          className="color-picker-text-input"
          maxLength="7"
        />
        <input
          type="color"
          id="color1"
          value={color1}
          onChange={handleColorChange(setColor1)}
          className="color-picker-color-input"
        />
      </div>
      <div className="color-picker-input-group">
        <label htmlFor="color2" className="color-picker-label">
          Color 2:
        </label>
        <input
          type="text"
          id="color2-text"
          value={color2}
          onChange={handleTextChange(setColor2)}
          onBlur={handleBlur(color2, setColor2)}
          className="color-picker-text-input"
          maxLength="7"
        />
        <input
          type="color"
          id="color2"
          value={color2}
          onChange={handleColorChange(setColor2)}
          className="color-picker-color-input"
        />
      </div>
      <button onClick={handleSubmit} className="color-picker-button">
        Aceptar
      </button>
    </div>
  );
};

export default ColorPicker;
