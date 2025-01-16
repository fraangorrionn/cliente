window.addEventListener('load', inicializar);

function inicializar() {
    const restaurantes = [
        {
            "nombre": "La Bella Italia",
            "ubicacion": "Roma, Italia",
            "especialidad": "Pasta y Pizza",
            "precio_promedio": "25",
            "plato_destacado": "Lasagna Tradicional",
            "imagen": "./images/bella-italia.jpg",
            "descripcion": "Auténtica cocina italiana en el corazón de Roma."
        },
        {
            "nombre": "Sushi World",
            "ubicacion": "Tokio, Japón",
            "especialidad": "Sushi y Sashimi",
            "precio_promedio": "50",
            "plato_destacado": "Sashimi de Atún",
            "imagen": "./images/sushi-world.jpg",
            "descripcion": "Delicias japonesas frescas preparadas al momento."
        },
        {
            "nombre": "Le Gourmet Français",
            "ubicacion": "París, Francia",
            "especialidad": "Alta cocina francesa",
            "precio_promedio": "100",
            "plato_destacado": "Foie Gras con reducción de vino",
            "imagen": "./images/le-gourmet.jpg",
            "descripcion": "Experiencia gourmet en el corazón de París."
        }
    ];
    const botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        const lista = document.getElementById('lista-restaurantes');
        if (!lista) {
            mostrarRestaurantes(restaurantes);
            botonMostrar.textContent = 'OCULTAR RESTAURANTES';
        } else {
            lista.remove(); // Elimina la lista del DOM
            botonMostrar.textContent = 'MOSTRAR RESTAURANTES';
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

function mostrarRestaurantes(restaurantes) {
    const lista = document.createElement('ul');
    lista.id = 'lista-restaurantes';

    restaurantes.forEach(restaurante => {
        const elementoLista = document.createElement('li');

        const nombre = document.createElement('h2');
        nombre.textContent = restaurante.nombre;
        elementoLista.appendChild(nombre);

        const ubicacion = document.createElement('p');
        ubicacion.textContent = `Ubicación: ${restaurante.ubicacion}`;
        elementoLista.appendChild(ubicacion);

        const especialidad = document.createElement('p');
        especialidad.textContent = `Especialidad: ${restaurante.especialidad}`;
        elementoLista.appendChild(especialidad);

        const detalle = document.createElement('span');
        detalle.textContent = `Precio promedio: ${restaurante.precio_promedio}€ | Plato destacado: ${restaurante.plato_destacado}`;
        elementoLista.appendChild(detalle);

        const descripcion = document.createElement('p');
        descripcion.textContent = restaurante.descripcion;
        elementoLista.appendChild(descripcion);

        const botonReserva = document.createElement('button');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(restaurante.nombre));
        elementoLista.appendChild(botonReserva);

        const fotos = document.createElement('div');

        const imagen = document.createElement('img');
        imagen.src = restaurante.imagen;
        imagen.alt = `Imagen de ${restaurante.nombre}`;
        fotos.appendChild(imagen);

        elementoLista.appendChild(fotos);

        // Eventos para destacar el detalle
        [imagen, nombre].forEach(elemento => {
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

function mostrarFormularioReserva(nombre) {
    if (document.getElementById('formulario-reserva')) return;

    const formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    const etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar en "${nombre}": `;
    formulario.appendChild(etiqueta);

    const input = document.createElement('input');
    input.type = 'text';
    formulario.appendChild(input);

    const botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        const usuario = input.value.trim();
        if (usuario) {
            localStorage.setItem('usuarioReserva', usuario); // Guardar en localStorage
            alert(`Gracias, ${usuario}, tu reserva para "${nombre}" ha sido registrada.`);
            formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);
}