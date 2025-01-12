import styles from "./styles.module/Points.module.css";
import { contrastRatio } from "../scripts/colorChecker";
import React, { useState, useEffect } from "react";

//Component that shows the contrast ratio between two colors and if it meets the WCAG standards.

function Points({ firstColor, secondColor }) {
  const contrast = contrastRatio(firstColor, secondColor);
  const percentage = contrast;
  const isMobile = window.innerWidth <= 700;


  const levels = [
    { label: "AA (larger text)", threshold: Math.floor((3 / 21) * 100) },
    { label: "AA (normal text)", threshold: Math.floor((4.5 / 21) * 100) },
    { label: "AAA (normal text)", threshold: Math.floor((7 / 21) * 100) },
  ];



  let contrastLevel = "⚠️ Below WCAG standards";
  if (percentage >= levels[2].threshold) {
    contrastLevel = "🌟 AAA - Excellent!";
  } else if (percentage >= levels[1].threshold) {
    contrastLevel = "💡 AA - Good!";
  } else if (percentage >= levels[0].threshold) {
    contrastLevel = "🔧 AA - Functional!";
  }


const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);




  const marginLeft = (() => {
    if (contrast >= 0 && contrast <= 9) {
      if (windowWidth > 700 && windowWidth <= 1200) return "10vw"; 
      if (windowWidth > 1200) return "6vw"; 
    }
    if (contrast === 100) {
      if (windowWidth > 700 && windowWidth <= 1200) return "6.7vw"; 
      if (windowWidth > 1200) return "3.5vw"; 
    }
    return ""; 
  })(); 

  return (
    <div className={styles.Points}>
      <p className={styles["points-properties"]}>Points</p>
      <p className={styles["points"]} style={{
    marginLeft,
  }}>{contrast}</p>
      <div
        style={{
          backgroundColor: "var(--cover-bar-color)",
          width: isMobile ? "75%" : "100%",
          height: isMobile ? "2.2vh" : "1.56vw",
        }}
        className={styles["progress-bar-cover"]}
      >
        <div
          className={styles["progress-bar"]}
          style={{
            backgroundColor: "var(--bar-color)",
            width: `${percentage}%`,
            height: isMobile ? "1.7vh" : "1.05vw",
          }}
        ></div>
      </div>
      <div className={styles["standard-results"]}>
        <p className={styles["contrast-level"]}>{contrastLevel}</p>
      </div>
    </div>
  );
}

export default Points;
