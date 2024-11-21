/*Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.*/

var cadena = String(window.prompt("Introduce una cadena: "));
function caracterMasRepetido(cadena) {

    const caracteres = cadena.split('');
    
    const contador = {};

    const regex = /./g;

    let match;
    while ((match = regex.exec(cadena)) !== null) {
        const caracter = match[0]; 

        contador[caracter] = (contador[caracter] || 0) + 1;
    }

    let maxCaracter = '';
    let maxConteo = 0;

    for (const caracter in contador) {
        const conteo = contador[caracter];
        if (conteo > maxConteo) {
            maxConteo = conteo;
            maxCaracter = caracter;
        }
    }

    return maxCaracter;
}

const resultado = caracterMasRepetido(cadena);
alert(`El carácter más repetido es: '${resultado}'`);