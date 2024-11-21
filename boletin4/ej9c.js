/*Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y devuelva un
 nuevo array con todos los parámetros concatenados.
		Ejemplos:
joinArrays([1], [2], [3]); // [1,2,3]
joinArrays([1,2,3],[4,5,6],[7,8,9]) //[1,2,3,4,5,6,7,8,9]
 */

function uneArrays(...arrays) {

    return arrays.flat();
}

alert(uneArrays([1], [2], [3])); // [1, 2, 3]
alert(uneArrays([1, 2, 3], [4, 5, 6], [7, 8, 9])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
