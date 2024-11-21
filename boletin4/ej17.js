/*Realizar un script que tome una serie de palabras ingresadas por el usuario (separadas por coma) y almacena esas palabras en un array.
Posteriormente, manipule el array para mostrar en una nueva ventana los siguientes datos: 
La primera palabra ingresada por el usuario 
La última palabra ingresada por el usuario
El número de palabras presentes en el array
Todas las palabras ordenadas alfabéticamente 
 */


let input = prompt("Introduce palabras separadas por comas:");
let palabras = input.split(",").map(palabra => palabra.trim());

let primeraPalabra = palabras[0];
let ultimaPalabra = palabras[palabras.length - 1];
let numeroDePalabras = palabras.length;

function ordenarPalabras(array) {
    return array.sort();
}

let mensaje = `
    Primera palabra: ${primeraPalabra}
    Última palabra: ${ultimaPalabra}
    Número de palabras: ${numeroDePalabras}
    Palabras ordenadas: ${ordenarPalabras([...palabras]).join(", ")}
`;


alert(mensaje);
