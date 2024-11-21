/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

var texto = prompt("Ingresa una cadena de texto:");

function invertirCadena(str) {
    return str.split("").reverse().join("");
}

var textoInvertido = invertirCadena(texto);
alert(textoInvertido);