/*Desarrolla un programa en JavaScript para una aplicación de agenda de citas.
Las citas guardarán la siguiente información, sala de tipo String y la fecha y hora de la cita
de tipo Date.
Tendrás una clase Cliente que contendrá los atributos Nombre, Apellidos, DNI, citas
pendientes e historial de citas.
Cuando el usuario utilice el programa prodrá agregar una nueva cita, dónde se agregrá la
cita a las citas pendientes del cliente, la cita añadida no puede ser anterior a la fecha actual.
Un cliente no podrá tener más de una cita el mismo día.
Además, el programa permitirá al usuario programar recordatorios para sus citas. En el
momento adecuado, utilizará setInterval para mostrar recordatorios de las citas
programadas. Para garantizar la eficiencia, el programa verificará las citas cada minuto.
Actualizará las citas pendientes que ya hayan pasado, quitándolas de esa lista de
pendientes y pasándolas al historial de citas.
El recordatorio se mostrará en una ventana emergente. Si cierras la ventana, esta deberá
volver a aparecer hasta 3 veces y se parará.*/

class Cita {
    constructor(sala, fechaHora) {
        this.sala = sala;
        this.fechaHora = fechaHora;
    }
}

class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = [];
    }

    agregarCita(cita) {
        const hoy = new Date();
        if (cita.fechaHora < hoy) {
            alert("No puedes agregar una cita anterior a la fecha actual.");
            return;
        }

        // Verificar si ya hay una cita el mismo día
        const existeCita = this.citasPendientes.some(
            c => c.fechaHora.toDateString() === cita.fechaHora.toDateString()
        );

        if (existeCita) {
            alert("Ya tienes una cita programada para ese día.");
        } else {
            this.citasPendientes.push(cita);
            alert("Cita agregada exitosamente.");
        }
    }

    actualizarCitas() {
        const ahora = new Date();
        this.citasPendientes = this.citasPendientes.filter(cita => {
            if (cita.fechaHora <= ahora) {
                this.historialCitas.push(cita);
                return false; // Eliminar de citas pendientes
            }
            return true; // Mantener en citas pendientes
        });
    }

    programarRecordatorios() {
        let intentosRestantes = 3;

        const verificarRecordatorios = () => {
            const ahora = new Date();
            this.citasPendientes.forEach(cita => {
                if (cita.fechaHora <= ahora && intentosRestantes > 0) {
                    alert(`¡Recordatorio de cita en la sala ${cita.sala}!`);
                    intentosRestantes--;
                    if (intentosRestantes === 0) {
                        clearInterval(intervalo);
                    }
                }
            });

            this.actualizarCitas(); // Actualizar las citas después de cada verificación
        };

        const intervalo = setInterval(verificarRecordatorios, 60000); // Verificar cada minuto
    }

    mostrarCitas() {
        let mensaje = `Citas pendientes para ${this.nombre} ${this.apellidos}:\n`;
        if (this.citasPendientes.length === 0) {
            mensaje += "No hay citas pendientes.\n";
        } else {
            this.citasPendientes.forEach((cita, index) => {
                mensaje += `${index + 1}. Sala: ${cita.sala}, Fecha y Hora: ${cita.fechaHora}\n`;
            });
        }

        mensaje += `\nHistorial de citas:\n`;
        if (this.historialCitas.length === 0) {
            mensaje += "No hay citas en el historial.\n";
        } else {
            this.historialCitas.forEach((cita, index) => {
                mensaje += `${index + 1}. Sala: ${cita.sala}, Fecha y Hora: ${cita.fechaHora}\n`;
            });
        }

        alert(mensaje);
    }
}

// Ejemplo de uso
const cliente = new Cliente("Juan", "Pérez", "12345678A");

function agregarCita() {
    const sala = prompt("Introduce la sala:");
    const fechaHoraString = prompt("Introduce la fecha y hora (formato YYYY-MM-DD HH:MM):");
    const fechaHora = new Date(fechaHoraString);

    if (isNaN(fechaHora)) {
        alert("Fecha y hora inválidas.");
        return;
    }

    const nuevaCita = new Cita(sala, fechaHora);
    cliente.agregarCita(nuevaCita);
}

function iniciarRecordatorios() {
    cliente.programarRecordatorios();
}

function mostrarCitas() {
    cliente.mostrarCitas();
}

// Ejemplo de agregar una cita
agregarCita();
// Mostrar las citas del cliente
mostrarCitas();
// Iniciar recordatorios
iniciarRecordatorios();
