import React, { useState } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import TitleColorEase from "./components/TitleColorEase";
import ColorPicker from "./ComponentsMain/ColorPicker";
import ColorResult from "./ComponentsMain/ColorResult";

const App = () => {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#000000");

  return (
    <div className="app-container">
      {/* Barra de navegación */}
      <div className="nav-component">
        {/* Barra lateral */}
        <SideBar />
      </div>
      {/* Título principal de la app */}
      <div className="title-component">
        <TitleColorEase />
      </div>
      <div className="color-section">
        <div className="content-component">
          <ColorPicker
            color1={color1}
            setColor1={setColor1}
            color2={color2}
            setColor2={setColor2}
          />
        </div>
        {/* Vista previa de los colores */}
        <div className="preview-component">
          <ColorResult color1={color1} color2={color2} />
        </div>
      </div>

    </div>
  );
};

export default App;
