import React, { useState } from "react";
import "./App.css";
import SideBar from "./Components/SideBar";
import TitleColorEase from "./Components/TitleColorEase";
import ColorPicker from "./ComponentsMain/ColorPicker";
import ColorResult from "./ComponentsMain/ColorResult";
import Example from "./ComponentsMain/Example";

const App = () => {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#000000");

  return (
    <div className="app-container">
      {/* Barra lateral */}
      <div className="nav-component">
        <SideBar />
      </div>

      {/* Título principal */}
      <div className="title-component">
        <TitleColorEase />
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <div className="color-section">
          <ColorPicker
            color1={color1}
            setColor1={setColor1}
            color2={color2}
            setColor2={setColor2}
          />
          <ColorResult color1={color1} color2={color2} />
        </div>
        <div className="preview-component">
          <Example color1={color1} color2={color2} />
        </div>
      </div>
    </div>
  );
};

export default App;
