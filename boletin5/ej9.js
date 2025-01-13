/*Añadir un botón de reseteo de formulario con confirmación antes de borrar. */
window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el formulario
    const formulario = document.createElement('form');
    formulario.id = 'registroForm';

    // Crear contenedor de errores
    const errorMensaje = document.createElement('div');
    errorMensaje.id = 'errorMensaje';
    errorMensaje.className = 'error';

    // Campos del formulario
    const campos = [
        { id: 'nombre', tipo: 'text', label: 'Nombre', placeholder: 'Ingresa tu nombre' },
        { id: 'apellidos', tipo: 'text', label: 'Apellidos', placeholder: 'Ingresa tus apellidos' },
        { id: 'usuario', tipo: 'text', label: 'Usuario', placeholder: 'Ingresa tu nombre de usuario' },
        { id: 'contraseña', tipo: 'password', label: 'Contraseña', placeholder: 'Ingresa tu contraseña' },
        { id: 'confirmar_contraseña', tipo: 'password', label: 'Confirmar Contraseña', placeholder: 'Repite tu contraseña' },
        { id: 'correo', tipo: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo electrónico' },
        { id: 'movil', tipo: 'number', label: 'Móvil', placeholder: 'Ingresa tu número de móvil' },
    ];

    // Crear los campos del formulario
    campos.forEach((campo) => {
        const label = document.createElement('label');
        label.setAttribute('for', campo.id);
        label.textContent = campo.label;

        const input = document.createElement('input');
        input.type = campo.tipo;
        input.id = campo.id;
        input.placeholder = campo.placeholder;

        formulario.appendChild(label);
        formulario.appendChild(input);
    });

    // Botones de enviar y resetear
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    submitButton.value = 'Enviar';

    const resetButton = document.createElement('input');
    resetButton.type = 'reset';
    resetButton.value = 'Restablecer';

    formulario.appendChild(submitButton);
    formulario.appendChild(resetButton);

    // Añadir mensaje de error y formulario al body
    document.body.appendChild(errorMensaje);
    document.body.appendChild(formulario);

    // Validar formulario al enviarlo
    formulario.addEventListener('submit', function (event) {
        errorMensaje.textContent = '';

        const nombre = document.getElementById('nombre').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const usuario = document.getElementById('usuario').value.trim();
        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmar_contraseña').value;
        const correo = document.getElementById('correo').value.trim();
        const movil = document.getElementById('movil').value.trim();

        if (!nombre || !apellidos || !usuario || !contraseña || !confirmarContraseña || !correo || !movil) {
            errorMensaje.textContent = 'Todos los campos son obligatorios.';
            event.preventDefault();
            return;
        }

        if (movil.length !== 9) {
            errorMensaje.textContent = 'El móvil debe tener exactamente 9 dígitos.';
            event.preventDefault();
            return;
        }

        if (contraseña !== confirmarContraseña) {
            errorMensaje.textContent = 'Las contraseñas no coinciden.';
            event.preventDefault();
            return;
        }

        if (!correo.includes('@') || !correo.includes('.')) {
            errorMensaje.textContent = 'El correo debe tener un formato válido.';
            event.preventDefault();
            return;
        }

        alert('Formulario enviado correctamente.');
    });

    // Confirmación antes de resetear el formulario
    resetButton.addEventListener('click', function (event) {
        const confirmacion = confirm('¿Estás seguro de que deseas borrar todos los datos del formulario?');
        if (!confirmacion) {
            event.preventDefault(); // Cancelar el reseteo si no se confirma
        }
    });
}
