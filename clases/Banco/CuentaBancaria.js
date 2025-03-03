// Clase base CuentaBancaria
class CuentaBancaria {
    constructor(titular, numeroCuenta, saldo = 0) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this.saldo = saldo;
        this.fechaUltimoDeposito = null;  // Almacena la fecha del último depósito
        this.fechaUltimoRetiro = null;    // Almacena la fecha del último retiro
    }

    mostrarInformacion() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número de Cuenta: ${this.numeroCuenta}`);
        console.log(`Saldo: ${this.saldo}`);
    }

    depositar(cantidad) {
        if (cantidad <= 0) {
            console.log("El monto a depositar debe ser mayor a 0.");
        } else {
            this.saldo += cantidad;
            this.fechaUltimoDeposito = new Date();  // Guardamos la fecha del depósito
            console.log(`Se ha depositado ${cantidad}. Saldo actual: ${this.saldo}`);
        }
    }

    retirar(cantidad) {
        if (cantidad <= 0) {
            console.log("El monto a retirar debe ser mayor a 0.");
        } else if (this.saldo < cantidad) {
            console.log("No tienes suficiente saldo para realizar este retiro.");
        } else {
            this.saldo -= cantidad;
            this.fechaUltimoRetiro = new Date();  // Guardamos la fecha del retiro
            console.log(`Se ha retirado ${cantidad}. Saldo restante: ${this.saldo}`);
        }
    }

    transferir(cantidad, cuentaDestino) {
        if (cantidad <= 0) {
            console.log("El monto a transferir debe ser mayor a 0.");
        } else if (this.saldo < cantidad) {
            console.log("No tienes suficiente saldo para realizar esta transferencia.");
        } else {
            this.saldo -= cantidad;
            cuentaDestino.depositar(cantidad);
            console.log(`Se ha transferido ${cantidad} a la cuenta ${cuentaDestino.numeroCuenta}.`);
        }
    }

    estadoCuenta() {
        if (this.saldo > 0) {
            console.log("La cuenta está activa.");
        } else {
            console.log("La cuenta está inactiva.");
        }
    }

    // Método que devuelve la fecha del último depósito
    mostrarFechaUltimoDeposito() {
        if (this.fechaUltimoDeposito) {
            console.log(`Último depósito realizado el: ${this.fechaUltimoDeposito}`);
        } else {
            console.log("Aún no se ha realizado ningún depósito.");
        }
    }

    // Método que devuelve la fecha del último retiro
    mostrarFechaUltimoRetiro() {
        if (this.fechaUltimoRetiro) {
            console.log(`Último retiro realizado el: ${this.fechaUltimoRetiro}`);
        } else {
            console.log("Aún no se ha realizado ningún retiro.");
        }
    }

    // Método que muestra el estado de la cuenta en una fecha específica
    mostrarEstadoCuentaFecha(fecha) {
        const fechaComparacion = new Date(fecha);
        if (this.saldo > 0 && fechaComparacion <= new Date()) {
            console.log("La cuenta está activa.");
        } else {
            console.log("La cuenta está inactiva.");
        }
    }

    // Método que alerta el estado de la cuenta cada cierto intervalo de tiempo (por ejemplo, cada 10 segundos)
    alertarEstadoCuentaPeriodicamente() {
        const intervalo = 10000;  // Intervalo de 10 segundos

        // Usamos setInterval para ejecutar cada 10 segundos
        setInterval(() => {
            if (this.saldo > 0) {
                console.log("La cuenta está activa.");
            } else {
                console.log("La cuenta está inactiva.");
            }
        }, intervalo);
    }
}