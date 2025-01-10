/*Crea una página donde un div o una imagen persigue al ratón */

window.addEventListener('load', inicializar)

function inicializar(){
    let div = document.createElement('div');
    div.setAttribute('id','preseguir');
    document.body.appendChild(div);
    document.addEventListener('mousemove', perseguir);
}

function perseguir(evento){
    let divPerseguir = document.getElementById('perseguir');
    
}