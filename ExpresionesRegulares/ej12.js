/*Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la valide para que esté comprendida
entre 0 y 10 y se escriba en letras de la siguiente manera:
SUSPENSO si es menor que 5
APROBADO mayor que 5 y menor que 6
BIEN entre 6 y 7
NOTABLE entre 7 y 8
SOBRESALIENTE entre 9 y 10*/

function gradeToText() {
    let grade = parseFloat(prompt("Introduce la nota (0-10):"));
    if (isNaN(grade) || grade < 0 || grade > 10) {
        alert("Nota no válida.");
        return;
    }

    if (grade < 5) {
        alert("SUSPENSO");
    } else if (grade < 6) {
        alert("APROBADO");
    } else if (grade < 7) {
        alert("BIEN");
    } else if (grade < 9) {
        alert("NOTABLE");
    } else {
        alert("SOBRESALIENTE");
    }
}

gradeToText();
