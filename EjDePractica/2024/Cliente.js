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

        // Verificar que la cita no sea anterior a la fecha actual
        if (nuevaCita.fechaHora < ahora) {
            alert("La cita no puede ser anterior a la fecha actual.");
            return;
        }

        // Verificar que no haya otra cita el mismo día
        const mismaFecha = this.citasPendientes.find(cita =>
            cita.fechaHora.toDateString() === nuevaCita.fechaHora.toDateString()
        );
        if (mismaFecha) {
            alert("Ya tienes una cita programada para el mismo día.");
            return;
        }

        // Agregar la cita
        this.citasPendientes.push(nuevaCita);
        alert("Cita agregada para el cliente " + this.nombre + " " + this.apellidos + " en la sala " + sala + " el " + nuevaCita.fechaHora + ".");
    }

    programarRecordatorios() {
        setInterval(() => {
            const ahora = new Date();
            this.citasPendientes = this.citasPendientes.filter(cita => {
                if (cita.fechaHora <= ahora) {
                    this.historialCitas.push(cita);
                    this.mostrarRecordatorio(cita);
                    return false; // Quita la cita de las pendientes
                }
                return true;
            });
        }, 60000); // Comprobar cada minuto
    }

    mostrarRecordatorio(cita) {
        let contador = 0;
        function mostrarAlerta() {
            if (contador < 3) {
                alert("Recordatorio de cita en la sala " + cita.sala + " el " + cita.fechaHora);
                contador++;
                setTimeout(mostrarAlerta, 5000); // Mostrar de nuevo después de 5 segundos
            }
        }
        mostrarAlerta();
    }
}