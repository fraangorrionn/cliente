/*Hacer un programa que compruebe si un número es perfecto. Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es.  */

function esPerfecto(numero) {
    if (numero <= 1) return false;

    let sumaDivisores = 0;

    // Encontrar los divisores del número
    for (let i = 1; i <= numero / 2; i++) {
        if (numero % i === 0) {
            sumaDivisores += i;
        }
    }

    // Verificar si la suma de los divisores es igual al número
    return sumaDivisores === numero;
}

// Prueba de la función
const numero = parseInt(prompt('Introduce un número para verificar si es perfecto:'), 10);
if (!isNaN(numero)) {
    if (esPerfecto(numero)) {
        alert(`El número ${numero} es un número perfecto.`);
    } else {
        alert(`El número ${numero} no es un número perfecto.`);
    }
} else {
    alert('Por favor, introduce un número válido.');
}
