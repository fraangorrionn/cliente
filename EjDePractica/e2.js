/*Realiza un programa que muestre y oculte noticias de un listado de la siguiente
forma:
● El archivo html sólo puede contener <div id=”noticias”></div>
● Debes crear con javascript de manera dinámica un número de bloques de
noticias recogidos del array de JSON que tienes más abajo.
● Al principio de cada bloque se mostrará el titular de la noticia y existirá una
imagen que servirá de botón para mostrar el contenido. El resumen estará
visible pero el contenido estará oculto. Este último se mostrará al hacer click
en el botón.
● Si el contenido se está mostrando el botón mostrar cambiará por un botón
ocultar que, obviamente, ocultará el contenido y viceversa.
JSON: [{titular: "Noticia 1", resumen: "Resumen de la noticia 1",descripcion: "Esta es
la noticia 1"},{titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion:
"Esta es la noticia 2"},{titular: "Noticia 3",resumen: "Resumen de la noticia
3",descripcion: "Esta es la noticia 3"}]; */

window.addEventListener('load', inicializar);

function inicializar() {
    const noticias = [
        { titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1" },
        { titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2" },
        { titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3" }
    ];

    const contenedorNoticias = document.getElementById('noticias');

    noticias.forEach(noticia => {
        // Crear el bloque de noticias
        const bloqueNoticia = document.createElement('div');
        bloqueNoticia.setAttribute('data-type', 'noticia'); // Añadir atributo para identificación

        // Crear el titular
        const titular = document.createElement('h2');
        titular.textContent = noticia.titular;
        bloqueNoticia.appendChild(titular);

        // Crear el resumen
        const resumen = document.createElement('p');
        resumen.textContent = noticia.resumen;
        bloqueNoticia.appendChild(resumen);

        // Crear el contenido oculto
        const contenido = document.createElement('p');
        contenido.textContent = noticia.descripcion;
        contenido.style.display = 'none'; // Inicialmente oculto
        bloqueNoticia.appendChild(contenido);

        // Crear el botón con la imagen
        const boton = document.createElement('img');
        boton.src = './x.png'; // Imagen inicial
        boton.alt = 'Mostrar contenido';
        boton.addEventListener('click', () => {
            if (contenido.style.display === 'none') {
                contenido.style.display = 'block';
                boton.src = './okey.png'; // Cambiar a imagen de ocultar
                boton.alt = 'Ocultar contenido';
            } else {
                contenido.style.display = 'none';
                boton.src = './x.png'; // Cambiar a imagen de mostrar
                boton.alt = 'Mostrar contenido';
            }
        });
        bloqueNoticia.appendChild(boton);

        // Añadir el bloque de noticias al contenedor
        contenedorNoticias.appendChild(bloqueNoticia);
    });
}