//Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.

//alert("Prueba de JavaScript");
//console.log("hola mundo");

var radio = prompt("introduce el radio");
var area =  4*3.14*radio**2;
var volumen = 4/3 * 3.14*radio**3;

alert("el area de la esfera con radio "+radio+" es: "+area);
alert("el volumen de la esfera con radio "+radio+" es: "+volumen);