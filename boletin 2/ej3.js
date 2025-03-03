/*Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso 
especial del valor 0 mostrando el mensaje de error correspondiente.*/
parseFloat(numero = window.prompt("introduce un número:"));

function valorInverso(numero) {
    if (numero === 0) {
        return "Error: El inverso de 0 no está definido.";
    } else {
        return 1 / numero;
    }
}

parseFloat(resultado = valorInverso(numero));
alert(resultado);