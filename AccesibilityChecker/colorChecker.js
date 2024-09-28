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

function luminanceComponent(lum) {
  c = c / 255;
  if (c <= 0.03928) {
    return c / 12.92;
  } else {
    return Math.pow((c + 0.055) / 1.055, 2.4);
  }
}
