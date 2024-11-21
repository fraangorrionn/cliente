/*Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida.
Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán
en una BBDD) de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.*/

var matricula = prompt("Introduce una matricula:");
function validarMatricula(matricula) {

    const regex = /^[A-Z]{3}-\d{4}$/;/*validar la matrícula (3 letras seguidas de 4 números)*/

    if (regex.test(matricula)) {
        alert(`La matrícula '${matricula}' es válida.`);
        return matricula.toUpperCase();
    } else {
        alert(`La matrícula '${matricula}' no es válida`);
        return null;
    }
}

function formatearMatricula(matricula) {
    matricula = matricula.trim().toUpperCase();/*quitar espacios y convertir a mayuscula*/
    

    const regex = /^([A-Z]{3})(\d{4})$/;/*formatear*/

    const match = matricula.match(regex);
    if (match) {
        /*Si coincide con el patrón, formateamos con guión*/
        return `${match[1]}-${match[2]}`;
    }
    
    return null;
}

const matriculaValida = validarMatricula(matricula);

if (matriculaValida) {
    const matriculaFormateada = formatearMatricula(matriculaValida);
    alert(`Matrícula formateada: '${matriculaFormateada}'`);
}