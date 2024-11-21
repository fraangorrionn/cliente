/*18 Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado 
en horas, minutos y segundos.*/
function convertTime() {
    let seconds = parseInt(prompt("Introduce el tiempo en segundos:"));
    if (isNaN(seconds) || seconds < 0) {
        alert("Cantidad de segundos no válida.");
        return;
    }

    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let remainingSeconds = seconds % 60;

    alert(`El tiempo es: ${hours} horas, ${minutes} minutos, ${remainingSeconds} segundos.`);
}

convertTime();