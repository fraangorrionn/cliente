/*Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos
 ya implementados de Array y funciones flecha):

mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.

menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría
 de edad.

modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.

eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. */

/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. 
¿cómo podríamos optimizar la búsqueda? */


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

const buscarPorApellidos = (datos, apellidos) => {
    const resultado = datos.filter(persona => persona[1].toLowerCase().includes(apellidos.toLowerCase()));
    return resultado.length > 0 ? resultado : "No se encontraron personas con esos apellidos.";
};

const buscarPorDNI = (datos, dni) => {
    const resultado = datos.find(persona => persona[2] === dni);
    return resultado ? resultado : "No se encontró ninguna persona con ese DNI.";
};

const imprimirDatosPersona = (persona) => {
    return `Nombre: ${persona[0]}, Apellidos: ${persona[1]}, DNI: ${persona[2]}, Fecha de Nacimiento: ${persona[3]}`;
};


const buscarPorEdad = (datos, edad) => {
    const resultado = datos.filter(persona => {
        const fechaNacimiento = new Date(persona[3]);
        const hoy = new Date();
        let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edadCalculada--;
        }
        return edadCalculada === edad;
    });
    return resultado.length > 0 ? resultado : "No se encontraron personas con esa edad.";
};


alert(imprimirDatos(datos));

let apellidosABuscar = prompt("Introduce los apellidos a buscar:");
alert(imprimirDatos(buscarPorApellidos(datos, apellidosABuscar)));

let dniABuscar = prompt("Introduce el DNI a buscar:");
alert(imprimirDatos([buscarPorDNI(datos, dniABuscar)]));

let edadABuscar = prompt("Introduce la edad a buscar:");
alert(imprimirDatos(buscarPorEdad(datos, parseInt(edadABuscar))));