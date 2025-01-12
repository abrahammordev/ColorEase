//algorithm to check the contrast ratio between two colors

function hexToRGB(hexColor) {
  hexColor = hexColor.replace("#", "");

  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  return [r, g, b];
}



function luminanceComponent(c) {
  c = c / 255;
  if (c <= 0.03928) {
    return c / 12.92;
  } else {
    return Math.pow((c + 0.055) / 1.055, 2.4);
  }
}



function relativeLuminance([r, g, b]) {
  return (
    0.2126 * luminanceComponent(r) +
    0.7152 * luminanceComponent(g) +
    0.0722 * luminanceComponent(b)
  );
}



export function contrastRatio(color1, color2) {
  let lum1 = relativeLuminance(hexToRGB(color1));
  let lum2 = relativeLuminance(hexToRGB(color2));

  let L1 = Math.max(lum1, lum2);
  let L2 = Math.min(lum1, lum2);
  if (color1 === color2) {
    return 0;
  }
  return (Math.ceil(((L1 + 0.05) / (L2 + 0.05))/21*100));
}

