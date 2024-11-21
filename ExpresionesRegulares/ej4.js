/*Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes”
 “Buenas noches”, de acuerdo con las siguientes reglas:
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

var horas = parseInt(prompt("Introduce la hora (formato 24 horas): "));
var minutos = parseInt(prompt("Introduce los minutos: "));

function tiempo(horas, minutos) {
    // Calcular el tiempo en minutos totales para una comparación sencilla
    var totalMinutos = horas * 60 + minutos;
    var minutosDiaInicio = 7 * 60 + 30; // 7:30 AM
    var minutosDiaFin = 14 * 60;       // 14:00 PM
    var minutosTardeInicio = 14 * 60 + 1; // 14:01 PM
    var minutosTardeFin = 20 * 60 + 30;  // 20:30 PM
    var minutosNocheInicio = 20 * 60 + 31; // 20:31 PM
    var minutosNocheFin = 7 * 60 + 29;    // 7:29 AM (del día siguiente)

    if (totalMinutos >= minutosDiaInicio && totalMinutos <= minutosDiaFin) {
        return "Buenos días";
    } else if (totalMinutos >= minutosTardeInicio && totalMinutos <= minutosTardeFin) {
        return "Buenas tardes";
    } else {
        // Para la noche, cubrimos el rango hasta las 7:29 AM del día siguiente
        if (totalMinutos >= minutosNocheInicio || totalMinutos <= minutosNocheFin) {
            return "Buenas noches";
        } else {
            return "Hora incorrecta";
        }
    }
}

alert(tiempo(horas, minutos));