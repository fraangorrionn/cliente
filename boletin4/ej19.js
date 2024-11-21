/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. 
Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array 
bidimensional.*/

let datos = [];
let salir = false;

while (!salir) {
    let cadena = prompt("Introduzca nombre, apellidos, DNI y fecha de nacimiento:");
    
    if (cadena.trim() === "") {
        salir = true;
    } else {
        let datosSeparados = cadena.split(",").map(item => item.trim());
        datos.push(datosSeparados);
    }
}

const imprimirDatos = (datos) => {
    if (datos.length > 0) {
        return datos.map((persona) => 
            `Nombre: ${persona[0]}, Apellidos: ${persona[1]}, DNI: ${persona[2]}, Fecha de Nacimiento: ${persona[3]}`
        ).join('\n');
    } else {
        return "No se han introducido datos.";
    }
};

alert(imprimirDatos(datos))

