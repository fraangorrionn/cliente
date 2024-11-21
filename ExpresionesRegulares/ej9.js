/*Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.*/

let salir = false;
let contador = 0;
let suma = 0;
let numeros = [];

while (!salir) {
    let num = parseInt(prompt("Introduce un número (escribe -1 para salir): "));
    
    if (num === -1) {
        salir = true;  // Salir del bucle si se ingresa -1
    } else if (num >= 0) {
        numeros.push(num); // Agregar número al array
        suma += num;
        contador++;
    } else {
        alert("Por favor, introduce solo números positivos o -1 para salir.");
    }
}

if (contador > 0) {
    numeros.sort((a, b) => a - b); // Ordenar de menor a mayor
    let menor = numeros[0];
    let mayor = numeros[numeros.length - 1];
    let media = suma / contador;

    alert("El número menor es: " + menor);
    alert("El número mayor es: " + mayor);
    alert("La media de los números es: " + media);
} else {
    alert("No se introdujeron números válidos.");
}