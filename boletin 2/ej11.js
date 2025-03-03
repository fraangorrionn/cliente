/*11 Hacer un algoritmo que lea el número correspondiente a un mes del calendario y presente en pantalla su nombre usando una 
estructura de control adecuada.*/
function getMonthName() {
    let monthNumber = parseInt(prompt("Introduce el número del mes (1-12):"));
    if (isNaN(monthNumber) || monthNumber < 1 || monthNumber > 12) {
        alert("Número de mes no válido.");
        return;
    }
    
    let monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    alert(`El mes es: ${monthNames[monthNumber - 1]}`);
}

getMonthName();