/*Añade un evento al ejercicio anterior en el que si se hace click en la imagen se oculta toda la información relacionada con esa imagen,
al hacer clic de nuevo en la imagen volverá a aparecer toda la información anteriormente ocultada. */

window.addEventListener('load', inicializar);

const viajes = [
    { src: "img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
    { src: "img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] },
];

function inicializar() {
    const contenedorPrincipal = document.getElementById('todos-los-viajes');

    const subtitulo = document.createElement('h1');
    subtitulo.textContent = 'Subtitulo';
    contenedorPrincipal.appendChild(subtitulo);

    const listaPrincipal = document.createElement('ul');

    viajes.forEach(viaje => {
        const elementoLista = document.createElement('li');

        const imagen = document.createElement('img');
        imagen.src = viaje.src;
        elementoLista.appendChild(imagen);

        let contenedorInformacion = document.createElement('div');

        const descripcion = document.createElement('p');
        descripcion.textContent = viaje.desc;
        contenedorInformacion.appendChild(descripcion);

        const listaEspecificaciones = document.createElement('ul');
        viaje.specs.forEach(especificacion => {
            const elementoEspecificacion = document.createElement('li');
            elementoEspecificacion.textContent = especificacion;
            listaEspecificaciones.appendChild(elementoEspecificacion);
        });

        contenedorInformacion.appendChild(listaEspecificaciones);
        elementoLista.appendChild(contenedorInformacion);
        listaPrincipal.appendChild(elementoLista);

        let informacionVisible = true;

        [imagen, contenedorInformacion].forEach(elemento => {
            elemento.addEventListener('click', () => {
                if (informacionVisible) {
                    contenedorInformacion.style.display = 'none';
                    informacionVisible = false;
                } else {
                    contenedorInformacion.style.display = 'block';
                    informacionVisible = true;
                }
            });
        });
    });

    contenedorPrincipal.appendChild(listaPrincipal);
}