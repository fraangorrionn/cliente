/*Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. Suponemos
que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún
punto y aparte y las palabras son todas correctas. */

var texto = String(window.prompt("Introduce un texto (finaliza con un punto): "));

var contadorPalabras = 0;
var contadorA = 0;

if (texto && texto.endsWith('.')) {
    var palabras = texto.trim().split(/\s+/); 

    palabras.forEach(function(palabra) {

        contadorPalabras++;
        

        if (palabra.toLowerCase().startsWith('a')) {
            contadorA++;
        }
    });


    alert(`Número total de palabras: ${contadorPalabras}`);
    alert(`Número de palabras que comienzan con 'A': ${contadorA}`);
} else {
    alert("Por favor, introduce un texto que termine con un punto.");
}
