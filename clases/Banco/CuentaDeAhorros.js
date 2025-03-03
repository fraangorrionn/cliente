// Clase hija CuentaDeAhorros (hereda de CuentaBancaria)
class CuentaDeAhorros extends CuentaBancaria {
    constructor(titular, numeroCuenta, saldo, tasaInteres) {
        super(titular, numeroCuenta, saldo);
        this.tasaInteres = tasaInteres;
    }

    mostrarInformacion() {
        super.mostrarInformacion();
        console.log(`Tasa de interés anual: ${this.tasaInteres}%`);
    }

    // Sobrescribir método retirar para permitir solo retiros con un saldo mínimo
    retirar(cantidad) {
        const saldoMinimo = 50; // El saldo mínimo de seguridad
        if (this.saldo - cantidad < saldoMinimo) {
            console.log(`No puedes retirar más de ${this.saldo - saldoMinimo} para mantener el saldo mínimo de seguridad.`);
        } else {
            super.retirar(cantidad);
        }
    }

    // Método para calcular y agregar el interés anual
    calcularInteres() {
        const interes = (this.saldo * this.tasaInteres) / 100;
        this.saldo += interes;
        console.log(`Se ha añadido un interés de ${interes}. Nuevo saldo: ${this.saldo}`);
    }

    // Sobrescribir el método transferir para verificar si la transferencia no afecta la tasa de interés
    transferir(cantidad, cuentaDestino) {
        if (this.saldo - cantidad < 50) {
            console.log("No puedes realizar la transferencia ya que dejarías el saldo por debajo del mínimo permitido.");
        } else {
            super.transferir(cantidad, cuentaDestino);
        }
    }
}