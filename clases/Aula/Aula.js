/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula. 
 */

class Aula{
    constructor(){
        this.alumnos = [];
    }


    agregarAlumno(alumno){
        this.alumnos.push(alumno);
    }

    buscarAlumnoPorDni(dni){
        const alumno = this.alumnos.find(alumno => alumno.dni === dni);
        return alumno ? alumno.imprimir() : "alumno no encontrado";
    }

    ordenarNotasAlumno(dni) {
        const alumno = this.alumnos.find(alumno => alumno.dni === dni);
        if (alumno) {
            return alumno.ordenarNotas();
        }
        return "Alumno no encontrado.";
    }

    // Método para ordenar los alumnos por apellido
    ordenarAlumnosPorApellido() {
        this.alumnos.sort((a, b) => {
            if (!a || !b) return 0; // Comprobamos si hay valores `undefined` en los alumnos
            return a.apellido.localeCompare(b.apellido);
        });
    }

    // Método para imprimir todos los alumnos del aula
    imprimirAlumnos() {
        if (this.alumnos.length === 0) {
            return "No hay alumnos en el aula.";
        }

        return this.alumnos.map(alumno => alumno.imprimir()).join("\n");
    }
}
