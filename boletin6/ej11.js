/*Crea una página con un enlace, cuando pulses sobre el enlace, se mostrará una capa oculta con la posición donde has hecho clic. */

window.addEventListener('load', inicializar);

function inicializar() {
    let enlace = document.createElement('a');
    enlace.setAttribute('href', '#');
    enlace.textContent = 'Mostrar capa';
    enlace.id = 'enlace';

    let capa = document.createElement('div');
    capa.id = 'capa';
    capa.style.display = 'none'; 
    capa.style.position = 'absolute'; 
    capa.textContent = 'Esta es la capa mostrada.';

    document.body.appendChild(enlace);
    document.body.appendChild(capa);

    enlace.addEventListener('click', function (evento) {
        evento.preventDefault();

        let x = evento.clientX;
        let y = evento.clientY;

        capa.style.left = x + 'px';
        capa.style.top = y + 'px';
        capa.style.display = capa.style.display === 'none' ? 'block' : 'none';
    });
}
