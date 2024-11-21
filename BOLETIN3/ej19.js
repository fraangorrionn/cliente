/*Escribe una expresión regular que encuentre todos los números en un texto dado*/

const texto = "Hay 123 manzanas, 45 peras y 6789 naranjas en el mercado.";
const numeros = texto.match(/\b\d+\b/g);
console.log(numeros); // Muestra ["123", "45", "6789"]
