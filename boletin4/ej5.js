/*Hacer un programa para generar el siguiente primo a uno dado. Deben usarse funciones.  */

var esPrimo = (numero) => {
    if (numero<= 1) return false;
    for (let i = 2; i < Math.sqrt(numero); i++) {
        if(numero % i === 0) return false;
    }
    return true;

}

var siguientePrimo = (numero) => {
    let siguiente = numero +1;
    while(!esPrimo(siguiente)){
        siguiente++;
    }
    return siguiente;
}

const numero = parseInt(prompt("introduce un numero"));
if(!isNaN(numero)){
    const primo = siguientePrimo(numero);
    alert(`El siguiente número primo después de ${numero} es ${primo}.`);
} else {
    alert('Por favor, introduce un número válido.');
}

//sin funciones flecha
/*function esPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}

function siguientePrimo(numero) {
    let siguiente = numero + 1;
    while (!esPrimo(siguiente)) {
        siguiente++;
    }
    return siguiente;
}

// Solicitar al usuario que introduzca un número
const numero = parseInt(prompt('Introduce un número para encontrar el siguiente número primo:'), 10);
if (!isNaN(numero)) {//para asegurarnos que sea un numero
    const primo = siguientePrimo(numero);
    alert(`El siguiente número primo después de ${numero} es ${primo}.`);
} else {
    alert('Por favor, introduce un número válido.');
}*/
