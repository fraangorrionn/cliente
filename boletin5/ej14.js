/*Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   con   diferentes tipos   de
cafés   ­   espresso,   cappuccino,   moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación
y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar   el   café   a   su   número   de   habitación.
Cree   las   cookie   para   recordar   las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la   página,
en introduzca su nombre de usuario y habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, se le dirá que hay una 
tarifa especial y su próximo café será gratuito. */

window.addEventListener('load', inicializar, false);

function inicializar() {
    // Crear contenedor del formulario
    const formContainer = document.createElement('div');
    formContainer.className = 'form-container';

    // Crear formulario
    const formulario = document.createElement('form');
    formulario.id = 'formCafes';

    // Crear campo de nombre
    formulario.appendChild(crearCampo('Nombre', 'name', 'text', 'Ingresa tu nombre'));

    // Crear campo de número de habitación
    formulario.appendChild(crearCampo('Número de Habitación', 'room', 'number', 'Ingresa tu número de habitación'));

    // Crear grupo de selección de cafés
    const cafes = ['Espresso', 'Cappuccino', 'Moka', 'Latte', 'Americano'];
    const grupoCafes = document.createElement('div');
    grupoCafes.className = 'form-group';
    const labelCafes = document.createElement('label');
    labelCafes.textContent = 'Selecciona tu tipo de café:';
    grupoCafes.appendChild(labelCafes);

    cafes.forEach((cafe) => {
        const cafeCheckbox = document.createElement('input');
        cafeCheckbox.type = 'checkbox';
        cafeCheckbox.id = cafe.toLowerCase();
        cafeCheckbox.name = 'coffee';
        cafeCheckbox.value = cafe;

        const cafeLabel = document.createElement('label');
        cafeLabel.setAttribute('for', cafe.toLowerCase());
        cafeLabel.textContent = cafe;

        grupoCafes.appendChild(cafeCheckbox);
        grupoCafes.appendChild(cafeLabel);
        grupoCafes.appendChild(document.createElement('br'));
    });
    formulario.appendChild(grupoCafes);

    // Botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.id = 'enviar';
    botonEnviar.type = 'button';
    botonEnviar.textContent = 'Enviar';
    formulario.appendChild(botonEnviar);

    // Añadir formulario al contenedor y al body
    formContainer.appendChild(formulario);
    document.body.appendChild(formContainer);

    // Eventos
    botonEnviar.addEventListener('click', recogerDatos);

    // Mostrar preferencias guardadas
    mostrarPreferenciasGuardadas();
}

// Función para crear un campo de entrada
function crearCampo(labelText, inputId, inputType, placeholder) {
    const grupo = document.createElement('div');
    grupo.className = 'form-group';

    const label = document.createElement('label');
    label.textContent = labelText;
    label.setAttribute('for', inputId);

    const input = document.createElement('input');
    input.type = inputType;
    input.id = inputId;
    input.placeholder = placeholder;

    grupo.appendChild(label);
    grupo.appendChild(input);

    return grupo;
}

// Función para manejar el envío del formulario
function recogerDatos(event) {
    event.preventDefault();

    const nombre = document.getElementById('name').value.trim();
    const numero_habitacion = document.getElementById('room').value.trim();

    const cafes = document.getElementsByName('coffee');
    const seleccionados = [];
    cafes.forEach((cafe) => {
        if (cafe.checked) {
            seleccionados.push(cafe.value);
        }
    });

    if (nombre && numero_habitacion && seleccionados.length > 0) {
        document.cookie = `nombre=${nombre}; path=/; max-age=31536000`; // 1 año
        document.cookie = `numero_habitacion=${numero_habitacion}; path=/; max-age=31536000`; // 1 año
        document.cookie = `cafe_favorito=${seleccionados.join(',')}; path=/; max-age=31536000`; // 1 año

        let conteoPedidos = parseInt(getCookie('conteo_pedidos')) || 0;
        conteoPedidos++;
        document.cookie = `conteo_pedidos=${conteoPedidos}; path=/; max-age=31536000`; // 1 año

        if (conteoPedidos % 4 === 0) {
            alert("¡Felicidades! Este es tu cuarto café, tu próximo café será gratuito.");
        } else {
            alert(`Pedido realizado. Este es tu pedido número ${conteoPedidos}.`);
        }
    } else {
        alert("Por favor, completa todos los campos antes de guardar.");
    }
}

// Función para mostrar preferencias guardadas
function mostrarPreferenciasGuardadas() {
    const nombre = getCookie('nombre');
    const numero_habitacion = getCookie('numero_habitacion');
    const cafeFavorito = getCookie('cafe_favorito');

    if (nombre && numero_habitacion && cafeFavorito) {
        document.getElementById('name').value = nombre;
        document.getElementById('room').value = numero_habitacion;

        const cafes = cafeFavorito.split(',');
        cafes.forEach((cafe) => {
            const checkbox = document.getElementById(cafe.toLowerCase());
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        alert(`Bienvenido ${nombre}, tu café favorito es: ${cafeFavorito}`);
    }
}

// Función para obtener cookies
function getCookie(nombre) {
    const name = nombre + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

