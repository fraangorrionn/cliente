/*Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.*/

var fecNac = new Date(window.prompt("Introduce tu fecha de nacimiento en formato yyyy-mm-dd"));

var fecActual = new Date();

if (fecNac < fecActual) {
    alert("La fecha de nacimiento " + fecNac.toDateString() + " es menor que la fecha actual " + fecActual.toDateString());
} else {
    alert("La fecha de nacimiento " + fecNac.toDateString() + " es mayor o igual a la fecha actual " + fecActual.toDateString());
}