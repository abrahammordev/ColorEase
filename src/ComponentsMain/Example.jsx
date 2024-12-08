import React from "react";
import "./Example.css";
import selfportrait from "./../self-portrait.jpg";

const Example = ({ color1, color2 }) => {
  return (
    <div
      className="example-wrapper"
      style={{ backgroundColor: color2, color: color1 }}
    >
      <div className="color-card">
        <h1 className="color-title" style={{ color: color2 }}>
          {color1}
        </h1>
        <p className="color-code-title">{color1}</p>
        {/* Efecto visual rallas en diagonal en ese color */}
        <div className="color-info-section">
          {/* Información metida en una sección con borde 1px */}
          <p className="color-info">.theme &#123;</p>
          <p className="color-info">color: {color1};</p>
          <p className="color-code">background-color: {color2};</p>
          <p className="color-info">&#125;</p>
        </div>
      </div>
      <div className="color-quote">
        <div
          style={{
            borderLeft: `5px solid ${color2}`,
            paddingLeft: "10px",
            marginLeft: "10px",
          }}
        >
          <h3>A color is as strong as the impression it creates</h3>
          <p>Ivan Albright</p>
          <p>6 November 1912</p>
        </div>
        <img src={selfportrait} alt="Self portrait" className="rounded-image" />
      </div>

      <div className="example-explaining">
        <p>
          Color contrast ensures text and visuals are distinguishable, improving
          readability and accessibility for all users, especially those with
          visual impairments. WCAG guidelines recommend a contrast ratio of
          4.5:1 for normal text and 3:1 for large text. Proper contrast enhances
          usability, creating more inclusive designs.
        </p>
      </div>
      <div className="example-save">
        <p>Do you have a favourite color?</p>
        {/* Checkbox sí o no */}
        <label>
          <input type="checkbox" name="favorite" value="yes" /> Yes
        </label>
        <label>
          <input type="checkbox" name="favorite" value="no" /> No
        </label>
        {/* Botón para guardarlo */}
        <button type="button">Save</button>
      </div>
    </div>
  );
};

export default Example;
