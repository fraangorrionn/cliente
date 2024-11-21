/*Usando una implementación de objetos ES6 para guardar la sesión de calificación de un piloto con los siguientes atributos: 
piloto; // Objeto piloto, contendrá su nombre y escudería. 
tiempo; // Contendrá los ms de la mejor vuelta 

Y teniendo un array de sesiones de calificación, usando sort(); escribir el código necesario para ordenar el array de calificación por: 

A. Tiempos. 
B. Nombre de piloto. 

Añade una función para añadir al array una sesión de calificación nueva, en caso de que no exista una sesión para ese piloto y en caso de exista, 
si el tiempo el nuevo tiempo es menor, se modificará el tiempo en la sesión que ya existe en el array  y otra para eliminar del array
 (hay que comprobar que existe, crea una función para ello).
Crea un archivo para la clase Piloto.
 */

import Piloto from './Piloto.js';

class SesionCalificacion {
    constructor(piloto, tiempo) {
        this.piloto = piloto;
        this.tiempo = tiempo; // tiempo en milisegundos
    }
}

let sesionesCalificacion = [];

function agregarOActualizarSesion(nombre, escuderia, tiempo) {
    const pilotoExistenteIndex = sesionesCalificacion.findIndex(
        sesion => sesion.piloto.nombre === nombre
    );

    if (pilotoExistenteIndex === -1) {
        const nuevoPiloto = new Piloto(nombre, escuderia);
        const nuevaSesion = new SesionCalificacion(nuevoPiloto, tiempo);
        sesionesCalificacion.push(nuevaSesion);
        alert(`Se añadió una nueva sesión para ${nombre}`);
    } else {
        if (tiempo < sesionesCalificacion[pilotoExistenteIndex].tiempo) {
            sesionesCalificacion[pilotoExistenteIndex].tiempo = tiempo;
            alert(`Se actualizó el tiempo de ${nombre} a ${tiempo} ms`);
        } else {
            alert(`El tiempo de ${nombre} no fue mejorado.`);
        }
    }
}

function eliminarSesion(nombre) {
    const index = sesionesCalificacion.findIndex(
        sesion => sesion.piloto.nombre === nombre
    );

    if (index !== -1) {
        sesionesCalificacion.splice(index, 1);
        alert(`La sesión de ${nombre} ha sido eliminada.`);
        return true;
    }
    alert(`No se encontró la sesión de ${nombre}.`);
    return false;
}

function ordenarPorTiempo() {
    sesionesCalificacion.sort((a, b) => a.tiempo - b.tiempo);
    mostrarSesiones('Sesiones ordenadas por tiempo');
}

function ordenarPorNombre() {
    sesionesCalificacion.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
    mostrarSesiones('Sesiones ordenadas por nombre');
}

function mostrarSesiones(titulo) {
    if (sesionesCalificacion.length === 0) {
        alert(`${titulo}\nNo hay sesiones disponibles.`);
    } else {
        const sesionesTexto = sesionesCalificacion.map(sesion =>
            `Piloto: ${sesion.piloto.nombre}, Escudería: ${sesion.piloto.escuderia}, Tiempo: ${sesion.tiempo} ms`
        ).join('\n');
        alert(`${titulo}:\n${sesionesTexto}`);
    }
}

// Pruebas con alertas
agregarOActualizarSesion('Lewis Hamilton', 'Mercedes', 89000);
agregarOActualizarSesion('Max Verstappen', 'Red Bull', 87000);
agregarOActualizarSesion('Fernando Alonso', 'Aston Martin', 91000);
agregarOActualizarSesion('Lewis Hamilton', 'Mercedes', 86000);

mostrarSesiones('Sesiones de calificación antes de ordenar');

ordenarPorTiempo();
ordenarPorNombre();

eliminarSesion('Max Verstappen');
mostrarSesiones('Sesiones después de eliminar');
