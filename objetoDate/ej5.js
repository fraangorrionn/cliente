/*Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado. */

function calcularDiasParaCumpleaños(fechaCumpleaños) {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();

    // Crear la fecha del próximo cumpleaños para este año
    let proximoCumple = new Date(añoActual, fechaCumpleaños.getMonth(), fechaCumpleaños.getDate());

    // Si el próximo cumpleaños ya pasó este año, ajustar para el próximo año
    if (proximoCumple < fechaActual) {
        proximoCumple.setFullYear(añoActual + 1);
    }

    // Calcular la diferencia en días
    const diferenciaMilisegundos = proximoCumple - fechaActual;
    const diferenciaDias = Math.ceil(diferenciaMilisegundos / (1000 * 60 * 60 * 24));

    // Mostrar mensaje según el resultado
    if (diferenciaDias === 0) {
        alert('¡Felicidades! Hoy es tu cumpleaños.');
    } else {
        alert(`Faltan ${diferenciaDias} días para tu próximo cumpleaños.`);
    }
}

// Solicitar al usuario que introduzca su fecha de cumpleaños
const fechaInput = prompt('Introduce tu fecha de cumpleaños (formato: AAAA-MM-DD):');
if (fechaInput) {
    const fechaCumpleaños = new Date(fechaInput);
    if (!isNaN(fechaCumpleaños)) {
        calcularDiasParaCumpleaños(fechaCumpleaños);
    } else {
        alert('Por favor, introduce una fecha válida en el formato AAAA-MM-DD.');
    }
} else {
    alert('No se introdujo ninguna fecha.');
}
