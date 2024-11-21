/*Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.
Ejemplos:
sumEvenArgs(1,2,3,4) // 6
sumEvenArgs(1,2,6) // 8*/

/*function sumaArgPares(...args) {
    let suma = 0;

    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            suma += args[i];
        }
    }

    return suma;
}

alert(sumaArgPares(1, 2, 3, 4));*/

/*programacion funcional*/

const sumaArgPares = (...args) => { let suma = 0;
    for (let i = 0; i < args.length; i++) {
        if (args[i] % 2 === 0) {
            suma += args[i];
        }
    }
    return suma;
};

alert(sumaArgPares(1, 2, 3, 4));

