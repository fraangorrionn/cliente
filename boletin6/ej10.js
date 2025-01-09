/*Crea un página con un div y a medida que mueves el ratón por la pantalla, dentro de el div se visualizan las coordenadas. */

window.addEventListener('load', inicializar)

function inicializar(){
    let div = document.createElement('div');
    div.setAttribute('id','coordenadas');
    document.body.appendChild(div);
    document.addEventListener('mousemove', coordenadas);
}

function coordenadas(evento){
    let divCoordenadas = document.getElementById('coordenadas');
    let x = evento.clientX;
    let y = evento.clientY;

    divCoordenadas.textContent = `X: ${x}, Y: ${y}`;
}