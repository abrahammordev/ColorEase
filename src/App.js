import React, { useState } from "react";
import "./index.css";
import SideBar from "./components/SideBar";
import ColorPicker from "./ComponentsMain/ColorPicker";
import ColorResult from "./ComponentsMain/ColorResult";

const App = () => {
  const [color1, setColor1] = useState("#ffffff");
  const [color2, setColor2] = useState("#000000");

  return (
    <div className="app-container">
      <SideBar />
      <ColorPicker
        color1={color1}
        setColor1={setColor1}
        color2={color2}
        setColor2={setColor2}
      />
      <ColorResult color1={color1} color2={color2} />
    </div>
  );
};

export default App;
