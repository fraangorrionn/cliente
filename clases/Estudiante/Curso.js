// Clase Curso
class Curso {
    constructor(nombreCurso) {
        this.nombreCurso = nombreCurso;
        this.estudiantes = new Map(); // Usamos un Map para almacenar los estudiantes por ID
    }

    // Método para agregar un estudiante
    agregarEstudiante(estudiante) {
        if (!this.estudiantes.has(estudiante.id)) {
            this.estudiantes.set(estudiante.id, estudiante);
            console.log(`Estudiante ${estudiante.nombre} agregado al curso ${this.nombreCurso}.`);
        } else {
            console.log(`El estudiante ${estudiante.nombre} ya está inscrito en el curso.`);
        }
    }

    // Método para asignar materia a un estudiante
    asignarMateriaAEstudiante(idEstudiante, materia) {
        const estudiante = this.estudiantes.get(idEstudiante);
        if (estudiante) {
            estudiante.agregarMateria(materia);
        } else {
            console.log("Estudiante no encontrado.");
        }
    }

    // Método para asignar calificación a un estudiante
    asignarCalificacionAEstudiante(idEstudiante, materia, calificacion) {
        const estudiante = this.estudiantes.get(idEstudiante);
        if (estudiante) {
            estudiante.asignarCalificacion(materia, calificacion);
        } else {
            console.log("Estudiante no encontrado.");
        }
    }

    // Método para obtener las calificaciones de un estudiante
    obtenerCalificacionesEstudiante(idEstudiante) {
        const estudiante = this.estudiantes.get(idEstudiante);
        if (estudiante) {
            estudiante.obtenerCalificaciones();
        } else {
            console.log("Estudiante no encontrado.");
        }
    }
}