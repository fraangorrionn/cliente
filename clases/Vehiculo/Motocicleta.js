class Motocicleta extends Vehiculo {
    constructor(marca, modelo, año, precioPorDia, cilindrada, tipo) {
        super(marca, modelo, año, precioPorDia);
        this.cilindrada = cilindrada;
        this.tipo = tipo;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Cilindrada: ${this.cilindrada}cc`);
        console.log(`Tipo: ${this.tipo}`);
    }

    calcularAlquiler(dias) {
        let alquiler = super.calcularAlquiler(dias);
        if (dias > 5) {
            alquiler *= 0.95; // Descuento del 5% para alquileres de más de 5 días
            console.log('¡Descuento del 5% aplicado!');
        }
        return alquiler;
    }
}