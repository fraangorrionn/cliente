class Vehiculo {
    constructor(marca, modelo, año, precioPorDia) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.precioPorDia = precioPorDia;
    }

    mostrarInformacion() {
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Año: ${this.año}`);
        console.log(`Precio por día: ${this.precioPorDia}€`);
    }

    calcularAlquiler(dias) {
        return this.precioPorDia * dias;
    }
}