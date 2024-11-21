/*Crea una expresión regular que reemplace todas las instancias de la palabra "malo" en un texto por
 "bueno". Ahora modifica tu código para que el usuario introduzca las palabras a reemplazar.*/

 var texto = String(window.prompt("Introduce un texto: "));

 var palabraAReemplazar = /malo/;
 var nuevaPalabra = /bueno/;
 
 const regex = new RegExp(palabraAReemplazar, "g");
 
 const resultado = texto.replace(regex, nuevaPalabra);
 
 alert("Texto modificado: " + resultado);
 
 if (regex.test(texto)) {
     alert("La palabra '" + palabraAReemplazar + "' estaba presente en el texto.");
 } else {
     alert("La palabra '" + palabraAReemplazar + "' no estaba presente en el texto.");
 }