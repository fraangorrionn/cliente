/*Elabora un programa que dado un precio y una cantidad pagada, obtengamos el cambio con el mínimo número de 
elementos (monedas o billetes). Para devolver el cambio disponemos de una cantidad ilimitada de monedas y de billetes.*/

var pagada = parseFloat(prompt("Introduce la cantidad pagada:"));
var precio = parseFloat(prompt("Introduce el precio:"));

var array = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];

var cambio = pagada - precio;
cambio = Math.round(cambio * 100) / 100; // Redondear a dos decimales para evitar problemas de precisión
var resultado = [];

if (cambio < 0) {
    alert("El monto pagado es insuficiente.");
} else if (cambio === 0) {
    alert("No hay cambio que devolver.");
} else {
    for (let i = 0; i < array.length; i++) {
        while (cambio >= array[i]) {
            cambio = Math.round((cambio - array[i]) * 100) / 100; // Restar la moneda/billete y redondear
            resultado.push(array[i]);
        }
    }
    alert("El cambio se puede dar con: " + resultado.join(', ') + " (mínimo número de elementos)");
}

