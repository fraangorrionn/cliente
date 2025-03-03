// Crear estudiantes
let estudiante1 = new Estudiante("Juan Pérez", 1);
let estudiante2 = new Estudiante("Ana López", 2);

// Crear un curso
let cursoMatematicas = new Curso("Matemáticas");

// Agregar estudiantes al curso
cursoMatematicas.agregarEstudiante(estudiante1);
cursoMatematicas.agregarEstudiante(estudiante2);

// Asignar materias a los estudiantes
cursoMatematicas.asignarMateriaAEstudiante(1, "Cálculo");
cursoMatematicas.asignarMateriaAEstudiante(2, "Álgebra");

// Asignar calificaciones a los estudiantes
cursoMatematicas.asignarCalificacionAEstudiante(1, "Cálculo", 9);
cursoMatematicas.asignarCalificacionAEstudiante(2, "Álgebra", 8);

// Mostrar calificaciones de los estudiantes
cursoMatematicas.obtenerCalificacionesEstudiante(1);
cursoMatematicas.obtenerCalificacionesEstudiante(2);