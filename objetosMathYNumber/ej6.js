/*Realizar un programa que generalice el algoritmo del Tarot para un número de cualquier cantidad de cifras. Ejemplo: 
999999999999999999999=9+.....9+9+9= 189 = 18 = 9.  (Pista: Usar log en base 10. No es obligatorio usarla) */
function calcularTarot(numero) {
    let suma = numero;

    // Seguir sumando los dígitos mientras el resultado tenga más de un dígito
    while (suma >= 10) {
        suma = String(suma)
            .split('') // Dividir el número en sus dígitos
            .map(Number) // Convertir cada carácter a número
            .reduce((acc, curr) => acc + curr, 0); // Sumar todos los dígitos
    }

    return suma;
}

// Solicitar al usuario que introduzca un número
const numeroInput = prompt('Introduce un número para calcular el valor del Tarot:');
if (!isNaN(numeroInput) && numeroInput.trim() !== '') {
    const resultado = calcularTarot(BigInt(numeroInput));
    alert(`El resultado del cálculo del Tarot es: ${resultado}`);
} else {
    alert('Por favor, introduce un número válido.');
}
