/*Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:
[
{src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
{src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
...
]

El siguiente código HTML:

<div id="todos-los-viajes">
<h1>Subtitulo</h1>
<ul>

<li>
<img src="/img/img1.jpg" />
<p> descripcion1 </p>
<ul class="specs">
<li>spec1</li>
<li>spec2</li>
...
			</ul>
		</li>

		<li>
		…
		</li>
</ul>
</div>
 */

const viajes = [{src: "img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},{src: "img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},{src: "img/img3.jpg", desc: "descripcion3", specs: ["spec31", "spec32"]},];

document.addEventListener('DOMContentLoaded', () => {
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

        const descripcion = document.createElement('p');
        descripcion.textContent = viaje.desc;
        elementoLista.appendChild(descripcion);

        const listaEspecificaciones = document.createElement('ul');
        listaEspecificaciones.classList.add('specs');

        viaje.specs.forEach(especificacion => {
            const elementoEspecificacion = document.createElement('li');
            elementoEspecificacion.textContent = especificacion;
            listaEspecificaciones.appendChild(elementoEspecificacion);
        });

        elementoLista.appendChild(listaEspecificaciones);
        listaPrincipal.appendChild(elementoLista);
    });

    contenedorPrincipal.appendChild(listaPrincipal);
});



