/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula. 
 */

// Crear algunos alumnos
const alumno1 = new Alumno("Fran", "Rivera", "24515987B", [7, 9, 6]);
const alumno2 = new Alumno("Ana", "Gómez", "31548976A", [8, 10, 9]);
const alumno3 = new Alumno("Luis", "Sánchez", "45612398C", [6, 7, 8]);

// Crear el aula y añadir los alumnos
const aula = new Aula();
aula.agregarAlumno(alumno1);
aula.agregarAlumno(alumno2);
aula.agregarAlumno(alumno3);

// Imprimir todos los alumnos del aula
console.log("Alumnos en el aula:");
console.log(aula.imprimirAlumnos());

// Buscar un alumno por DNI
console.log("\nBuscar alumno por DNI (24515987B):");
console.log(aula.buscarAlumnoPorDni("24515987B"));  // Asegúrate de que el DNI esté en el formato adecuado

// Ordenar las notas de un alumno
console.log("\nOrdenar notas de alumno (31548976A):");
console.log(aula.ordenarNotasAlumno("24515987B"));

// Ordenar alumnos por apellido
console.log("\nAlumnos ordenados por apellido:");
aula.ordenarAlumnosPorApellido();
console.log(aula.imprimirAlumnos());

