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
class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = [];
    }

    agregarCita(sala, fechaHora) {
        const nuevaCita = new Cita(sala, fechaHora);
        const ahora = new Date();

        // Verificar que la fecha no sea en el pasado
        if (nuevaCita.fechaHora < ahora) {
            console.log("La cita no puede ser anterior a la fecha actual.");
            return;
        }

        // Verificar si el cliente ya tiene una cita en el mismo día
        const mismaFecha = this.citasPendientes.find(cita =>
            cita.fechaHora.toDateString() === nuevaCita.fechaHora.toDateString()
        );
        if (mismaFecha) {
            console.log("Ya tienes una cita programada para el mismo día.");
            return;
        }

        // Si pasa las validaciones, agregamos la cita
        this.citasPendientes.push(nuevaCita);
        console.log(`Cita agregada para el cliente ${this.nombre} ${this.apellidos} en la sala ${sala} el ${nuevaCita.fechaHora}`);
    }

    programarRecordatorios() {
        setInterval(() => {
            const ahora = new Date();

            // Mover las citas pasadas al historial
            this.citasPendientes = this.citasPendientes.filter(cita => {
                if (cita.fechaHora <= ahora) {
                    // Mover la cita a historial
                    this.historialCitas.push(cita);
                    console.log(`La cita en la sala ${cita.sala} el ${cita.fechaHora} ha pasado y se movió al historial.`);
                    return false; // Eliminar la cita de citasPendientes
                }
                return true; // Mantener la cita en citasPendientes
            });

            // Mostrar recordatorios para citas del día siguiente
            this.citasPendientes.forEach(cita => {
                if (this.esCitaDelDiaSiguiente(cita.fechaHora, ahora)) {
                    this.mostrarRecordatorio(cita);
                }
            });
        }, 60000); // Verificación cada minuto
    }

    // Función que verifica si la cita es del día siguiente
    esCitaDelDiaSiguiente(fechaCita, fechaActual) {
        const manana = new Date(fechaActual);
        manana.setDate(fechaActual.getDate() + 1);
        return fechaCita.toDateString() === manana.toDateString();
    }

    // Mostrar el recordatorio para una cita
    mostrarRecordatorio(cita) {
        let contadorRecordatorios = 0;
        const maxRecordatorios = 3;

        function mostrarAlerta() {
            if (contadorRecordatorios < maxRecordatorios) {
                console.log(`(Recordatorio) Cita en la sala ${cita.sala} el ${cita.fechaHora}`);
                contadorRecordatorios++;
                setTimeout(mostrarAlerta, 60000);
            }
        }

        mostrarAlerta();
    }
}

