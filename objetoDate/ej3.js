/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero
 expresado en horas, minutos y segundos. */

 function convertirTiempo(segundos) {
    // Calcular horas, minutos y segundos
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;

    // Mostrar el resultado
    alert(`El tiempo convertido es: ${horas} horas, ${minutos} minutos y ${segundosRestantes} segundos.`);
}

// Solicitar al usuario el tiempo en segundos
const tiempoSegundos = parseInt(prompt('Introduce el tiempo en segundos:'), 10);
if (!isNaN(tiempoSegundos) && tiempoSegundos >= 0) {
    convertirTiempo(tiempoSegundos);
} else {
    alert('Por favor, introduce un número válido de segundos.');
}