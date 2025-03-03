/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método
 para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota
  (puede tener la misma nota en varios módulos). */

  let modulos = ["Matemáticas", "Lengua", "Ciencias"];

  let alumno1 = new Alumno("Fran", "Rivera", "24515987b", "2º ESO", [7, 9, 9]);
  
  // Imprimir el alumno
  console.log(alumno1.imprimir());
  
  // Calcular la media de las notas
  console.log("Nota media:", alumno1.notaMedia());
  
  // Obtener la mejor nota y los módulos
  let resultadoMejorNota = alumno1.mejorNota(modulos);
  console.log(`Mejor nota: ${resultadoMejorNota.mejorNota} en los módulos: ${resultadoMejorNota.modulos.join(", ")}`);
