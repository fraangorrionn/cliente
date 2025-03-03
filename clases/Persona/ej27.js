/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta
entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un
array bidimensional.

Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad.
¿cómo podríamos optimizar la búsqueda? 

Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos ya 
implementados de Array y funciones flecha):
mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría
de edad.
modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. 

Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/

// ej27.js

let datos = [];
let salir = false;

while (!salir) {
    let cadena = prompt("Introduzca nombre, apellidos, DNI y fecha de nacimiento separados por comas:");

    if (cadena.trim() === "") {
        salir = true;
    } else {
        let datosSeparados = cadena.split(",").map(item => item.trim());
        if (datosSeparados.length === 4) {
            let [nombre, apellidos, dni, fechaNacimiento] = datosSeparados;
            let persona = new Persona(nombre, apellidos, dni, fechaNacimiento);
            datos.push(persona);
        } else {
            alert("Datos inválidos. Asegúrate de introducir 4 campos.");
        }
    }
}

// Función para imprimir los datos
const imprimirDatos = (datos) => {
    if (Array.isArray(datos) && datos.length > 0) {
        return datos.map((persona) => 
            `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento}`
        ).join('\n');
    } else {
        return "No se han introducido datos válidos.";
    }
};

// Función para buscar por apellidos
const buscarPorApellidos = (datos, apellidos) => {
    const resultado = datos.filter(persona => persona.apellidos.toLowerCase().includes(apellidos.toLowerCase()));
    return resultado.length > 0 ? resultado : "No se encontraron personas con esos apellidos.";
};

// Función para buscar por DNI
const buscarPorDNI = (datos, dni) => {
    const resultado = datos.find(persona => persona.dni === dni);
    return resultado ? resultado : "No se encontró ninguna persona con ese DNI.";
};

// Función para buscar por edad
const buscarPorEdad = (datos, edad) => {
    const resultado = datos.filter(persona => persona.calcularEdad() === edad);
    return resultado.length > 0 ? resultado : "No se encontraron personas con esa edad.";
};

// Función para filtrar los usuarios mayores de edad
const mayorEdad = (datos) => {
    const resultado = datos.filter(persona => persona.calcularEdad() >= 18);
    alert(imprimirDatos(resultado));
};

// Función para filtrar los usuarios menores de edad y calcular cuánto falta para la mayoría de edad
const menorEdad = (datos) => {
    const resultado = datos.filter(persona => persona.calcularEdad() < 18);
    
    resultado.forEach(persona => {
        const edadRestante = 18 - persona.calcularEdad();
        alert(`Nombre: ${persona.nombre} ${persona.apellidos}, DNI: ${persona.dni}, Edad actual: ${persona.calcularEdad()}, Le faltan ${edadRestante} años para ser mayor de edad.`);
    });
};

// Función para modificar los datos de un usuario por su DNI
const modificaDatos = (datos, dni) => {
    const usuario = datos.find(persona => persona.dni === dni);
    if (usuario) {
        const campoAModificar = prompt("¿Qué dato deseas modificar? (nombre, apellidos, fecha de nacimiento)");
        const nuevoValor = prompt(`Introduce el nuevo valor para ${campoAModificar}:`);
        if (campoAModificar === "nombre") {
            usuario.nombre = nuevoValor;
        } else if (campoAModificar === "apellidos") {
            usuario.apellidos = nuevoValor;
        } else if (campoAModificar === "fecha de nacimiento") {
            usuario.fechaNacimiento = new Date(nuevoValor);
        }
        alert("Datos modificados correctamente.");
    } else {
        alert("No se encontró un usuario con ese DNI.");
    }
};

// Función para eliminar un usuario por su DNI con confirmación
const eliminaUsuario = (datos, dni) => {
    const usuarioIndex = datos.findIndex(persona => persona.dni === dni);
    if (usuarioIndex !== -1) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (confirmacion) {
            datos.splice(usuarioIndex, 1); // Elimina al usuario del arreglo
            alert("Usuario eliminado correctamente.");
        } else {
            alert("Eliminación cancelada.");
        }
    } else {
        alert("No se encontró un usuario con ese DNI.");
    }
};

// Ejemplo de uso
alert(imprimirDatos(datos));

let apellidosABuscar = prompt("Introduce los apellidos a buscar:");
alert(imprimirDatos(buscarPorApellidos(datos, apellidosABuscar)));

let dniABuscar = prompt("Introduce el DNI a buscar:");
alert(imprimirDatos([buscarPorDNI(datos, dniABuscar)]));

let edadABuscar = prompt("Introduce la edad a buscar:");
alert(imprimirDatos(buscarPorEdad(datos, parseInt(edadABuscar))));

// Llamadas a las nuevas funciones
mayorEdad(datos);
menorEdad(datos);

let dniAModificar = prompt("Introduce el DNI del usuario a modificar:");
modificaDatos(datos, dniAModificar);

let dniAEliminar = prompt("Introduce el DNI del usuario a eliminar:");
eliminaUsuario(datos, dniAEliminar);
