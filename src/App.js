import React from "react";
import "./index.css"; 
import IconUser from "./Components/IconUser"; 
import IconFolder from "./Components/IconFolder"; 
import Logo from "./Components/Logo";
import AjustesLogo from "./Components/AjustesLogo";
import ColorSelect from "./ComponentsMain/ColorSelect";
import ThemeButton from "./Components/ThemeButton";

 

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="navigation">
        <button className="nav-button">
          <Logo />
        </button>
        <button className="nav-button">
          <IconUser /> 
        </button>
        <button className="nav-button">
          <IconFolder /> 
        </button>
        <button className="nav-button-bottom">
          <AjustesLogo />
        </button>
        <button className="theme-button">
          <ThemeButton/>
        </button>
      </nav>
    </aside>
  );
};

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <ColorSelect></ColorSelect>
      </main>
    </div>
  );
};

export default App;
