import styles from "./styles.module/Points.module.css";
import { contrastRatio } from "../scripts/colorChecker";

function Points({ firstColor, secondColor }) {
  const contrast = contrastRatio(firstColor, secondColor);
  const percentage = contrast;
  const isMobile = window.innerWidth <= 700;

  // Accesibility levels according to WCAG standards
  const levels = [
    { label: "AA (larger text)", threshold: Math.floor((3 / 21) * 100) },
    { label: "AA (normal text)", threshold: Math.floor((4.5 / 21) * 100) },
    { label: "AAA (normal text)", threshold: Math.floor((7 / 21) * 100) },
  ];

  // Determine the contrast level

  let contrastLevel = "⚠️ Below WCAG standards";
  if (percentage >= levels[2].threshold) {
    contrastLevel = "🌟 AAA - Excellent!";
  } else if (percentage >= levels[1].threshold) {
    contrastLevel = "💡 AA - Good!";
  } else if (percentage >= levels[0].threshold) {
    contrastLevel = "🔧 AA - Functional!";
  }

  const marginLeft = contrast >= 0 && contrast <= 9 ? "6vw" : contrast === 100 ? "3.5vw" : ""; //solucion del bug de la posicion de los points

  return (
    <div className={styles.Points}>
      <p className={styles["points-properties"]}>Points</p>
      <p className={styles["points"]} style={{
    marginLeft,
  }}>{contrast}</p>
      <div
        style={{
          backgroundColor: "var(--cover-bar-color)",
          width: isMobile ? "90%" : "100%",
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
