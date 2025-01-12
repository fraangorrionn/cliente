/*Crea un documento HTML con una lista de modelos de coches cuyo estilo sea de cuadradillo. Escribe una función JavaScript que
use la f. getElementsByTagName() para recuperar los elementos de la lista. Añade el estilo de cuadradilla de la lista mediante
 JavaScript. Añade un nuevo modelo a la lista usando DOM, al principio, al final y en alguna posición intermedia que elijas. 
Imagina que tenemos que insertar un nuevo modelo de coche pero no conocemos en 		qué posición de la lista de nodos hijos
queremos meterlo, sólo sabemos que será hermano del modelo “BMW” . Busca ese elemento por su texto y añade el nuevo modelo antes 
y después de este.
 */


window.addEventListener('load', inicializar);

function inicializar(){
    crearTitulo();
    const listaCoches = crearListaDeCoches();
    añadirModelos(listaCoches);
    añadirNuevosModelos(listaCoches);
    añadirAntesYDespues(listaCoches);
}

function crearTitulo(){
    const titulo = document.createElement('h1');
    titulo.textContent = 'Modelo de coches';
    document.body.appendChild(titulo);
}

function crearListaDeCoches(){
    const listaCoches = document.createElement('ul');
    listaCoches.id = 'todos-los-coches';
    listaCoches.classList.add('grid-style');
    document.body.appendChild(listaCoches);
    return listaCoches;
}

function añadirModelos(listaCoches){
    const cochesIniciales = ['ford', 'seat', 'audi', 'bmw'];
    cochesIniciales.forEach(modelo => {
        coche = document.createElement('li');
        coche.textContent = modelo
        listaCoches.appendChild(coche);
    });
}

function añadirNuevosModelos(listaCoches){
    let nuevoCoche1 = document.createElement('li')
    nuevoCoche1.textContent = 'Volvo';
    listaCoches.insertBefore(nuevoCoche1, listaCoches.firstChild);

    let nuevoCoche2 = document.createElement('li')
    nuevoCoche2.textContent = 'Chevrolet';
    listaCoches.appendChild(nuevoCoche2);

    let nuevoCoche3 = document.createElement('li')
    nuevoCoche3.textContent = 'ferrari';
    listaCoches.insertBefore(nuevoCoche3, listaCoches.children[2]);

}

function añadirAntesYDespues(listaCoches){
    const elementosLista = listaCoches.getElementsByTagName('li');
    for (let index = 0; index < elementosLista.length; index++) {
        const element = elementosLista[index];
        if (element.textContent == 'bmw') {
            let antesBmw = document.createElement('li');
            antesBmw.textContent = 'toyota';
            listaCoches.insertBefore(antesBmw, element);

            let despuesBmw = document.createElement('li');
            despuesBmw.textContent = 'mazda';
            listaCoches.insertBefore(despuesBmw, element.nextSibling);
            break;
        }
    }
}