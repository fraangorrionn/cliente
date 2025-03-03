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


class Calificaciones {
    constructor() {
        this.sesiones = [];  // Array de sesiones de calificación
    }

    agregarSesion(piloto, tiempo) {
        const indice = this.sesiones.findIndex(sesion => sesion.piloto.nombre === piloto.nombre);// Busca en el array de sesiones el índice de la sesión de un piloto 
                                                                                                //con el mismo nombre. Si no encuentra el piloto, devuelve -1.
        if (indice === -1) {
            this.sesiones.push({ piloto, tiempo });  // Guardamos directamente el objeto
        } else {
            if (tiempo < this.sesiones[indice].tiempo) {
                this.sesiones[indice].tiempo = tiempo;  // Si el tiempo es mejor, actualizamos
            }
        }
    }

    // Método para eliminar una sesión de calificación, si existe
    eliminarSesion(nombrePiloto) {
        const indice = this.sesiones.findIndex(sesion => sesion.piloto.nombre === nombrePiloto);
        if (indice !== -1) {
            this.sesiones.splice(indice, 1);  // Eliminar la sesión si se encuentra
        } else {
            console.log(`La sesión del piloto ${nombrePiloto} no existe.`);
        }
    }

    // Ordenar las sesiones por tiempo (de menor a mayor)
    ordenarPorTiempo() {
        this.sesiones.sort((a, b) => a.tiempo - b.tiempo);
    }

    // Ordenar las sesiones por nombre del piloto (alfabéticamente)
    ordenarPorNombre() {
        this.sesiones.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
    }

    // Mostrar todas las sesiones
    mostrarSesiones() {
        this.sesiones.forEach(sesion => {
            console.log(`Piloto: ${sesion.piloto.nombre}, Escudería: ${sesion.piloto.escuderia}, Tiempo: ${sesion.tiempo}ms`);
        });
    }
}


















