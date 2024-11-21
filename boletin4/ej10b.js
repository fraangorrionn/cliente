/*Asegúrate de que la función se llama doubleOddNumbers.
    function doubleOddNumbers(arr){
        return arr.filter(function(val){
            return val % 2 !== 0;
        }).map(function(val){
            return val *2;
        })
    }
 */

const doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val * 2);


alert(doubleOddNumbers([51, 55]));