/*Hacer un programa que muestre un menú de opciones con las siguientes operaciones posibles:
Redondeo a su inmediato superior de un número
Redondeo a su inmediato inferior de un número
Redondeo al número más cercano
Cálculo del número máximo entre dos dados
Cálculo del número mínimo entre dos dados
Cálculo de un número elevado a otro
Cálculo de la raíz cuadrada de un número
 */

function mostrarMenu() {
    let opcion;
    do {
        opcion = parseInt(prompt(
            "Seleccione una opción:\n" +
            "1. Redondeo al inmediato superior de un número\n" +
            "2. Redondeo al inmediato inferior de un número\n" +
            "3. Redondeo al número más cercano\n" +
            "4. Cálculo del número máximo entre dos dados\n" +
            "5. Cálculo del número mínimo entre dos dados\n" +
            "6. Cálculo de un número elevado a otro\n" +
            "7. Cálculo de la raíz cuadrada de un número\n" +
            "8. Salir"
        ));

        switch (opcion) {
            case 1:
                let num1 = parseFloat(prompt("Introduce un número:"));
                alert("El redondeo al inmediato superior es: " + Math.ceil(num1));
                break;
            case 2:
                let num2 = parseFloat(prompt("Introduce un número:"));
                alert("El redondeo al inmediato inferior es: " + Math.floor(num2));
                break;
            case 3:
                let num3 = parseFloat(prompt("Introduce un número:"));
                alert("El redondeo al número más cercano es: " + Math.round(num3));
                break;
            case 4:
                let dado1 = parseFloat(prompt("Introduce el primer número (dado):"));
                let dado2 = parseFloat(prompt("Introduce el segundo número (dado):"));
                alert("El número máximo entre los dos dados es: " + Math.max(dado1, dado2));
                break;
            case 5:
                let dado3 = parseFloat(prompt("Introduce el primer número (dado):"));
                let dado4 = parseFloat(prompt("Introduce el segundo número (dado):"));
                alert("El número mínimo entre los dos dados es: " + Math.min(dado3, dado4));
                break;
            case 6:
                let base = parseFloat(prompt("Introduce la base:"));
                let exponente = parseFloat(prompt("Introduce el exponente:"));
                alert("El resultado de elevar el número es: " + Math.pow(base, exponente));
                break;
            case 7:
                let num4 = parseFloat(prompt("Introduce un número:"));
                if (num4 < 0) {
                    alert("No se puede calcular la raíz cuadrada de un número negativo.");
                } else {
                    alert("La raíz cuadrada es: " + Math.sqrt(num4));
                }
                break;
            case 8:
                alert("Saliendo del programa.");
                break;
            default:
                alert("Opción no válida, por favor elija una opción del 1 al 8.");
        }
    } while (opcion !== 8);
}

mostrarMenu();