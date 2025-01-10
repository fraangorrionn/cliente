/*Crea una página con un div y permite arrastrarlo con el ratón a otro div. */

window.addEventListener('load', inicializar);

function inicializar(){
    let div = document.createElement('div');
    div.setAttribute('id', 'arrastrar');
    document.body.appendChild(div);
    document.addEventListener('mousemove', arrastrar);
}

function arrastrar(){

}