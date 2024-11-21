/*19 Diseña un algoritmo para simular el juego de ¿dónde está la bolita? (trileros), famoso timo practicado por los llamados trileros .
En nuestro caso el ordenador será un honrado trilero que no engañará al usuario que juegue con él.*/

function whereIsTheBall() {
    let ballPosition = Math.floor(Math.random() * 3) + 1;
    let guess = parseInt(prompt("¿En qué posición está la bolita? (1, 2 o 3):"));
    
    if (guess === ballPosition) {
        alert("¡Correcto! Encontraste la bolita.");
    } else {
        alert(`Incorrecto. La bolita estaba en la posición ${ballPosition}.`);
    }

    if (confirm("¿Deseas jugar otra vez?")) {
        whereIsTheBall();
    }
}

whereIsTheBall();