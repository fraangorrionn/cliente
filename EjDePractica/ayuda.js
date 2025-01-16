//Declaracionesç
var variable = 0;    //Declara una variable
let variable2 = 0;   //Declara una variable de bloque
const variable3 = 0; //Declara una constante de bloque

                                                    /*----- prompt -----*/


var num = window.prompt('Ingresa un número');

                                                    /*----- Operadores -----*/

document.write(5 == "5");  // true Verifica si dos valores son iguales (sin verificar el tipo de dato).

document.write(5 === "5");  // false Verifica si dos valores son iguales en valor y tipo.

document.write(5 != "5");  // false Verifica si dos valores son distintos (sin verificar el tipo de dato).

document.write(5 !== "5");  // false Verifica si dos valores son distintos en valor y tipo

document.write(true && false);  // false  Devuelve true si ambas condiciones son verdaderas

document.write(true || false);  // true Devuelve true si al menos una de las condiciones es verdadera.

document.write(!true);  // false Invierte el valor de una expresión booleana

                                                    /*----- Operador Ternario -----*/


let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
document.write(mensaje);  // "Eres mayor de edad"




                                                    /*----- if -----*/

var pares = 2;
if (pares % 2 == 0) {
    alert('El número es par')
}else(
    alert('El número es impar')
)

                                                    /*----- switch -----*/

let dia = 3;

switch(dia) {
    case 1:
        alert('Lunes');
        break;
    case 2:
        alert('Martes');
        break;
    case 3:
        alert('Miércoles');
        break;
    case 4:
        alert('Jueves');
        break;
    case 5:
        alert('Viernes');
        break;
    case 6:
        alert('Sábado');
        break;
    case 7:
        alert('Domingo');
        break;
    default:
        alert('Día inválido');
        break;
}

/*----- For -----*/

for (let i = 1; i <= 5; i++) {
    alert(i);
}

                                                    /*----- Funcion -----*/

function sumar(a, b) {
    return a + b;
}


// Llamamos a la función con dos números
document.write("El resultado de la suma es: " + sumar(3, 7));


                                                    /*----- Try...Catch -----*/

function dividir(a, b) {
    try {
        
        if (b === 0) {
            throw new Error("No se puede dividir por 0");
        }
        let resultado = a / b;
        alert("El resultado de la división es: " + resultado);

    } catch (error) {
        alert("Error: " + error.message);
    }
}

// Llamamos a la función
dividir(10, 0);


                                                    /*----- Match -----*/

//para el numero pi

let PI = Math.PI;

// convierte los numero en negativo en positivo
let valorAbsoluto = Math.abs(numero);

//para elevar un numero por ejemplo
let base = 3;
let exponente = 2;
let potencia = Math.pow(base, exponente); //sale un 9 = 3 * 3

//devuelve la raiz cuadrada de un numero

let raizCuadrada = Math.sqrt(numero);

//redondea

let numero = 5.7;
document.write(Math.round(numero));  // saca el numero mas cercano.
document.write(Math.floor(numero));  // Redondea hacia abajo, al entero más cercano.
document.write(Math.ceil(numero));   // Redondea hacia arriba, al entero más cercano.

//debuelve el numero mas grande y el mas pequeo 

let maximo = Math.max(1, 5, 3, 9, 2);
let minimo = Math.min(1, 5, 3, 9, 2);


// numeros aleatorio

let numeroAleatorio = Math.floor(Math.random() * 10) + 1; //genera del 1 al 10 necesita floor para redondea hacia abajo

//quita los decimales

numero = -5.7;
document.write(Math.trunc(numero));  // Salida: -5


//convertir string en numeros

numero = parseInt("42");
document.write(numero);  // Salida: 42

let numeroDecimal = parseFloat("3.14159");
document.write(numeroDecimal);  // Salida: 3.14159


//devuelve decimales a los numero que pongas

numero = 123.456;
document.write(numero.toFixed(2));  // "123.46"
document.write(numero.toFixed(0));  // "123" (sin decimales)
document.write(numero.toFixed(4));  // "123.4560" (4 decimales)







                                                    /*----- Cadena -----*/

let cadena = 'Alejadandro es el mejor'
document.write(cadena.toLowerCase()); // convierte a minuscula 

document.write(cadena.toUpperCase()); // convierte a mayusculas la cadena







                                                    /*----- Expresiones regulares -----*/


// . (punto): Representa cualquier carácter. Por ejemplo, /a.c/ encontrará cualquier palabra que tenga una "a", cualquier carácter, y luego una "c" (ejemplo: "abc", "a9c").
// ^: Significa que lo que sigue debe estar al inicio de una cadena. Por ejemplo, ^Hola buscará "Hola" solo si está al principio de una frase.
// $: Lo opuesto al ^, significa que el patrón debe estar al final de la cadena.
// \d: Busca cualquier dígito (número del 0 al 9).
// \w: Busca cualquier carácter alfanumérico (letra o número).
// \s: Busca un espacio en blanco (como un espacio, tabulación, etc.).                                                    
// mostrar tru si esta el patron false si no lo esta

var conc = /^[cC]/ //comienza con c
var conn = /[ñÑ]/ //contienen la ñ
var patron = /^[cC] | [ñÑ]/ //comienza con c o que contienen la ñ

document.write(patron.test(texto));  // Esto mostrará `true` porque "Juan" está en el texto Eje_1.js

// [^,] = esto significa negacion busca cualquier caracter que no sea ese
const nombres = nombreinput.match(/[^,]+/g) || []; // devuelve un array separado por comas Eje_2.js

var textoLimpio = texto.trim(); //quita los espacios de inicio y fin

//la expresion busca espacios y con el + dice buca 1 o mas espacios juntos y remplazalo por ' '.
var textoSuperTrim = texto.replace(/\s+/g, ' ').trim();  // Reemplaza múltiples espacios con uno y elimina los espacios al inicio/final



                                                    /*----- Boom -----*/
let nuevaVentana = window.open("", "Nueva Ventana", "width=400,height=400"); //aqui para abrir el navegador
nuevaVentana.document.write("aqui"); // para escribir dentro lo que quieras








                                                    /*----- Fechas -----*/
//Para poner ahora la fercha

var fechaActual = new Date();
document.write("Fecha y hora actual: " + fechaActual + "<br>");


//para imprimir la hora como str

var fecha = new Date();
document.write("Fecha en formato legible: " + fecha.toDateString() + "<br>");

//pone el año como si fuera 4 digitos
var fecha = new Date();
document.write("Año actual: " + fecha.getFullYear() + "<br>");

//devuelve el mes
var fecha = new Date();
document.write("Mes actual (0 = enero, 11 = diciembre): " + fecha.getMonth() + "<br>");

//devuelve el dia del mes
var fecha = new Date();
document.write("Día del mes: " + fecha.getDate() + "<br>");

//cambiar el año
var fecha = new Date();
fecha.setFullYear(2030);
document.write("Año cambiado a: " + fecha.getFullYear() + "<br>");

//Devuelve el día de la semana (0 para domingo, 1 para lunes, etc.).

var fecha = new Date();
var diasSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
document.write("Día de la semana: " + diasSemana[fecha.getDay()] + "<br>");

//Calcula la diferencia en días entre dos fechas.
var fecha1 = new Date("2024-01-01");
var fecha2 = new Date("2024-01-10");
var diferenciaMilisegundos = fecha2 - fecha1;
var diferenciaDias = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
document.write("Diferencia en días: " + diferenciaDias + " días<br>");

//Encuentra la fecha menor o mayor entre dos fechas (min o max)

var fecha1 = new Date("2024-01-01");
var fecha2 = new Date("2023-12-31");
var fechaMenor = new Date(Math.min(fecha1, fecha2));
document.write("Fecha más antigua: " + fechaMenor.toDateString() + "<br>");



ç


                                                    /*----- Arrays -----*/


//agregar uno o varios elementos al final del array

const arr = [1, 2];
arr.push(3, 4); // Output: [1, 2, 3, 4]
document.write(arr); // [1, 2, 3, 4]

//agregar uno o varios elementos al inicio del array

arr = [2, 3];
arr.unshift(1); // Output: [1, 2, 3]
document.write(arr); // [1, 2, 3]


//Elimina el ultimo elemento del array y lo devuelve

arr = [1, 2, 3];
const lastElement = arr.pop(); // 3
document.write(arr); // [1, 2]

//Elimina el primer elemento del array y lo devuelve

arr = [1, 2, 3];
const firstElement = arr.shift(); // 1
document.write(arr); // [2, 3]

//Cambia el contenido del array eliminando o agregando elementos en una posición específica.

arr = [1, 2, 3, 4];
arr.splice(1, 2, 5, 6); // Elimina 2 elementos desde la posición 1 y agrega 5, 6
document.write(arr); // [1, 5, 6, 4]

//Devuelve una copia de una porción del array dentro de un nuevo array

arr = [1, 2, 3, 4];
const subArray = arr.slice(1, 3); // [2, 3]
document.write(subArray); // [2, 3]

//Devuelve el primer índice en el que se encuentra un elemento; devuelve -1 si no se encuentra.

arr = [1, 2, 3, 4];
document.write(arr.indexOf(3)); // 2
document.write(arr.indexOf(5)); // -1

//Devuelve true si el array contiene el elemento, de lo contrario, false

arr = [1, 2, 3];
document.write(arr.includes(2)); // true
document.write(arr.includes(4)); // false

//Devuelve el primer elemento que cumple con la función de prueba proporcionada

arr = [5, 12, 8, 130, 44];
const encontrado = arr.find(elemento => elemento > 10);
document.write(encontrado); // 12

//Devuelve un nuevo array con todos los elementos que cumplen con la función de prueba proporcionada

arr = [5, 12, 8, 130, 44];
const filtrado = arr.filter(elemento => elemento > 10);
document.write(filtrado); // [12, 130, 44]

//Crea un nuevo array con los resultados de llamar a una función en cada elemento del array

arr = [1, 2, 3];
const mapeado = arr.map(x => x * 2);
document.write(mapeado); // [2, 4, 6]

//Ordena los elementos del array (por defecto, en orden alfabético ascendente).

arr = [4, 2, 9, 1];
arr.sort(); // Ordena alfabéticamente: [1, 2, 4, 9]
document.write(arr);

arr.sort((a, b) => b - a); // Ordena en orden descendente numérico
document.write(arr); // [9, 4, 2, 1]

//Invierte el orden de los elementos en el array.

arr = [1, 2, 3];
arr.reverse();
document.write(arr); // [3, 2, 1]

//Crea y devuelve un string concatenando todos los elementos del array, separados por el string dado

arr = ['a', 'b', 'c'];
document.write(arr.join('-')); // "a-b-c"








                                                    /*----- set -----*/

//crear un set                                                    
const mySet = new Set(); // Conjunto vacío
const mySetWithValues = new Set([1, 2, 3]); // Conjunto con valores iniciales
document.write(mySetWithValues); // Output: Set { 1, 2, 3 }


//agregar un nuevo valor 

mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(1); // No se agregará porque 1 ya existe en el Set
document.write(mySet); // Output: Set { 1, 2 }

//elimina un valor 

mySet = new Set([1, 2, 3]);
mySet.delete(2); // Elimina el valor 2
document.write(mySet); // Output: Set { 1, 3 }


//verifica si ya esta

mySet = new Set([1, 2, 3]);
document.write(mySet.has(2)); // Output: true
document.write(mySet.has(4)); // Output: false

//elimina todos los conjuntos 

mySet = new Set([1, 2, 3]);
mySet.clear();
document.write(mySet); // Output: Set {}

//devuelve la cantidad de conjuntos que hay

mySet = new Set([1, 2, 3]);
document.write(mySet.size); // Output: 3

//itera sobre un foreach

mySet = new Set([1, 2, 3]);
mySet.forEach(value => {
  document.write(value); // Output: 1 2 3
});

//itera con un for

mySet = new Set([1, 2, 3]);
for (const value of mySet) {
  document.write(value); // Output: 1 2 3
}


//convertir un set en un array

mySet = new Set([1, 2, 3]);
const myArray = [...mySet];
document.write(myArray); // Output: [1, 2, 3]

//comparar dos set 

function areSetsEqual(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA) {
      if (!setB.has(item)) return false;
    }
    return true;
  }
  
  const set1 = new Set([1, 2, 3]);
  const set2 = new Set([1, 2, 3]);
  document.write(areSetsEqual(set1, set2)); // Output: true
  
                                                      /*----- Map -----*/

const myMap = new Map();

//Agrega o actualiza un par clave-valor en el Map

myMap = new Map();
myMap.set('nombre', 'Juan');
myMap.set(1, 'Uno');
console.log(myMap); // Output: Map { 'nombre' => 'Juan', 1 => 'Uno' }

//Devuelve el valor asociado con la clave proporcionada. Si la clave no existe, devuelve undefined

myMap = new Map();
myMap.set('nombre', 'Juan');
console.log(myMap.get('nombre')); // Output: 'Juan'
console.log(myMap.get('edad')); // Output: undefined

//Devuelve true si la clave existe en el Map; de lo contrario, devuelve false

myMap = new Map();
myMap.set('nombre', 'Juan');
console.log(myMap.has('nombre')); // Output: true
console.log(myMap.has('edad')); // Output: false

//Elimina el par clave-valor asociado con la clave proporcionada. Devuelve true si se eliminó con éxito; de lo contrario, false

 myMap = new Map();
myMap.set('nombre', 'Juan');
console.log(myMap.delete('nombre')); // Output: true
console.log(myMap.has('nombre')); // Output: false

//Elimina todos los pares clave-valor

myMap = new Map();
myMap.set('nombre', 'Juan');
myMap.set('edad', 30);
myMap.clear();
console.log(myMap); // Output: Map {}

//Devuelve el número de elementos (pares clave-valor) 

myMap = new Map();
myMap.set('nombre', 'Juan');
myMap.set('edad', 30);
console.log(myMap.size); // Output: 2
