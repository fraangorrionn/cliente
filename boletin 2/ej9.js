/*Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.*/

var salir = false;
var suma = 0;
var media = 0;
var contador = 0;
var mayor = 0;
var menor = 0;
var primerNumero = true; 

while (!salir) {
    var numero = parseInt(window.prompt("Introduce un número positivo (o un número negativo para salir): "));
    
    if (numero < 0) {
        alert("El número no es positivo, fin del programa");
        salir = true;
    } else {
        suma += numero;
        contador++;
        media = suma / contador;

        // Si es el primer número, lo asignamos tanto a mayor como a menor
        if (primerNumero) {
            mayor = numero;
            menor = numero;
            primerNumero = false; // Cambiamos la bandera ya que ya hemos ingresado el primer número
        } else {
            if (numero > mayor) {
                mayor = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    }
}

if (contador > 0) {
    alert("Media: " + media);
    alert("Mayor: " + mayor);
    alert("Menor: " + menor);
} else {
    alert("No se ingresaron números positivos.");
}
