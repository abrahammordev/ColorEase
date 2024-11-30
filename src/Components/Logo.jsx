import React from "react";
import logo from "../image.png"

const Logo = () => {
  return (
    <div>
      <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
    </div>
  );
};

export default Logo;
