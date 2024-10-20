// src/Sidebar.jsx
import React from "react";
import IconUser from "./IconUser"; // Primer ícono
import IconFolder from "./IconFolder"; // Segundo ícono
import Icon3 from "./Icon3"; // Tercer ícono
import AjustesLogo from "./AjustesLogo";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo">
        <UserIcon />
      </div>
      <nav className="navigation">
        <button className="nav-button">
          <IconUser />
        </button>
        <button className="nav-button">
          <IconFolder />
        </button>
        <button className="nav-button">
          <Icon3 />
        </button>
        <button className="nav-buttonAjustes-button">
          <AjustesLogo />
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
