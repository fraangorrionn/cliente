/*Los números pueden tener entre 1 y 3 dígitos. Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999) */
function solicitarCoordenada() {
    let input = prompt("Introduce la coordenada en el formato (999,999):");
    let regex = /^\(\d{1,3},\d{1,3}\)$/; // Expresión regular para validar el formato (999,999)

    if (regex.test(input)) {
        alert("Coordenada válida: " + input);
    } else {
        alert("Formato incorrecto. La coordenada debe estar en el formato (999,999) con números de 1 a 3 dígitos.");
    }
}

solicitarCoordenada();