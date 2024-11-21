/*Generar aleatoriamente una primitiva de n columnas. */
function generarPrimitiva(n) {
    const columnas = [];

    for (let i = 0; i < n; i++) {
        const numeros = new Set();

        // Generar 6 números únicos entre 1 y 49
        while (numeros.size < 6) {
            const numeroAleatorio = Math.floor(Math.random() * 49) + 1;
            numeros.add(numeroAleatorio);
        }

        columnas.push(Array.from(numeros).sort((a, b) => a - b));
    }

    // Mostrar las columnas generadas con alert
    columnas.forEach((columna, index) => {
        alert(`Columna ${index + 1}: ${columna.join(', ')}`);
    });
}

// Solicitar al usuario el número de columnas
const numeroColumnas = parseInt(prompt('Introduce el número de columnas para la primitiva:'));
if (!isNaN(numeroColumnas) && numeroColumnas > 0) {
    generarPrimitiva(numeroColumnas);
} else {
    alert('Por favor, introduce un número válido de columnas.');
}