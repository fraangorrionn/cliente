/*Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes”
 “Buenas noches”, de acuerdo con las siguientes reglas:
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

var hora = parseInt(window.prompt("Introduce la hora (0-23): "));
var minutos = parseInt(window.prompt("Introduce los minutos (0-59): "));

var totalMinutos = (hora * 60) + minutos;

var minutosDiaInicio = (7 * 60) + 30;
var minutosTardeInicio = (14 * 60) + 1;
var minutosNocheInicio = (20 * 60) + 31;

if (totalMinutos >= minutosDiaInicio && totalMinutos < minutosTardeInicio) {
    alert("Buenos días");
} else if (totalMinutos >= minutosTardeInicio && totalMinutos < minutosNocheInicio) {
    alert("Buenas tardes");
} else {
    alert("Buenas noches");
}