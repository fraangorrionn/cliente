// Definimos la clase Persona
class Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fechaNacimiento = new Date(fechaNacimiento);  // Aseguramos que la fecha sea un objeto Date
    }

    calcularEdad() {
        const hoy = new Date();
        let edad = hoy.getFullYear() - this.fechaNacimiento.getFullYear();
        const m = hoy.getMonth() - this.fechaNacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < this.fechaNacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

}


