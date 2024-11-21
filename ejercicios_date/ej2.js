/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.*/

var fec1 = new Date(window.prompt("Introduce la primera fecha en formato yyyy-mm-dd"));
var fec2 = new Date(window.prompt("Introduce la segunda fecha en formato yyyy-mm-dd"));


function compararFechas(fec1, fec2) {
    if(fec1 < fec2) {
        return fec1;
    } else {
        return fec2;
    }
}

let fechaAnterior = compararFechas(fec1, fec2);

alert("La fecha anterior es: " + fechaAnterior.toDateString());