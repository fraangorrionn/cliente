/*Para comprobar si un año es o no bisiesto se usa la siguiente regla: “Un año es bisiesto si es divisible por 400,
 o bien es divisible por 4 pero no por 100”. Diseñar un programa que utilizando una variable lógica que tenga valor cierto
 si el año es bisiesto y falso si no lo es.*/

var anyo = parseInt(window.prompt("Introduce un año: "));

if (anyo % 400 == 0 || anyo % 4 == 0 &&  !anyo % 100 == 0) {
    console.log("El año "+anyo+ " es bisiesto");

} else {
    console.log("El año "+anyo+ " no es bisiesto");
}