import styles from "./styles.module/Points.module.css";
import { contrastRatio } from "../scripts/colorChecker";

function Points({ firstColor, secondColor }) {
  const contrast = contrastRatio(firstColor, secondColor);
  const percentage = contrast;
  const isMobile = window.innerWidth <= 700;

  // Accesibility levels according to WCAG standards
  const levels = [
    { label: "AA (larger text)", threshold: Math.ceil((3 / 21) * 100) },
    { label: "AA (normal text)", threshold: Math.ceil((4.5 / 21) * 100) },
    { label: "AAA (normal text)", threshold: Math.ceil((7 / 21) * 100) },
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

  return (
    <div className={styles.Points}>
      <p className={styles["points-properties"]}>Points</p>
      <p className={styles["points"]}>{contrast}</p>
      <div
        style={{
          backgroundColor: "#F2F2F2",
          width: isMobile ? "90%" : "100%",
          height: isMobile ? "2.2vh" : "1.56vw",
        }}
        className={styles["progress-bar-cover"]}
      >
        <div
          className={styles["progress-bar"]}
          style={{
            backgroundColor: "black",
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
