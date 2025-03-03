/*Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos 
de entrada es desconocido.*/

function sumar() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) { 
        suma += arguments[i];
    }
    return suma;
}

alert(sumar(1, 2, 3, 4));
alert(sumar(10, 20, 30));

/*funcion flecha*/
const sumarFlecha = (...numeros) => {
    let suma = 0;
    for (let num of numeros) { 
        suma += num;
    }
    return suma;
};

alert(sumarFlecha(1, 2, 3, 4));
alert(sumarFlecha(10, 20, 30));
