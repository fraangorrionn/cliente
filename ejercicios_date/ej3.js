/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero 
expresado en horas, minutos y segundos.*/

var tiempo = parseInt(prompt("Introduce una cantidad de segundos: "), 10);

function devolverTiempo(tiempo) {
    var horas = Math.floor(tiempo / 3600);
    var minutos = Math.floor((tiempo % 3600) / 60);
    var segundos = tiempo % 60; 

    return { horas, minutos, segundos };
}

let tiempoCalculado = devolverTiempo(tiempo);

alert("El tiempo ingresado es: " + tiempoCalculado.horas + " horas, " + tiempoCalculado.minutos + " minutos y " + tiempoCalculado.segundos + " segundos.");
