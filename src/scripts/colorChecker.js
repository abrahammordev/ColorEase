/*Para medir el nivel de accesibilidad entre dos colores usamos la relación de contraste
Esta está definida de 1:1 (ningún contraste) a 21:1 (mayor contraste, de blanco a negro)
*/

//Función para convertir HEX a RGB

function hexToRGB(hexColor) {
  hexColor = hexColor.replace("#", "");

  let r = parseInt(hexColor.substring(0, 2), 16);
  let g = parseInt(hexColor.substring(2, 4), 16);
  let b = parseInt(hexColor.substring(4, 6), 16);

  return [r, g, b];
}

//Función para calcular el componente de luminancia

function luminanceComponent(c) {
  c = c / 255;
  if (c <= 0.03928) {
    return c / 12.92;
  } else {
    return Math.pow((c + 0.055) / 1.055, 2.4);
  }
}

//Función para calcular la luminancia relativa del color

function relativeLuminance([r, g, b]) {
  return (
    0.2126 * luminanceComponent(r) +
    0.7152 * luminanceComponent(g) +
    0.0722 * luminanceComponent(b)
  );
}

//Función para calcular la correlación de contraste entre dos colores y devuelve una puntuacion de 0 a 100

export function contrastRatio(color1, color2) {
  let lum1 = relativeLuminance(hexToRGB(color1));
  let lum2 = relativeLuminance(hexToRGB(color2));

  let L1 = Math.max(lum1, lum2);
  let L2 = Math.min(lum1, lum2);

  return (Math.ceil(((L1 + 0.05) / (L2 + 0.05))/21*100));
}

