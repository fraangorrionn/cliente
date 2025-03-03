/* 15Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, calcule cuál es el
 número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero.*/
 
 function minimumCoins(amount) {
    let coins = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
    let result = {};
    let remaining = amount;

    for (let coin of coins) {
        let count = Math.floor(remaining / coin);
        if (count > 0) {
            result[coin] = count;
            remaining = (remaining % coin).toFixed(2);
        }
    }

    return result;
}

let amount = parseFloat(prompt("Introduce la cantidad en euros:"));
if (!isNaN(amount) && amount >= 0) {
    let coins = minimumCoins(amount);
    console.log(`Número mínimo de monedas:`, coins);
} else {
    alert("Cantidad no válida.");
}