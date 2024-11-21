/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra. */

function compararFechas(dia1, mes1, año1, dia2, mes2, año2) {
    // Crear objetos de fecha para ambas fechas
    const fecha1 = new Date(año1, mes1 - 1, dia1); // Meses en JavaScript comienzan desde 0
    const fecha2 = new Date(año2, mes2 - 1, dia2);

    if (fecha1 < fecha2) {
        alert(`La fecha ${dia1}/${mes1}/${año1} es anterior a la fecha ${dia2}/${mes2}/${año2}.`);
    } else if (fecha1 > fecha2) {
        alert(`La fecha ${dia2}/${mes2}/${año2} es anterior a la fecha ${dia1}/${mes1}/${año1}.`);
    } else {
        alert(`Las fechas ${dia1}/${mes1}/${año1} y ${dia2}/${mes2}/${año2} son iguales.`);
    }
}

// Solicitar al usuario las dos fechas
const dia1 = parseInt(prompt('Introduce el día de la primera fecha:'));
const mes1 = parseInt(prompt('Introduce el mes de la primera fecha:'));
const año1 = parseInt(prompt('Introduce el año de la primera fecha:'));

const dia2 = parseInt(prompt('Introduce el día de la segunda fecha:'));
const mes2 = parseInt(prompt('Introduce el mes de la segunda fecha:'));
const año2 = parseInt(prompt('Introduce el año de la segunda fecha:'));

// Llamar a la función para comparar las fechas
if (!isNaN(dia1) && !isNaN(mes1) && !isNaN(año1) && !isNaN(dia2) && !isNaN(mes2) && !isNaN(año2)) {
    compararFechas(dia1, mes1, año1, dia2, mes2, año2);
} else {
    alert('Por favor, introduce valores válidos para ambas fechas.');
}