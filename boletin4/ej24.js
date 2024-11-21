/*Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.*/

const eliminaRepetidos = (arr) => { return [...new Set(arr)];};

const array = [5, 6, 4, 5, 6, 5, 5, 6, 4, 6, 6];

const elementosSinRepetir = eliminaRepetidos(array);

alert(`Los elementos del array sin repetir: ${elementosSinRepetir}`);
