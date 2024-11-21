/*Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.*/

function calcularTarotFechaNacimiento(fechaNacimiento) {
    // Verificar que la fecha no sea mayor que la fecha actual
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);

    if (fechaNac > fechaActual) {
        alert('La fecha de nacimiento no puede ser mayor que la fecha actual.');
        return;
    }

    // Calcular el número de Tarot sumando los dígitos de la fecha de nacimiento
    const dia = fechaNac.getDate();
    const mes = fechaNac.getMonth() + 1; // Los meses comienzan desde 0
    const año = fechaNac.getFullYear();

    // Concatenar día, mes y año como string y luego sumar sus dígitos
    let suma = ('' + dia + mes + año).split('').map(Number).reduce((acc, curr) => acc + curr, 0);

    // Continuar sumando los dígitos hasta obtener un solo dígito
    while (suma >= 10) {
        suma = suma.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);
    }

    alert(`El número de Tarot calculado es: ${suma}`);
}

// Solicitar al usuario que introduzca su fecha de nacimiento
const fechaInput = prompt('Introduce tu fecha de nacimiento (formato: AAAA-MM-DD):');
if (fechaInput) {
    calcularTarotFechaNacimiento(fechaInput);
} else {
    alert('Por favor, introduce una fecha válida.');
}
