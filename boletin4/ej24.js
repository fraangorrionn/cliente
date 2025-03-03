/*Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.*/
const eliminarRepetidos = (arr) => { return [...new Set(arr)];}

var array = [1,1,1,1,2];

arraySinRepetidos = eliminarRepetidos(array);

alert(`array con repetidos ${array}`);
alert(`array sin repetidos ${arraySinRepetidos}`);