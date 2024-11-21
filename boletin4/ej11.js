/*Dada una cadena leída por teclado, realizar un programa que extraiga los números que aparecen en dicha secuencia e 
imprima por pantalla dichos números y su suma.*/

function extraerNumerosYSumar() {

    const cadena = prompt("Introduce una cadena con números:");


    const numeros = cadena.match(/\d+/g);

    if (numeros) {

        const numerosEnteros = numeros.map(Number);

        const suma = numerosEnteros.reduce((acc, num) => acc + num, 0);

        alert("Números encontrados:", numerosEnteros);
        alert("Suma de los números:", suma);
    } else {
        alert("No se encontraron números en la cadena.");
    }
}

extraerNumerosYSumar();