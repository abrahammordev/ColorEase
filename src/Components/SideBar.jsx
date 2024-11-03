import React from "react";
import IconUser from "./IconUser";
import IconFolder from "./IconFolder";
import Logo from "./Logo";
import AjustesLogo from "./AjustesLogo";
import "./SideBar.css"



const SideBar = () => {
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
        <button className="nav-button">
          <AjustesLogo />
        </button>
      </nav>
    </aside>
  );
};

export default SideBar;
