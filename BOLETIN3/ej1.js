/*Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han
leído, cuántos comienzan C y cuántos contienen la ñ.*/

var salir = false;
var contador = 0;
var comienzanEnC = 0;
var contienenLaÑ = 0;
var letraC = "c";
var letraÑ = "ñ";
var ultimo = "ULTIMO";

while (!salir) {
    var nombre = String(window.prompt("Introduce un nombre o escribe 'ULTIMO' para salir: "));
    
    if (nombre === ultimo) {
        alert("Ha introducido la palabra 'ULTIMO', fin del programa");
        salir = true;
    } else {
        contador++;
        if (nombre.toLowerCase().startsWith(letraC)) {
            comienzanEnC++;
        }

        if (nombre.includes(letraÑ)) {
            contienenLaÑ++;
        }
    }
}

alert("Se han leído un total de: " + contador + " nombres");
alert("Hay: " + comienzanEnC + " nombres que comienzan en 'C'");
alert("Hay: " + contienenLaÑ + " nombres que contienen la 'ñ'");