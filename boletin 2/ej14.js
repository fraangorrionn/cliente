/*14 Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. Para ello disponemos de un documento
 donde se recoge si se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. La entrada de datos termina cuando 
 se lee un * como sexo. Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente
  de que el trabajador sea hombre o mujer.*/


function calculateAverageIncome() {
    let totalMen = 0, totalWomen = 0, countMen = 0, countWomen = 0;
    
    while (true) {
        let gender = prompt("Introduce el sexo (H para hombre, M para mujer, * para salir):").toUpperCase();
        if (gender === "*") break;

        if (gender !== "H" && gender !== "M") {
            alert("Sexo no válido.");
            continue;
        }

        let salary = parseFloat(prompt("Introduce el sueldo (1000-2000 euros):"));
        if (isNaN(salary) || salary < 1000 || salary > 2000) {
            alert("Sueldo no válido.");
            continue;
        }

        if (gender === "H") {
            totalMen += salary;
            countMen++;
        } else {
            totalWomen += salary;
            countWomen++;
        }
    }

    let avgMen = countMen ? totalMen / countMen : 0;
    let avgWomen = countWomen ? totalWomen / countWomen : 0;
    alert(`Ingreso medio hombres: ${avgMen.toFixed(2)}, Ingreso medio mujeres: ${avgWomen.toFixed(2)}`);
}

calculateAverageIncome();