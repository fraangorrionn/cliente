/*Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar
la edad del usuario por pantalla.*/

let datos = prompt("Introduce tu nombre, profesión y edad separados por comas:");

function obtenerEdad(cadena) {

    let partes = cadena.split(",");


    if (partes.length === 3) {
        let edad = partes[2].trim(); // La edad es la tercera parte, quitamos espacios en blanco
        return edad;
    } else {
        return null; 
    }
}

let edadUsuario = obtenerEdad(datos);

if (edadUsuario) {
    alert("La edad del usuario es: " + edadUsuario);
} else {
    alert("introduce correctamente");
}