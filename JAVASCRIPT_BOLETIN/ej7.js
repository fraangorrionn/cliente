/*Elabora un programa que dado un precio y una cantidad pagada, obtengamos el cambio con el mínimo número de 
elementos (monedas o billetes). Para devolver el cambio disponemos de una cantidad ilimitada de monedas y de billetes.*/

var precio = window.prompt("introduce el precio: ");
var cantidadPagada = window.prompt("introduce la cantidad pagada: ");

if (cantidadPagada < precio) {
    alert("La cantidad pagada es insuficiente.");
} else {
    var cambio = cantidadPagada - precio;
    
    var cambioCentavos = Math.round(cambio * 100);

    alert("El cambio es: " + Math.floor(cambioCentavos / 100) + " euros y " + (cambioCentavos % 100) + " centavos.");

    var denominaciones = [50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100, 50, 20, 10, 5, 1];

    var resultado = {};

    // Iteramos por cada denominación
    for (var i = 0; i < denominaciones.length; i++) {
        var cantidad = Math.floor(cambioCentavos / denominaciones[i]); // Cuántos billetes/monedas de esta denominación podemos usar
        if (cantidad > 0) {
            resultado[denominaciones[i] / 100 + "€"] = cantidad; // Almacenamos el resultado en euros
            cambioCentavos = cambioCentavos % denominaciones[i];
        }
    }

    // Mostramos el resultado
    for (var billete in resultado) {
        alert("Denominación " + billete + ": " + resultado[billete] + " unidad(es).");
    }
}