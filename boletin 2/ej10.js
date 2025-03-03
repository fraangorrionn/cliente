/*10 Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción.
El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.*/
function convertCurrency() {
    let euros = parseFloat(prompt("Introduce la cantidad en euros:"));
    if (isNaN(euros) || euros < 0) {
        alert("Por favor, introduce una cantidad válida.");
        return;
    }
    
    let option = prompt("Elige una moneda a convertir:\n1. Dólar\n2. Libra\n3. Yen\n4. Franco Suizo\n5. Corona Noruega");
    let conversionRates = {
        1: 1.1, // Dólar
        2: 0.85, // Libra
        3: 129.53, // Yen
        4: 1.08, // Franco Suizo
        5: 10.31 // Corona Noruega
    };
    
    if (conversionRates[option]) {
        let converted = euros * conversionRates[option];
        alert(`El equivalente es: ${converted.toFixed(2)} en la moneda seleccionada.`);
    } else {
        alert("Opción inválida.");
    }

    if (confirm("¿Deseas realizar otra conversión?")) {
        convertCurrency();
    }
}

convertCurrency();

