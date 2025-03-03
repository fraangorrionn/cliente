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
        // Verifica que los datos están siendo correctamente agregados
        console.log(datosSeparados);  // Asegúrate de que los datos sean correctos
        datos.push(datosSeparados);
    }
}
// Función para imprimir los datos
const imprimirDatos = (datos) => {
    // Verificar si 'datos' es un arreglo y tiene elementos
    if (Array.isArray(datos) && datos.length > 0) {
        return datos.map((persona) => 
            `Nombre: ${persona[0]}, Apellidos: ${persona[1]}, DNI: ${persona[2]}, Fecha de Nacimiento: ${persona[3]}`
        ).join('\n');
    } else {
        return "No se han introducido datos válidos.";
    }
};


// Función para buscar por apellidos
const buscarPorApellidos = (datos, apellidos) => {
    const resultado = datos.filter(persona => persona[1].toLowerCase().includes(apellidos.toLowerCase()));
    return resultado.length > 0 ? resultado : "No se encontraron personas con esos apellidos.";
};

// Función para buscar por DNI
const buscarPorDNI = (datos, dni) => {
    const resultado = datos.find(persona => persona[2] === dni);
    return resultado ? resultado : "No se encontró ninguna persona con ese DNI.";
};

// Función para buscar por edad
const buscarPorEdad = (datos, edad) => {
    // Verifica que 'datos' es un arreglo válido
    if (Array.isArray(datos) && datos.length > 0) {
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
    } else {
        return "No se han introducido datos válidos.";
    }
};


// Función para filtrar los usuarios mayores de edad
const mayorEdad = (datos) => {
    const resultado = datos.filter(persona => {
        const fechaNacimiento = new Date(persona[3]);
        const hoy = new Date();
        let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edadCalculada--;
        }
        return edadCalculada >= 18;
    });
    alert(imprimirDatos(resultado));
};

// Función para filtrar los usuarios menores de edad y calcular cuánto falta para la mayoría de edad
const menorEdad = (datos) => {
    const resultado = datos.filter(persona => {
        const fechaNacimiento = new Date(persona[3]);
        const hoy = new Date();
        let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edadCalculada--;
        }
        return edadCalculada < 18;
    });
    
    resultado.forEach(persona => {
        const fechaNacimiento = new Date(persona[3]);
        const hoy = new Date();
        let edadCalculada = hoy.getFullYear() - fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
            edadCalculada--;
        }
        const edadRestante = 18 - edadCalculada;
        alert(`Nombre: ${persona[0]} ${persona[1]}, DNI: ${persona[2]}, Edad actual: ${edadCalculada}, Le faltan ${edadRestante} años para ser mayor de edad.`);
    });
};

// Función para modificar los datos de un usuario por su DNI
const modificaDatos = (datos, dni) => {
    const usuario = datos.find(persona => persona[2] === dni);
    if (usuario) {
        const campoAModificar = prompt("¿Qué dato deseas modificar? (nombre, apellidos, fecha de nacimiento)");
        const nuevoValor = prompt(`Introduce el nuevo valor para ${campoAModificar}:`);
        if (campoAModificar === "nombre") {
            usuario[0] = nuevoValor;
        } else if (campoAModificar === "apellidos") {
            usuario[1] = nuevoValor;
        } else if (campoAModificar === "fecha de nacimiento") {
            usuario[3] = nuevoValor;
        }
        alert("Datos modificados correctamente.");
    } else {
        alert("No se encontró un usuario con ese DNI.");
    }
};

// Función para eliminar un usuario por su DNI con confirmación
const eliminaUsuario = (datos, dni) => {
    const usuarioIndex = datos.findIndex(persona => persona[2] === dni);
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
