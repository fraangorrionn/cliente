/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que
se encuentra entre los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe 
el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” mostrará desde el primer
paréntesis hasta el final.*/

function extraerTextoEntreParentesis(texto) {
    let inicio = texto.indexOf('(');
    let fin = texto.indexOf(')', inicio);

    if (inicio === -1) {
        return ""; // Si no hay "(" devuelve cadena vacía
    } else if (fin === -1) {
        return texto.substring(inicio); // Si hay "(" pero no ")", devuelve desde el primer "(" hasta el final
    } else {
        return texto.substring(inicio + 1, fin); // Si ambos existen, devuelve el texto entre paréntesis
    }
}

let texto = prompt("Introduce una cadena de texto que puede contener paréntesis:");
let resultado = extraerTextoEntreParentesis(texto);
alert("Texto extraído: " + resultado);