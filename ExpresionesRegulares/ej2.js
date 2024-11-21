//Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.

var num = window.prompt("introduce un número: ");
function valorAbsoluto(num){
    if (num<0) {
        return -num;
    }else{
        return num;
    }
}
alert(valorAbsoluto(num));


