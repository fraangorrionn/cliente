/* 16 Diseñar un programa que lea de teclado un número entero positivo en base 10 y escriba su correspondiente representación
binaria usando la técnica de divisiones sucesivas. */

function decimalToBinary() {
    let number = parseInt(prompt("Introduce un número entero positivo:"));
    if (isNaN(number) || number < 0) {
        alert("Número no válido.");
        return;
    }

    let binary = number.toString(2);
    alert(`La representación binaria de ${number} es: ${binary}`);
}

decimalToBinary();