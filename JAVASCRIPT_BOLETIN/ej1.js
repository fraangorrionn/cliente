//Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.

//alert("Prueba de JavaScript");
//console.log("hola mundo");
var radio = window.prompt("introduce el radio");

var area = 2*3.14 *(radio*radio)

var volumen = 4/3*3.14*(radio*radio*radio)

alert("radio introducido: "+radio+" el area es: "+area+" y el volumen es: "+volumen)