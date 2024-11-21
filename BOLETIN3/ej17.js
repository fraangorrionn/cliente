/*Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. 
Es decir, no existe un código postal en España que empiece por 53 o superior.*/

/*var codigo = prompt("introduce un codigo postal: ")

if(codigo >= 10000 && codigo <= 52999){
    alert("el codigo es correcto")
}else{
    alert("codigo incorrecto")
}*/

var codigo = prompt("introduce un codigo postal: ")
const regex = /\d{5}$/;
var max = 52999;
var min = 10000;
if(regex.test(codigo)){
    if(codigo<=max){
        alert("codigo correcto")
    }else{
        alert("codigo incorrecto")
    }
}