/*Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son:
➔ 50% para que salga 1
➔ 30% para que salga x
➔ 20% para que salga 2 */

function generarQuiniela(n) {
    const resultados = [];

    for (let i = 0; i < n; i++) {
        const randomValue = Math.random(); // Genera un número aleatorio entre 0 y 1

        if (randomValue < 0.5) {
            resultados.push('1'); // 50% de probabilidad
        } else if (randomValue < 0.8) {
            resultados.push('x'); // 30% de probabilidad (0.5 <= randomValue < 0.8)
        } else {
            resultados.push('2'); // 20% de probabilidad (0.8 <= randomValue <= 1)
        }
    }

    // Mostrar el resultado con alert
    alert('Quiniela generada: ' + resultados.join(' '));
}

// Solicitar al usuario el número de columnas
const numeroColumnas = parseInt(prompt('Introduce el número de columnas para la quiniela:'));
if (!isNaN(numeroColumnas) && numeroColumnas > 0) {
    generarQuiniela(numeroColumnas);
} else {
    alert('Por favor, introduce un número válido de columnas.');
}
