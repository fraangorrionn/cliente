/*Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas. */

function procesarFechas(fechas) {
    // Convertir las fechas ingresadas a objetos Date
    const fechasObj = fechas.map(fechaStr => new Date(fechaStr));

    // Encontrar la fecha menor y mayor
    const fechaMenor = new Date(Math.min(...fechasObj));
    const fechaMayor = new Date(Math.max(...fechasObj));

    // Calcular la diferencia en segundos
    const diferenciaSegundos = (fechaMayor - fechaMenor) / 1000;

    // Mostrar resultados
    alert(`La fecha menor es: ${fechaMenor}`);
    alert(`La fecha mayor es: ${fechaMayor}`);
    alert(`La diferencia en segundos entre ambas es: ${diferenciaSegundos} segundos.`);
}

// Solicitar al usuario un conjunto de fechas
const fechasInput = prompt('Introduce las fechas separadas por comas (formato: AAAA-MM-DD):');
if (fechasInput) {
    const fechasArray = fechasInput.split(',').map(fecha => fecha.trim());
    if (fechasArray.every(fecha => !isNaN(new Date(fecha)))) {
        procesarFechas(fechasArray);
    } else {
        alert('Por favor, introduce fechas válidas en el formato AAAA-MM-DD.');
    }
} else {
    alert('No se introdujeron fechas.');
}
