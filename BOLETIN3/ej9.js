/*Usa una expresión regular para eliminar todos los espacios en blanco de una cadena.*/

function eliminarEspacios(cadena) {
    return cadena.replace(/\s+/g, ''); 
}

let texto = prompt("Introduce una cadena de texto con espacios:");

let textoSinEspacios = eliminarEspacios(texto);

alert("Texto sin espacios: " + textoSinEspacios);
