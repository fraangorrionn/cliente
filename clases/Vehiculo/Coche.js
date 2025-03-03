class Coche extends Vehiculo {
    constructor(marca, modelo, año, precioPorDia, numeroDePuertas, tipo) {
        super(marca, modelo, año, precioPorDia);
        this.numeroDePuertas = numeroDePuertas;
        this.tipo = tipo;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Número de puertas: ${this.numeroDePuertas}`);
        console.log(`Tipo: ${this.tipo}`);
    }

    calcularAlquiler(dias) {
        let alquiler = super.calcularAlquiler(dias);
        if (dias > 7) {
            alquiler *= 0.9; // Descuento del 10% para alquileres de más de 7 días
            console.log('¡Descuento del 10% aplicado!');
        }
        return alquiler;
    }
}