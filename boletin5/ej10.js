/*Usar   el   evento   de   entrada   de   teclado   para   validar   on­the­fly   (sobre   la   marcha)   en   los campos de textos del formulario de la figura. */

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
        { id: 'nombre', tipo: 'text', label: 'Nombre', placeholder: 'Ingresa tu nombre', regex: /^[a-zA-Z\s]+$/ },
        { id: 'apellidos', tipo: 'text', label: 'Apellidos', placeholder: 'Ingresa tus apellidos', regex: /^[a-zA-Z\s]+$/ },
        { id: 'usuario', tipo: 'text', label: 'Usuario', placeholder: 'Ingresa tu nombre de usuario', regex: /^\w+$/ },
        { id: 'correo', tipo: 'email', label: 'Correo Electrónico', placeholder: 'Ingresa tu correo electrónico', regex: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ },
        { id: 'movil', tipo: 'number', label: 'Móvil', placeholder: 'Ingresa tu número de móvil', regex: /^\d{0,9}$/ },
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

        const errorSpan = document.createElement('span');
        errorSpan.id = `${campo.id}-error`;
        errorSpan.className = 'error';
        errorSpan.style.fontSize = '0.8em';

        formulario.appendChild(label);
        formulario.appendChild(input);
        formulario.appendChild(errorSpan);

        // Validar entrada sobre la marcha
        input.addEventListener('input', () => {
            const valor = input.value.trim();
            if (!campo.regex.test(valor)) {
                errorSpan.textContent = `El campo "${campo.label}" no tiene un formato válido.`;
            } else {
                errorSpan.textContent = '';
            }
        });
    });

    // Campos adicionales para contraseñas
    const contraseñaLabel = document.createElement('label');
    contraseñaLabel.textContent = 'Contraseña';
    const contraseñaInput = document.createElement('input');
    contraseñaInput.type = 'password';
    contraseñaInput.id = 'contraseña';
    contraseñaInput.placeholder = 'Ingresa tu contraseña';

    const confirmarContraseñaLabel = document.createElement('label');
    confirmarContraseñaLabel.textContent = 'Confirmar Contraseña';
    const confirmarContraseñaInput = document.createElement('input');
    confirmarContraseñaInput.type = 'password';
    confirmarContraseñaInput.id = 'confirmar_contraseña';
    confirmarContraseñaInput.placeholder = 'Repite tu contraseña';

    formulario.appendChild(contraseñaLabel);
    formulario.appendChild(contraseñaInput);
    formulario.appendChild(confirmarContraseñaLabel);
    formulario.appendChild(confirmarContraseñaInput);

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

        const contraseña = document.getElementById('contraseña').value;
        const confirmarContraseña = document.getElementById('confirmar_contraseña').value;

        // Validar contraseñas
        if (contraseña !== confirmarContraseña) {
            errorMensaje.textContent = 'Las contraseñas no coinciden.';
            event.preventDefault();
            return;
        }

        // Validar que no haya errores visibles
        const errores = document.querySelectorAll('.error');
        const erroresActivos = Array.from(errores).filter((error) => error.textContent !== '');
        if (erroresActivos.length > 0) {
            errorMensaje.textContent = 'Corrige los errores antes de enviar el formulario.';
            event.preventDefault();
            return;
        }

        alert('Formulario enviado correctamente.');
    });

    // Confirmación antes de resetear el formulario
    resetButton.addEventListener('click', function (event) {
        const confirmacion = confirm('¿Estás seguro de que deseas borrar todos los datos del formulario?');
        if (!confirmacion) {
            event.preventDefault(); // Si el usuario cancela, se detiene el reseteo
        }
    });
}
