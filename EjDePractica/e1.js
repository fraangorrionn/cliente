/*
window.addEventListener('load', inicializar);

function inicializar() {
    let viajes = [
        {"clase_pais": "usa", "ciudad_h2": "New York, NY", "detalle_precio_total": "1,899", "detalle_num_noches": 7, "precio_noche": 275, "ruta_imagen": "./photos/newyork.jpg", "pie_imagen": "Puente Brooklyn"},
        {"clase_pais": "paris", "ciudad_h2": "Paris, Francia", "detalle_precio_total": "1,499", "detalle_num_noches": 5, "precio_noche": 300, "ruta_imagen": "./photos/paris.jpg", "pie_imagen": "Notre Dame de Paris"},
        {"clase_pais": "uk", "ciudad_h2": "Londres, UK", "detalle_precio_total": "2,199", "detalle_num_noches": 5, "precio_noche": 440, "ruta_imagen": "./photos/london.jpg", "pie_imagen": "Torre de Londres"}
    ];

    let botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        if (botonMostrar.textContent === 'MOSTRAR VIAJES') {
            mostrarViajes(viajes);
            botonMostrar.textContent = 'OCULTAR VIAJES';
        } else {
            ocultarViajes();
            botonMostrar.textContent = 'MOSTRAR VIAJES';
        }
    });
}

function mostrarViajes(viajes) {
    let lista = document.createElement('ul');
    lista.id = 'lista-viajes';

    viajes.forEach(viaje => {
        let item = document.createElement('li');
        item.setAttribute('data-clase-pais', viaje.clase_pais);

        let ciudad = document.createElement('h2');
        ciudad.textContent = viaje.ciudad_h2;

        let detalle = document.createElement('span');
        detalle.setAttribute('data-detalle', 'true');
        detalle.textContent = `${viaje.detalle_precio_total}€ por ${viaje.detalle_num_noches} noches`;

        let botonReserva = document.createElement('button');
        botonReserva.setAttribute('data-reserva', 'true');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(viaje.ciudad_h2));

        let fotos = document.createElement('ul');
        fotos.setAttribute('data-fotos', 'true');

        let fotoItem = document.createElement('li');

        let imagen = document.createElement('img');
        imagen.src = viaje.ruta_imagen;
        imagen.alt = viaje.pie_imagen;

        let pieImagen = document.createElement('span');
        pieImagen.textContent = viaje.pie_imagen;

        fotoItem.appendChild(imagen);
        fotoItem.appendChild(pieImagen);
        fotos.appendChild(fotoItem);

        item.appendChild(ciudad);
        item.appendChild(detalle);
        item.appendChild(botonReserva);
        item.appendChild(fotos);

        lista.appendChild(item);
    });

    document.body.appendChild(lista);
}

function ocultarViajes() {
    let lista = document.getElementById('lista-viajes');
    if (lista) {
        lista.remove();
    }
}

function mostrarFormularioReserva(ciudad) {
    let formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    let etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar en ${ciudad}: `;

    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'nombre-usuario';

    let botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        let nombre = input.value.trim();
        if (nombre) {
            localStorage.setItem('usuarioReserva', nombre);
            alert(`Gracias, ${nombre}, tu reserva para ${ciudad} ha sido registrada.`);
            //formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });

    formulario.appendChild(etiqueta);
    formulario.appendChild(input);
    formulario.appendChild(botonAceptar);

    document.body.appendChild(formulario);
}
*/

window.addEventListener('load', inicializar);

function inicializar() {
    let viajes = [
        {"clase_pais": "usa", "ciudad_h2": "New York, NY", "detalle_precio_total": "1,899", "detalle_num_noches": 7, "precio_noche": 275, "ruta_imagen": "./photos/newyork.jpg", "pie_imagen": "Puente Brooklyn"},
        {"clase_pais": "paris", "ciudad_h2": "Paris, Francia", "detalle_precio_total": "1,499", "detalle_num_noches": 5, "precio_noche": 300, "ruta_imagen": "./photos/paris.jpg", "pie_imagen": "Notre Dame de Paris"},
        {"clase_pais": "uk", "ciudad_h2": "Londres, UK", "detalle_precio_total": "2,199", "detalle_num_noches": 5, "precio_noche": 440, "ruta_imagen": "./photos/london.jpg", "pie_imagen": "Torre de Londres"}
    ];

    let botonMostrar = document.getElementById('mostrar');

    botonMostrar.addEventListener('click', () => {
        if (botonMostrar.textContent === 'MOSTRAR VIAJES') {
            mostrarViajes(viajes);
            botonMostrar.textContent = 'OCULTAR VIAJES';
        } else {
            ocultarViajes();
            botonMostrar.textContent = 'MOSTRAR VIAJES';
        }
    });
}

function mostrarViajes(viajes) {
    let lista = document.createElement('ul');
    lista.id = 'lista-viajes';

    viajes.forEach(viaje => {
        let item = document.createElement('li');
        item.setAttribute('data-clase-pais', viaje.clase_pais);

        let ciudad = document.createElement('h2');
        ciudad.textContent = viaje.ciudad_h2;

        let detalle = document.createElement('span');
        detalle.setAttribute('data-detalle', 'true');
        detalle.textContent = `${viaje.detalle_precio_total}€ por ${viaje.detalle_num_noches} noches`;

        let botonReserva = document.createElement('button');
        botonReserva.setAttribute('data-reserva', 'true');
        botonReserva.textContent = 'Resérvalo ya!';
        botonReserva.addEventListener('click', () => mostrarFormularioReserva(viaje.ciudad_h2));

        let fotos = document.createElement('ul');
        fotos.setAttribute('data-fotos', 'true');

        let fotoItem = document.createElement('li');

        let imagen = document.createElement('img');
        imagen.src = viaje.ruta_imagen;
        imagen.alt = viaje.pie_imagen;

        let pieImagen = document.createElement('span');
        pieImagen.textContent = viaje.pie_imagen;

        fotoItem.appendChild(imagen);
        fotoItem.appendChild(pieImagen);
        fotos.appendChild(fotoItem);

        item.appendChild(ciudad);
        item.appendChild(detalle);
        item.appendChild(botonReserva);
        item.appendChild(fotos);

        lista.appendChild(item);
    });

    document.body.appendChild(lista);
}

function ocultarViajes() {
    let lista = document.getElementById('lista-viajes');
    if (lista) {
        lista.remove();
    }
}

function mostrarFormularioReserva(ciudad) {
    let formulario = document.createElement('div');
    formulario.id = 'formulario-reserva';

    let etiqueta = document.createElement('label');
    etiqueta.textContent = `Introduce tu nombre para reservar en ${ciudad}: `;

    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'nombre-usuario';

    let botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.addEventListener('click', () => {
        let nombre = input.value.trim();
        if (nombre) {
            // Guardar el nombre en una cookie
            document.cookie = `usuarioReserva=${nombre}; path=/; max-age=31536000`;
            alert(`Gracias, ${nombre}, tu reserva para ${ciudad} ha sido registrada.`);
            //formulario.remove();
        } else {
            alert('Por favor, rellena el campo de nombre.');
        }
    });

    formulario.appendChild(etiqueta);
    formulario.appendChild(input);
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
}

// Leer y mostrar la cookie almacenada (para pruebas)
const usuarioGuardado = leerCookie('usuarioReserva');
if (usuarioGuardado) {
    alert(`El usuario almacenado es: ${usuarioGuardado}`);
}