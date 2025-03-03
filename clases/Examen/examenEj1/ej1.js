/*Desarrolla un programa en JavaScript para una aplicación de agenda de citas.
Las citas guardarán la siguiente información, sala de tipo String y la fecha y hora de la cita de tipo Date.

Tendrás una clase Cliente que contendrá los atributos Nombre, Apellidos, DNI, citas pendientes e historial de citas.

Cuando el usuario utilice el programa prodrá agregar una nueva cita, dónde se agregrá la cita a las citas pendientes del cliente,
 la cita añadida no puede ser anterior a la fecha actual. Un cliente no podrá tener más de una cita el mismo día.
Además, el programa permitirá al usuario programar recordatorios para sus citas. Se utilizará setInterval para mostrar recordatorios
 de las citas programadas. Para garantizar la eficiencia, el programa verificará las citas cada minuto. Actualizará las citas pendientes
  que ya hayan pasado, quitándolas de esa lista de pendientes y pasándolas al historial de citas. Si se encuentra una cita para el día 
  siguiente al actual, se mostrará el recordatorio en una ventana emergente. Si cierras la ventana, esta deberá volver a aparecer hasta
 3 veces y se parará.  */

// Ejemplo 1: Caso Básico - Agregar una cita válida
// Ejemplo 1: Caso Básico - Agregar una cita válida
var cliente1 = new Cliente("Fran", "Rivera", "24515987b");
cliente1.agregarCita("sala 1", "2025-12-15 11:25:00");

// Ejemplo 2: Intento de Agregar una Cita en el Pasado
var cliente2 = new Cliente("Ana", "Gómez", "12345678a");
cliente2.agregarCita("sala 3", "2022-05-01 10:00:00");

// Ejemplo 3: Intento de Agregar dos Citas el Mismo Día
var cliente3 = new Cliente("Carlos", "Martín", "87654321c");
cliente3.agregarCita("sala 2", "2025-12-20 09:00:00");
cliente3.agregarCita("sala 3", "2025-12-20 15:00:00");  // Rechazada

// Ejemplo 4: Agregar Varios Clientes y Citas
var cliente4 = new Cliente("Luis", "Torres", "11223344d");
cliente4.agregarCita("sala 4", "2025-12-18 10:00:00");
cliente4.agregarCita("sala 5", "2025-12-19 14:00:00");
cliente4.agregarCita("sala 6", "2025-12-19 17:00:00");  // Rechazada
console.log(cliente4.citasPendientes); // Muestra las citas válidas
console.log(cliente4.historialCitas); // Muestra el historial (vacío al principio)

// Ejemplo 5: Verificación de Recordatorios
var cliente5 = new Cliente("Marta", "Lopez", "44556677e");
cliente5.agregarCita("sala 7", "2025-12-16 10:00:00");
cliente5.programarRecordatorios();  // Los recordatorios aparecerán cada minuto
