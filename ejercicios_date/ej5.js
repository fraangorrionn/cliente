/*Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado. */

var fecNac = new Date(window.prompt("Introduce tu fecha de nacimiento en formato yyyy-mm-dd"));
var fecActual = new Date();

function proximoCumpleaños(fecNac, fecActual) {
    let añoActual = fecActual.getFullYear();
    let cumpleEsteAño = new Date(añoActual, fecNac.getMonth(), fecNac.getDate());
    
    if (cumpleEsteAño < fecActual) {
        cumpleEsteAño.setFullYear(añoActual + 1);
    }

    let diferenciaMilisegundos = cumpleEsteAño - fecActual;
    let diasRestantes = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    
    return diasRestantes;
}

let diasRestantes = proximoCumpleaños(fecNac, fecActual);


function comprobarCumpleaños(fecNac, fecActual) {

    if (fecNac.getMonth() === fecActual.getMonth() && fecNac.getDate() === fecActual.getDate()) {
        return true;
    }
    return false;
}

if (comprobarCumpleaños(fecNac, fecActual)) {
    alert("¡Felicidades! Hoy es tu cumpleaños.");
} else {
    alert("Días restantes para tu próximo cumpleaños: " + diasRestantes);
}