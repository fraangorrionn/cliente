/*Realizar una función que rellene un matriz de orden N de número aleatorios.*/

var tamaño = parseInt(prompt("Introduce el tamaño de la matriz"), 10);

function rellenarMatriz(tamaño) {
    let matriz = [];

    for (let i = 0; i < tamaño; i++) {
        let fila = [];
        for (let j = 0; j < tamaño; j++) {
            // Rellenar cada posición con un número aleatorio entre 1 y 100
            fila.push(Math.floor(Math.random() * 100) + 1);
        }
        matriz.push(fila);
    }

    return matriz;
}

if (!isNaN(tamaño) && tamaño > 0) {
    const matriz = rellenarMatriz(tamaño);
    let mensaje = "Matriz generada:\n";
    matriz.forEach((fila, index) => {
        mensaje += `Fila ${index + 1}: ${fila.join(' ')}\n`;
    });
    alert(mensaje);
} else {
    alert("Por favor, introduce un número válido para el tamaño de la matriz.");
}
