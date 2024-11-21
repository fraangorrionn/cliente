/*Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los 
valores del segundo array colocados en el centro del primer array.
Ejemplos: 
placeInMiddle([1,2,6,7],[3,4,5]) // [1,2,3,4,5,6,7]
placeInMiddle([1],[3,4,5]) // [3,4,5,1]
placeInMiddle([1,6],[2,3,4,5]) // [1,2,3,4,5,6]
placeInMiddle([],[2,3,4,5]) // [2,3,4,5]*/


function colocaEnMedio(arr1, arr2) {

    let middleIndex = Math.floor(arr1.length / 2);

    arr1.splice(middleIndex, 0, ...arr2);

    return arr1;
}

alert(colocaEnMedio([1, 2, 6, 7], [3, 4, 5])); // [1, 2, 3, 4, 5, 6, 7]
alert(colocaEnMedio([1], [3, 4, 5])); // [3, 4, 5, 1]
alert(colocaEnMedio([1, 6], [2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]
alert(colocaEnMedio([], [2, 3, 4, 5])); 
