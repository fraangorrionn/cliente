/* 13 Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y dé como resultado el número de Tarot. 
El programa verificará si la fecha es correcta. El número de Tarot se calcula sumando los números de la fecha de nacimiento y
 reduciéndolos a un único dígito. Por ejemplo, si su fecha de nacimiento es 20 de julio de 1984, el número de Tarot sería: 20 + 7+ 1984 
 = 2011⇒ 2 + 0 + 1 + 1 = 4

TODAS LAS ESTRUCTURAS DE CONTROL

NOTA: Validar las entradas oportunas y construir los algoritmos de manera que se ejecuten cuantas veces deseemos con el fin de depurar
 el código sin salir del programa.*/

 function calculateTarotNumber() {
    let day = parseInt(prompt("Introduce el día de nacimiento:"));
    let month = parseInt(prompt("Introduce el mes de nacimiento:"));
    let year = parseInt(prompt("Introduce el año de nacimiento:"));
    
    if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Fecha no válida.");
        return;
    }
    
    let total = day + month + year;
    let tarotNumber = total.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    
    while (tarotNumber > 9) {
        tarotNumber = tarotNumber.toString().split('').reduce((acc, curr) => acc + parseInt(curr), 0);
    }
    
    alert(`Tu número de Tarot es: ${tarotNumber}`);
}

calculateTarotNumber();
