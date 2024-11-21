/*Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función
 esAlfabetoEspaniol(texto) que devuelva true si lo es. */

 function esAlfabetoEspaniol(texto) {
    // Expresión regular que permite letras del alfabeto español, con acentos y la "ñ"
    const alfabetoEspaniolRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return alfabetoEspaniolRegex.test(texto);
}

// Prueba de la función
const texto = prompt('Introduce un texto para verificar si contiene solo caracteres del alfabeto español:');
if (esAlfabetoEspaniol(texto)) {
    alert('El texto contiene solo caracteres del alfabeto español.');
} else {
    alert('El texto contiene caracteres que no pertenecen al alfabeto español.');
}