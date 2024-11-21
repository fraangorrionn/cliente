/*Realizar la función esPalindromo(cadena) de manera recursiva.  */

function esPalindromo(cadena) {
    // Eliminar espacios y convertir a minúsculas para una comparación uniforme
    cadena = cadena.replace(/\s+/g, '').toLowerCase();

    // Caso base: si la cadena tiene 0 o 1 caracteres, es un palíndromo
    if (cadena.length <= 1) {
        return true;
    }

    // Verificar si el primer y último carácter son diferentes
    if (cadena[0] !== cadena[cadena.length - 1]) {
        return false;
    }

    // Llamada recursiva con la subcadena sin el primer y último carácter
    return esPalindromo(cadena.slice(1, -1));
}

// Prueba de la función
const texto = prompt('Introduce una cadena para verificar si es un palíndromo:');
if (esPalindromo(texto)) {
    alert('La cadena es un palíndromo.');
} else {
    alert('La cadena no es un palíndromo.');
}