/**Usando las propiedades y métodos DOM, genera el siguiente HTML:
<p>Este es el <em>contenido</em> de mi párrafo.</p>, 
	Crea una funcion JavaScript que sea llamada cuando el documento se cargue.
La función debería realizar lo que sigue:

a. Crea un nodo p asignado a una variable llamada para.
b. Crea un nodo de texto asignado a una variable llamada txt1.
c. Añade txt1 (Este es el) a para.
d. Crea un nodo em asignado a una variable llamada enfasis.
e. Crea un nodo de texto asignado a una variable llamada txt2 (contenido).
f. Añade txt2 a enfasis.
g. Añade enfasis a para.
h. Crea un nodo de texto asignado a una variable llamada txt3.
i. Añade txt3 a para (de mi párrafo).
j. Añade para al elemento testdiv del documento.

Comienza con un documento HTML que contenga un <div> con id testdiv.
 */
window.addEventListener('load', inicializar);

function inicializar() {
    var para = document.createElement('p');
    
    var txt1 = document.createTextNode('Este es el ');
    para.appendChild(txt1);
    
    var enfasis = document.createElement('em');
    
    var txt2 = document.createTextNode('contenido');
    enfasis.appendChild(txt2);
    
    para.appendChild(enfasis);

    var txt3 = document.createTextNode(' de mi párrafo.');
    para.appendChild(txt3);

    document.getElementById('testdiv').appendChild(para);

}