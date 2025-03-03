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


// Crear pilotos
const piloto1 = new Piloto('Lewis Hamilton', 'Mercedes');
const piloto2 = new Piloto('Max Verstappen', 'Red Bull');
const piloto3 = new Piloto('Charles Leclerc', 'Ferrari');

// Crear la instancia de Calificaciones
const calificaciones = new Calificaciones();

// Añadir sesiones
calificaciones.agregarSesion(piloto1, 83000);  // 83 segundos
calificaciones.agregarSesion(piloto2, 82000);  // 82 segundos
calificaciones.agregarSesion(piloto3, 85000);  // 85 segundos

// Mostrar sesiones antes de ordenar
console.log("Sesiones de calificación antes de ordenar:");
calificaciones.mostrarSesiones();

// Ordenar por tiempo (de menor a mayor)
calificaciones.ordenarPorTiempo();
console.log("\nSesiones de calificación ordenadas por tiempo:");
calificaciones.mostrarSesiones();

// Ordenar por nombre de piloto (alfabéticamente)
calificaciones.ordenarPorNombre();
console.log("\nSesiones de calificación ordenadas por nombre de piloto:");
calificaciones.mostrarSesiones();

// Añadir una nueva sesión con un mejor tiempo
calificaciones.agregarSesion(piloto2, 81000);  // 81 segundos

// Mostrar sesiones después de añadir la nueva sesión
console.log("\nSesiones de calificación después de añadir nueva sesión:");
calificaciones.mostrarSesiones();

// Eliminar una sesión
calificaciones.eliminarSesion('Max Verstappen');
console.log("\nSesiones de calificación después de eliminar a Max Verstappen:");
calificaciones.mostrarSesiones();