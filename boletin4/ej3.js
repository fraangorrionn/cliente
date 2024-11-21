/*Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que 
devuelva el número de cifras del mismo. Utiliza el operador spread.*/

function numCifras(numero) {
    const cifras = [...String(Math.abs(numero))];
    return cifras.length;
}

alert(numCifras(122343325));
alert(numCifras(0));

/*funcion flecha */
const numCifrasFlecha = (numero) => {
    const cifras = [...String(Math.abs(numero))]; 
    return cifras.length;
};

alert(numCifrasFlecha(123454653));
alert(numCifrasFlecha(0));


