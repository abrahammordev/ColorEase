import { contrastRatio } from "./colorChecker.js";

//algorithm to generate the optimal color combination

function generateOptimalcombination() {
  let optimalUmbral = 50;
  let bestFirstColor = generateRandomColor();
  let bestSecondColor = generateRandomColor();
  let bestContrast = contrastRatio(bestFirstColor, bestSecondColor);
  for (let i = 0; i < 10000; i++) {
    let firstColor = generateRandomColor();
    let secondColor = generateRandomColor();
    let contrast = contrastRatio(firstColor, secondColor);
    if (contrast >= optimalUmbral) {
      return [firstColor, secondColor];
    }
    if (contrast > bestContrast) {
      bestFirstColor = firstColor;
      bestSecondColor = secondColor;
      bestContrast = contrast;
    }
  }

  return [bestFirstColor, bestSecondColor];
}

function generateRandomColor() {
  let color = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + color.padStart(6, "0");
}

export { generateOptimalcombination };
