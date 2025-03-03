/*17 Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.*/

function compareDates() {
    let day1 = parseInt(prompt("Introduce el día de la primera fecha:"));
    let month1 = parseInt(prompt("Introduce el mes de la primera fecha:"));
    let year1 = parseInt(prompt("Introduce el año de la primera fecha:"));

    let day2 = parseInt(prompt("Introduce el día de la segunda fecha:"));
    let month2 = parseInt(prompt("Introduce el mes de la segunda fecha:"));
    let year2 = parseInt(prompt("Introduce el año de la segunda fecha:"));

    let date1 = new Date(year1, month1 - 1, day1);
    let date2 = new Date(year2, month2 - 1, day2);

    if (date1 < date2) {
        alert("La primera fecha es anterior.");
    } else if (date1 > date2) {
        alert("La segunda fecha es anterior.");
    } else {
        alert("Las fechas son iguales.");
    }
}

compareDates();