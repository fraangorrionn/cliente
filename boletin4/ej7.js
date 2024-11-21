/*Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál
 es el menor y el mayor de ellos. */

 function encontrarMayorYMenor(numeros) {
    if (!Array.isArray(numeros) || numeros.length === 0) {
        return 'Por favor, proporciona un array válido de números.';
    }

    const menor = Math.min(...numeros);
    const mayor = Math.max(...numeros);

    return `El número menor es ${menor} y el número mayor es ${mayor}.`;
}

// Ejemplo de uso
const numeros = [34, 12, 56, 1, 78, 3, 90];
const resultado = encontrarMayorYMenor(numeros);
alert(resultado);
