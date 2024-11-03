import React, { useState } from "react";
import colorChecker from "../AccesibilityChecker/colorChecker";
import "./ColorResult.css";

const ColorResult = ({ color1, color2 }) => {
  // Función para verificar si un color es válido
  const isValidColor = (color) => /^#([0-9A-F]{3}){1,2}$/i.test(color);

  // Verificar si los colores son válidos
  if (!isValidColor(color1) || !isValidColor(color2)) {
    return (
      <div className="color-result-container">
        <h2 className="color-result-title">Contraste entre colores</h2>
        <p className="color-error">Por favor, introduce colores válidos.</p>
      </div>
    );
  }

  // Calcular el valor de contraste si los colores son válidos
  const contrastValue = colorChecker(color1, color2);
  const percentage = Math.min((contrastValue / 21) * 100, 100);
  return (
    <div className="color-result-container">
      <h2 className="color-result-title">Contraste entre colores</h2>
      <div className="color-result-bar">
        <div
          className="color-result-progress"
          style={{ width: `${percentage}%`, backgroundColor: color1 }}
        />
      </div>
      <p>Relación de contraste: {contrastValue}</p>
      <button
        onClick={() => alert("Preview clicked!")}
        className="color-result-button"
      >
        Preview
      </button>
    </div>
  );
};

export default ColorResult;
