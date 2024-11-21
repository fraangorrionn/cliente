/*Trabajas para una agencia de publicidad y te han pedido el siguiente desarrollo:
Al cargar la página se solicita un nombre de usuario, este debe contener
exactamente 7 dígitos o caracteres, ni más, ni menos, en caso contrario debe volver
a solicitar el nombre de usuario.Una vez introducido el nombre de usuario, el programa averiguará el número de
dígitos que contiene el mismo y mostrará un pop-up en la esquina inferior derecha
cada 5 segundos tantas veces como dígitos tenga el nombre de usuario. El pop-up
mostrará el siguiente mensaje:
"Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!" */

// Solicita el nombre de usuario con exactamente 7 caracteres
let nombreUsuario = prompt("Introduce tu nombre de usuario (exactamente 7 caracteres):");
while (nombreUsuario.length !== 7) {
    nombreUsuario = prompt("Error: El nombre de usuario debe contener exactamente 7 caracteres. Por favor, intenta de nuevo:");
}

// Contar el número de dígitos en el nombre de usuario
const numDigitos = (nombreUsuario.match(/\d/g) || []).length;

// Mostrar un alert cada 5 segundos tantas veces como dígitos tenga el nombre
let contador = 0;

function mostrarPopup() {
    if (contador < numDigitos) {
        alert("Hola usuario. Aquí tienes el producto del año. Atrévete a probarlo!!");
        contador++;
    } else {
        clearInterval(intervalo); // Detener el intervalo después de mostrar todos los pop-ups
    }
}

const intervalo = setInterval(mostrarPopup, 5000); // Mostrar el alert cada 5 segundos
