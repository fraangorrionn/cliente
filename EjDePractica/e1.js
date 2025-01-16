
//USANDO OCULTAR Y MOSTRAR Y COOKIE
/*window.addEventListener('load', inicializar);

function inicializar(){
    let viajes = [{"clase_pais":"usa","ciudad_h2":"NewYork,NY","detalle_precio_total":"1,899","detalle_num_noches":7,"precio_noche":275,"ruta_imagen":"./photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
                  {"clase_pais":"paris","ciudad_h2":"Paris,Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
                  {"clase_pais":"uk","ciudad_h2":"Londres,UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}]
    
    let botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        let lista = document.getElementById('lista-viajes');
        if (!lista) {
            mostrarViajes(viajes);
            botonMostrar.textContent = 'OCULTAR VIAJES';
        } else {
            if (lista.style.display === 'none') {
                lista.style.display = 'block';
                botonMostrar.textContent = 'OCULTAR VIAJES';
            } else {
                lista.style.display = 'none';
                botonMostrar.textContent = 'MOSTRAR VIAJES';
            }
        }
    });
}

function mostrarViajes(viajes){
    let lista = document.createElement('ul');
    lista.id = 'lista-viajes';

    viajes.forEach(viaje => {
        let elementoLista = document.createElement('li');
        elementoLista.setAttribute('data-clase-pais', viaje.clase_pais);

        let ciudad = document.createElement('h2');
        ciudad.textContent = viaje.ciudad_h2;
        elementoLista.appendChild(ciudad);

        let detalle = document.createElement('span');
        detalle.setAttribute('data-detalle', viaje.detalle);
        detalle.textContent = `${viaje.detalle_precio_total} por ${viaje.detalle_num_noches} noche`
        elementoLista.appendChild(detalle);

        let botonReserva = document.createElement('button');
        botonReserva.setAttribute('data-reserva', 'true');
        botonReserva.textContent = 'Reservar';
        botonReserva.addEventListener('click', ()=> mostrarFormularioReserva(viaje.ciudad_h2));
        elementoLista.appendChild(botonReserva);

        let fotos = document.createElement('ul');
        fotos.setAttribute('data-fotos', 'true');

        let imagenElementoLista = document.createElement('li');
        let imagen = document.createElement('img');
        imagen.src = viaje.ruta_imagen;
        imagen.alt = viaje.pie_imagen;
        imagenElementoLista.appendChild(imagen);
        fotos.appendChild(imagenElementoLista);

        let pieImagenElementoLista = document.createElement('li');
        let pieImagen = document.createElement('span');
        pieImagen.textContent = viaje.pie_imagen;
        pieImagenElementoLista.appendChild(pieImagen);
        fotos.appendChild(pieImagenElementoLista);

        imagen.addEventListener('mousemove', ()=>{
            imagen.style.color = 'green';
            imagen.style.fontWeight = 'bold';
            imagen.style.textDecoration = 'underline';
        });

        imagen.addEventListener('mouseout', ()=>{
            imagen.style.color = '';
            imagen.style.fontWeight = '';
            imagen.style.textDecoration = '';
        });

        pieImagen.addEventListener('mousemove', ()=>{
            pieImagen.style.color = 'green';
            pieImagen.style.fontWeight = 'bold';
            pieImagen.style.textDecoration = 'underline';
        });

        pieImagen.addEventListener('mouseout', ()=>{
            pieImagen.style.color = '';
            pieImagen.style.fontWeight = '';
            pieImagen.style.textDecoration = '';
        });

        elementoLista.appendChild(fotos);
        lista.appendChild(elementoLista);

    });

    document.body.appendChild(lista);
}

function mostrarFormularioReserva(ciudad){
    let formulario = document.createElement('div');
    formulario_id = 'formulario-reserva';

    let etiqueta = document.createElement('label');
    etiqueta.textContent = `introduce tu nombre para reservar en ${ciudad}: `;
    formulario.appendChild(etiqueta);

    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'nombre-usuario';
    formulario.appendChild(input);

    let botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'aceptar';
    botonAceptar.addEventListener('click', ()=> {
        let nombre = input.value.trim();
        if(nombre){
            document.cookie = `usuarioReserva = ${nombre}; path=/; max-age=31536000`;
            alert(`Gracias, ${nombre}, tu reserva para ${ciudad} ha sido registrada.`);
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);

}
function leerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === nombre) {
            return value;
        }
    }
    return null;
}*/

//USANDO COOKIE Y REMOVE
/*window.addEventListener('load', inicializar);

function inicializar() {
    const viajes = [
        {"clase_pais":"usa","ciudad_h2":"New York, NY","detalle_precio_total":"1,899","detalle_num_noches":7,"precio_noche":275,"ruta_imagen":"./photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
        {"clase_pais":"paris","ciudad_h2":"Paris, Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
        {"clase_pais":"uk","ciudad_h2":"Londres, UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}
    ];

    const botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        const lista = document.getElementById('lista-viajes');
        if (!lista) {
            mostrarViajes(viajes);
            botonMostrar.textContent = 'OCULTAR VIAJES';
        } else {
            lista.remove(); // Elimina la lista del DOM
            botonMostrar.textContent = 'MOSTRAR VIAJES';
        }
    });

    // Mostrar mensaje de bienvenida si hay un usuario almacenado
    const usuarioGuardado = leerCookie('usuarioReserva');
    if (usuarioGuardado) {
        const mensajeBienvenida = document.createElement('p');
        mensajeBienvenida.textContent = `Bienvenido de nuevo, ${usuarioGuardado}.`;
        mensajeBienvenida.style.fontWeight = 'bold';
        mensajeBienvenida.style.color = 'green';
        document.body.insertBefore(mensajeBienvenida, botonMostrar);
    }
}

function mostrarViajes(viajes) {
    const lista = document.createElement('ul');
    lista.id = 'lista-viajes';

    viajes.forEach(viaje => {
        const elementoLista = document.createElement('li');

        const ciudad = document.createElement('h2');
        ciudad.textContent = viaje.ciudad_h2;
        elementoLista.appendChild(ciudad);

        const detalle = document.createElement('span');
        detalle.textContent = `${viaje.detalle_precio_total}€ por ${viaje.detalle_num_noches} noches`;
        elementoLista.appendChild(detalle);

        const botonReserva = document.createElement('button');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(viaje.ciudad_h2));
        elementoLista.appendChild(botonReserva);

        const fotos = document.createElement('ul');

        const fotoElemento = document.createElement('li');
        const imagen = document.createElement('img');
        imagen.src = viaje.ruta_imagen;
        imagen.alt = viaje.pie_imagen;

        const pieImagen = document.createElement('span');
        pieImagen.textContent = viaje.pie_imagen;

        fotoElemento.appendChild(imagen);
        fotoElemento.appendChild(pieImagen);
        fotos.appendChild(fotoElemento);
        elementoLista.appendChild(fotos);

        // Eventos para destacar el detalle
        [imagen, pieImagen].forEach(elemento => {
            elemento.addEventListener('mouseover', () => {
                detalle.style.color = 'green';
                detalle.style.fontWeight = 'bold';
                detalle.style.textDecoration = 'underline';
            });
            elemento.addEventListener('mouseout', () => {
                detalle.style.color = '';
                detalle.style.fontWeight = '';
                detalle.style.textDecoration = '';
            });
        });

        lista.appendChild(elementoLista);
    });

    document.body.appendChild(lista);
}

function mostrarFormularioReserva(ciudad) {
    if (document.getElementById('formulario-reserva')) return;

    const formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    const etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar en ${ciudad}: `;
    formulario.appendChild(etiqueta);

    const input = document.createElement('input');
    input.type = 'text';
    formulario.appendChild(input);

    const botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        const nombre = input.value.trim();/*input.value: Devuelve el valor actual del campo de entrada, incluyendo cualquier espacio en blanco que el usuario haya introducido.
        .trim(): Elimina los espacios al inicio y al final de la cadena, pero no elimina los espacios en medio del texto.
        if (nombre) {
            document.cookie = `usuarioReserva=${nombre}; path=/; max-age=31536000`;
            alert(`Gracias, ${nombre}, tu reserva para ${ciudad} ha sido registrada.`);
            formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);
}

function leerCookie(nombre) {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        const [key, value] = cookie.split('=');
        if (key === nombre) {
            return value;
        }
    }
    return null;
}*/


//USANDO LOCALSTORAGE
window.addEventListener('load', inicializar);

function inicializar() {
    const viajes = [
        {"clase_pais":"usa","ciudad_h2":"New York, NY","detalle_precio_total":"1,899","detalle_num_noches":7,"precio_noche":275,"ruta_imagen":"./photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
        {"clase_pais":"paris","ciudad_h2":"Paris, Francia","detalle_precio_total":"1,499","detalle_num_noches":5,"precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
        {"clase_pais":"uk","ciudad_h2":"Londres, UK","detalle_precio_total":"2,199","detalle_num_noches":5,"precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}
    ];

    const botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        const lista = document.getElementById('lista-viajes');
        if (!lista) {
            mostrarViajes(viajes);
            botonMostrar.textContent = 'OCULTAR VIAJES';
        } else {
            lista.remove(); // Elimina la lista del DOM
            botonMostrar.textContent = 'MOSTRAR VIAJES';
        }
    });

    // Mostrar mensaje de bienvenida si hay un usuario almacenado
    const usuarioGuardado = localStorage.getItem('usuarioReserva');
    if (usuarioGuardado) {
        const mensajeBienvenida = document.createElement('p');
        mensajeBienvenida.textContent = `Bienvenido de nuevo, ${usuarioGuardado}.`;
        mensajeBienvenida.style.fontWeight = 'bold';
        mensajeBienvenida.style.color = 'green';
        document.body.insertBefore(mensajeBienvenida, botonMostrar);
    }
}

function mostrarViajes(viajes) {
    const lista = document.createElement('ul');
    lista.id = 'lista-viajes';

    viajes.forEach(viaje => {
        const elementoLista = document.createElement('li');

        const ciudad = document.createElement('h2');
        ciudad.textContent = viaje.ciudad_h2;
        elementoLista.appendChild(ciudad);

        const detalle = document.createElement('span');
        detalle.textContent = `${viaje.detalle_precio_total}€ por ${viaje.detalle_num_noches} noches`;
        elementoLista.appendChild(detalle);

        const botonReserva = document.createElement('button');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(viaje.ciudad_h2));
        elementoLista.appendChild(botonReserva);

        const fotos = document.createElement('ul');

        const fotoElemento = document.createElement('li');
        const imagen = document.createElement('img');
        imagen.src = viaje.ruta_imagen;
        imagen.alt = viaje.pie_imagen;

        const pieImagen = document.createElement('span');
        pieImagen.textContent = viaje.pie_imagen;

        fotoElemento.appendChild(imagen);
        fotoElemento.appendChild(pieImagen);
        fotos.appendChild(fotoElemento);
        elementoLista.appendChild(fotos);

        // Eventos para destacar el detalle
        [imagen, pieImagen].forEach(elemento => {
            elemento.addEventListener('mouseover', () => {
                detalle.style.color = 'green';
                detalle.style.fontWeight = 'bold';
                detalle.style.textDecoration = 'underline';
            });
            elemento.addEventListener('mouseout', () => {
                detalle.style.color = '';
                detalle.style.fontWeight = '';
                detalle.style.textDecoration = '';
            });
        });

        lista.appendChild(elementoLista);
    });

    document.body.appendChild(lista);
}

function mostrarFormularioReserva(ciudad) {
    if (document.getElementById('formulario-reserva')) return;

    const formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    const etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar en ${ciudad}: `;
    formulario.appendChild(etiqueta);

    const input = document.createElement('input');
    input.type = 'text';
    formulario.appendChild(input);

    const botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        const nombre = input.value.trim();
        if (nombre) {
            localStorage.setItem('usuarioReserva', nombre); // Guardar en localStorage
            alert(`Gracias, ${nombre}, tu reserva para ${ciudad} ha sido registrada.`);
            formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);
}
//USANDO OTRO JSON
/*window.addEventListener('load', inicializar);

function inicializar() {
    const libros = [
        {"genero": "fantasia", "titulo": "El Señor de los Anillos", "autor": "J.R.R. Tolkien", "precio": "29.99", "paginas": 1216, "portada": "./covers/lotr.jpg", "descripcion": "Una épica aventura en la Tierra Media."},
        {"genero": "ciencia ficción", "titulo": "Dune", "autor": "Frank Herbert", "precio": "19.99", "paginas": 896, "portada": "./covers/dune.jpg", "descripcion": "La lucha por el control del planeta Arrakis."},
        {"genero": "misterio", "titulo": "El Código Da Vinci", "autor": "Dan Brown", "precio": "14.99", "paginas": 689, "portada": "./covers/da-vinci.jpg", "descripcion": "Un thriller lleno de intriga y acertijos."}
    ];
    const botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        const lista = document.getElementById('lista-libros');
        if (!lista) {
            mostrarLibros(libros);
            botonMostrar.textContent = 'OCULTAR LIBROS';
        } else {
            lista.remove(); // Elimina la lista del DOM
            botonMostrar.textContent = 'MOSTRAR LIBROS';
        }
    });

    // Mostrar mensaje de bienvenida si hay un usuario almacenado
    const usuarioGuardado = localStorage.getItem('usuarioReserva');
    if (usuarioGuardado) {
        const mensajeBienvenida = document.createElement('p');
        mensajeBienvenida.textContent = `Bienvenido de nuevo, ${usuarioGuardado}.`;
        mensajeBienvenida.style.fontWeight = 'bold';
        mensajeBienvenida.style.color = 'green';
        document.body.insertBefore(mensajeBienvenida, botonMostrar);
    }
}

function mostrarLibros(libros) {
    const lista = document.createElement('ul');
    lista.id = 'lista-libros';

    libros.forEach(libro => {
        const elementoLista = document.createElement('li');

        const titulo = document.createElement('h2');
        titulo.textContent = libro.titulo;
        elementoLista.appendChild(titulo);

        const autor = document.createElement('p');
        autor.textContent = `Autor: ${libro.autor}`;
        elementoLista.appendChild(autor);

        const detalle = document.createElement('span');
        detalle.textContent = `Precio: ${libro.precio}€ | Páginas: ${libro.paginas}`;
        elementoLista.appendChild(detalle);

        const descripcion = document.createElement('p');
        descripcion.textContent = libro.descripcion;
        elementoLista.appendChild(descripcion);

        const botonReserva = document.createElement('button');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(libro.titulo));
        elementoLista.appendChild(botonReserva);

        const fotos = document.createElement('div');

        const imagen = document.createElement('img');
        imagen.src = libro.portada;
        imagen.alt = `Portada de ${libro.titulo}`;
        fotos.appendChild(imagen);

        elementoLista.appendChild(fotos);

        // Eventos para destacar el detalle
        [imagen, titulo].forEach(elemento => {
            elemento.addEventListener('mouseover', () => {
                detalle.style.color = 'blue';
                detalle.style.fontWeight = 'bold';
                detalle.style.textDecoration = 'underline';
            });
            elemento.addEventListener('mouseout', () => {
                detalle.style.color = '';
                detalle.style.fontWeight = '';
                detalle.style.textDecoration = '';
            });
        });

        lista.appendChild(elementoLista);
    });

    document.body.appendChild(lista);
}

function mostrarFormularioReserva(titulo) {
    if (document.getElementById('formulario-reserva')) return;

    const formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    const etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar "${titulo}": `;
    formulario.appendChild(etiqueta);

    const input = document.createElement('input');
    input.type = 'text';
    formulario.appendChild(input);

    const botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        const nombre = input.value.trim();
        if (nombre) {
            localStorage.setItem('usuarioReserva', nombre); // Guardar en localStorage
            alert(`Gracias, ${nombre}, tu reserva para "${titulo}" ha sido registrada.`);
            formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);
}*/
