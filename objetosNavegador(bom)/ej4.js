/*En un cuadro de diálogo de alerta, muestre el alto y ancho en píxeles y la profundidad de color de su pantalla. Cada valor será separado 
por un salto de línea. */

const anchoPantalla = window.screen.width;
const altoPantalla = window.screen.height;
const profundidadColor = window.screen.colorDepth;

alert(`Ancho de la pantalla: ${anchoPantalla}px\nAlto de la pantalla: ${altoPantalla}px\nProfundidad de color: ${profundidadColor} bits`);