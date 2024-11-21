/*11 Hacer un algoritmo que lea el número correspondiente a un mes del calendario y presente en pantalla su nombre
usando una estructura de control adecuada.*/
function mes(num){
    if (num > 0 && num <=12) {
        return num;
    }else{
        return "el numero tiene que ser del 1 al 12";
    }
}
num = parseInt(prompt("introduce un numero del 1 al 12: "));
var meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre","octubre", "noviembre", "diciembre"];

var numero = mes(num);
alert("el mes del numero: "+numero+ " es: "+meses[numero-1]);