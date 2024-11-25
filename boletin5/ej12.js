/*Hacer   un   enlace   que   cambia   su   color   de   fondo   (azul   claro)   cuando   el   ratón   puntero   se sitúa sobre él.  */

window.addEventListener('load', inicializar, false);

function inicializar() {
    const enlace = document.getElementById('enlace-hover');

    enlace.addEventListener('mouseover', () => {
        enlace.style.backgroundColor = 'lightblue';
    });

    enlace.addEventListener('mouseout', () => {
        enlace.style.backgroundColor = '';
    });
}