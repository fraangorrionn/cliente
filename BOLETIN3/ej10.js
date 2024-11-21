/*Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.*/

function superTrim(cadena) {
    let resultado = '';
    let enPalabra = false;
    
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] !== ' ') {
            resultado += cadena[i]; // Agrega cualquier carácter que no sea un espacio
            enPalabra = true;
        } else if (enPalabra) {
            resultado += ' '; // Agrega un solo espacio si estamos al final de una palabra
            enPalabra = false;
        }
    }
    
    // Elimina el espacio al final si existe
    if (resultado[resultado.length - 1] === ' ') {
        resultado = resultado.slice(0, -1);
    }

    return resultado;
}

let texto = prompt("Introduce una cadena con espacios duplicados:");
let resultado = superTrim(texto);
alert("Cadena con espacios eliminados: " + resultado);

/*function superTrim(cadena) {
    return cadena.replace(/\s+/g, ' ').trim();
}

let texto = prompt("Introduce una cadena con espacios duplicados:");
let resultado = superTrim(texto);
alert("Cadena con espacios eliminados: " + resultado); */