/*Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. Considere el caso 
especial del valor 0 mostrando el mensaje de error correspondiente.*/

var num = parseFloat(prompt("introduce un numero: "))

function invertir(num){
    if (num == 0) {
        return "error";
    }else{
        if (num<0) {
            return -num
        }else{
            return -num
        }
    }
}

alert(invertir(num));