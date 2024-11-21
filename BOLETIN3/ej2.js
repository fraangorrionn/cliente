/*Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C. */

function contarNombres() {

    const cadena = prompt("Introduce una serie de nombres separados por comas:");

    const nombres = cadena.split(',').map(nombre => nombre.trim());

    const totalNombres = nombres.length;

    const nombresConC = nombres.filter(nombre => nombre.toLowerCase().startsWith('c'));
    const totalConC = nombresConC.length;

    alert(`Número total de nombres leídos: ${totalNombres}`);
    alert(`Número de nombres que comienzan con 'C': ${totalConC}`);
}

contarNombres();