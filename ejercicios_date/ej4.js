/*Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.*/

var fec1 = new Date(window.prompt("Introduce la primera fecha en formato yyyy-mm-dd"));
var fec2 = new Date(window.prompt("Introduce la segunda fecha en formato yyyy-mm-dd"));

function obtenerFechaMenor(fec1, fec2) {
    if(fec1 < fec2) {
        return fec1;
    } else {
        return fec2;
    }
}

function obtenerFechaMayor(fec1, fec2) {
    if(fec1 > fec2) {
        return fec1;
    } else {
        return fec2;
    }
}

function diferenciaSegundos(fec1, fec2) {
    let diferenciaMilisegundos = Math.abs(fec1.getTime() - fec2.getTime());
    let diferenciaSegundos = Math.floor(diferenciaMilisegundos / 1000);
    return diferenciaSegundos;
}


let fechaMenor = obtenerFechaMenor(fec1, fec2);
let fechaMayor = obtenerFechaMayor(fec1, fec2);


let diferencia = diferenciaSegundos(fec1, fec2);


alert("La fecha menor es: " + fechaMenor.toDateString() + ", la fecha mayor es: " + fechaMayor.toDateString() + " y la diferencia de segundos entre ambas es: " + diferencia);
