import React from "react";
import "./Example.css";


const Example = ({ color1, color2 }) => {
  // Función para obtener el nombre del color
  
  return (
    <div className="example-wrapper">
      <div className="color-card" style={{ backgroundColor: color1 }}>
        <h1 className="color-title" style={{ color: color2 }}>
          {color1}
        </h1>
        <div className="color-info-section">
          <p className="color-info">Color1: {color1}</p>
          <p className="color-info">Color2: {color2}</p>
          <pre className="color-code">background-color: {color1};</pre>
          <pre className="color-code">color: {color2};</pre>
        </div>
      </div>

      <div className="example-uses">
        <h2>Ejemplos de Uso</h2>
        <p style={{ color: color1 }}>
          Este es un párrafo que utiliza el color 1 como color de texto.
        </p>
        <div className="graph-example" style={{ backgroundColor: color2 }}>
          Gráfico de ejemplo con color 2 de fondo.
        </div>
      </div>
    </div>
  );
};

export default Example;
