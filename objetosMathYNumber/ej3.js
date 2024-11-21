/*Escribir un subprograma que produzca una tabla de valores de la ecuación:

Donde ​t varía entre 0 y 60. El valor del incremento de ​t será introducido como parámetro de entrada.
 */

function generateTable(increment) {
    // Validar que el incremento sea un número positivo
    if (increment <= 0 || isNaN(increment)) {
        console.error('Por favor, introduce un valor de incremento positivo.');
        return;
    }

    alert('Tabla de valores para la ecuación y = 3t^2 + 2t + 1');
    alert(' t    |   y');

    for (let t = 0; t <= 60; t += increment) {
        let y = 3 * Math.pow(t, 2) + 2 * t + 1; // Cálculo de la ecuación
        alert(`${t.toFixed(2)} | ${y.toFixed(2)}`);
    }
}

// Llamar al subprograma con un incremento de ejemplo
generateTable(10);