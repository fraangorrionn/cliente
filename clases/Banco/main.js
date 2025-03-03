/*Enunciado:
Vamos a construir un sistema para gestionar Cuentas Bancarias. La clase CuentaBancaria será la clase base (padre), y la clase CuentaDeAhorros será la clase hija que hereda de la clase CuentaBancaria. La CuentaDeAhorros tendrá características adicionales y métodos específicos.

Requisitos:
Clase CuentaBancaria (Padre):

Atributos:
titular: Nombre del titular de la cuenta.
numeroCuenta: Número de cuenta bancario (cadena alfanumérica).
saldo: El saldo disponible en la cuenta.
Métodos:
mostrarInformacion(): Muestra la información completa de la cuenta (titular, número de cuenta, saldo).
depositar(cantidad): Realiza un depósito en la cuenta.
retirar(cantidad): Realiza un retiro de la cuenta.
transferir(cantidad, cuentaDestino): Realiza una transferencia de dinero entre cuentas.
estadoCuenta(): Muestra si la cuenta está activa, si el saldo es mayor a 0.
Clase CuentaDeAhorros (Hija de CuentaBancaria):

Atributos adicionales:
tasaInteres: Tasa de interés anual en porcentaje (por ejemplo, 3%).
Métodos adicionales:
calcularInteres(): Calcula y añade el interés anual al saldo de la cuenta.
retirar(cantidad): Sobrescribe el método retirar para permitir solo retiros que no dejen el saldo por debajo de un monto mínimo de seguridad.
mostrarInformacion(): Sobrescribe el método mostrarInformacion() para incluir el valor de la tasa de interés.
 */
// Crear cuentas
let cuenta1 = new CuentaBancaria("Juan Pérez", "12345AB", 1000);
let cuenta2 = new CuentaDeAhorros("Ana López", "67890CD", 1500, 3);  // Tasa de interés del 3%

// Mostrar información de las cuentas
cuenta1.mostrarInformacion();
cuenta2.mostrarInformacion();

// Depositar dinero en la cuenta de Juan
cuenta1.depositar(500);

// Realizar un retiro en la cuenta de Juan
cuenta1.retirar(200);

// Intentar realizar una transferencia de cuenta1 a cuenta2
cuenta1.transferir(300, cuenta2);

// Calcular y aplicar el interés anual en la cuenta de ahorros
cuenta2.calcularInteres();

// Consultar las fechas de los últimos depósitos y retiros
cuenta1.mostrarFechaUltimoDeposito();
cuenta1.mostrarFechaUltimoRetiro();

// Verificar el estado de la cuenta en una fecha específica
cuenta1.mostrarEstadoCuentaFecha("2024-12-01");
cuenta2.mostrarEstadoCuentaFecha("2023-05-01");

// Intentar realizar un retiro en la cuenta de ahorros (con saldo mínimo de seguridad)
cuenta2.retirar(1000);  // Esto no debería ser permitido

// Verificar el estado de las cuentas
cuenta1.estadoCuenta();
cuenta2.estadoCuenta();

// Activar la alerta periódica del estado de la cuenta
cuenta1.alertarEstadoCuentaPeriodicamente();
cuenta2.alertarEstadoCuentaPeriodicamente();