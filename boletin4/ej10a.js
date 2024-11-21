/*Asegúrate de que la función se llama tripleAndFilter.
    function tripleAndFilter(arr){
    		return arr.map(function(value){
        			return value * 3;
     			}).filter(function(value){
       			return value % 5 === 0;
      		})
    }*/

const tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0);

alert(tripleAndFilter([1, 2, 3, 4, 5])); // [15]

