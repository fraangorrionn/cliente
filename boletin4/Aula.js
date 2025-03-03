class Aula {
    constructor() {
        this.alumnos = []; // Array para guardar los alumnos
    }

    // Método para añadir un alumno al aula
    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    // Método para buscar un alumno por DNI
    buscarAlumnoPorDNI(dni) {
        const alumno = this.alumnos.find(alumno => alumno.dni.toLowerCase() === dni.toLowerCase()); // Comparar sin importar mayúsculas/minúsculas
        return alumno ? alumno.imprimir() : "Alumno no encontrado.";
    }

    // Método para ordenar las notas de un alumno específico
    ordenarNotasDeAlumno(dni) {
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
