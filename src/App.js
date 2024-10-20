import React from "react";
import "./index.css"; // Asegúrate de que este sea el camino correcto al archivo CSS
import IconUser from "./Components/IconUser"; // Asegúrate de que la ruta sea correcta para Icon1
import IconFolder from "./Components/IconFolder"; // Asegúrate de que la ruta sea correcta para Icon2
import Logo from "./Components/Logo";
import AjustesLogo from "./Components/AjustesLogo";
import ColorSelect from "./ComponentsMain/ColorSelect";


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav className="navigation">
        <button className="nav-button">
          <Logo />
        </button>
        <button className="nav-button">
          <IconUser /> {/* Componente Icon1 */}
        </button>
        <button className="nav-button">
          <IconFolder /> {/* Componente Icon2 */}
        </button>
        <button className="nav-button">
          <AjustesLogo />
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
