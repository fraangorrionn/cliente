/*Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado
a la función.*/

function elMenor(...numeros) {
    if (numeros.length === 0) {
        return null;
    }
    let menor = numeros[0];
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i]; 
        }
    }
    
    return menor;
}

alert(elMenor(10, 5, 20, -3, 0)); 