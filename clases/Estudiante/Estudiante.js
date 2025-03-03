// Clase Estudiante
class Estudiante {
    constructor(nombre, id) {
        this.nombre = nombre;
        this.id = id;
        this.materias = new Set(); // Usamos un Set para almacenar las materias del estudiante
        this.calificaciones = new Map(); // Usamos un Map para almacenar las calificaciones por materia
    }

    // Método para agregar materia
    agregarMateria(materia) {
        this.materias.add(materia);
        console.log(`Materia ${materia} añadida a ${this.nombre}.`);
    }

    // Método para asignar calificación a una materia
    asignarCalificacion(materia, calificacion) {
        if (this.materias.has(materia)) {
            this.calificaciones.set(materia, calificacion);
            console.log(`Calificación de ${materia} para ${this.nombre}: ${calificacion}`);
        } else {
            console.log(`${this.nombre} no está inscrito en la materia ${materia}.`);
        }
    }

    // Método para obtener las calificaciones de un estudiante
    obtenerCalificaciones() {
        console.log(`Calificaciones de ${this.nombre}:`);
        this.calificaciones.forEach((calificacion, materia) => {
            console.log(`${materia}: ${calificacion}`);
        });
    }
}
