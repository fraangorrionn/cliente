/*Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario. */

function calcularDiasSemanaCumpleaños(fechaCumpleaños) {
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();
    const mes = fechaCumpleaños.getMonth();
    const dia = fechaCumpleaños.getDate();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

    let resultados = [];

    for (let i = 0; i < 50; i++) {
        const añoCumple = añoActual + i;
        const proximoCumple = new Date(añoCumple, mes, dia);
        const diaSemana = diasSemana[proximoCumple.getDay()];
        resultados.push(`Año ${añoCumple}: ${diaSemana}`);
    }

    // Mostrar los resultados
    alert(`Días de la semana para los próximos 50 cumpleaños:\n\n${resultados.join('\n')}`);
}

// Solicitar al usuario que introduzca su fecha de cumpleaños
const fechaInput = prompt('Introduce tu fecha de cumpleaños (formato: AAAA-MM-DD):');
if (fechaInput) {
    const fechaCumpleaños = new Date(fechaInput);
    if (!isNaN(fechaCumpleaños)) {
        calcularDiasSemanaCumpleaños(fechaCumpleaños);
    } else {
        alert('Por favor, introduce una fecha válida en el formato AAAA-MM-DD.');
    }
} else {
    alert('No se introdujo ninguna fecha.');
}
