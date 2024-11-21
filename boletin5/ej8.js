/*Usar JS para validar el formulario de la figura y evitar el envío hasta que esté correcto. */
window.addEventListener('load', inicializar, false);

function inicializar() {
    var formulario = document.getElementById('registroForm');
    var errorMensaje = document.getElementById('errorMensaje');

    formulario.addEventListener('submit', function (event) {
        errorMensaje.textContent = "";

        var nombre = document.getElementById('nombre').value.trim();
        var apellidos = document.getElementById('apellidos').value.trim();
        var usuario = document.getElementById('usuario').value.trim();
        var contraseña = document.getElementById('contraseña').value;
        var confirmarContraseña = document.getElementById('confirmar_contraseña').value;
        var correo = document.getElementById('correo').value.trim();
        var movil = document.getElementById('movil').value.trim();

        if (!nombre || !apellidos || !usuario || !contraseña || !confirmarContraseña || !correo || !movil) {
            errorMensaje.textContent = "Todos los campos son obligatorios.";
            event.preventDefault();
            return;
        }

        if (movil.length !== 9) {
            errorMensaje.textContent = "El móvil debe tener exactamente 9 dígitos.";
            event.preventDefault();
            return;
        }

        if (contraseña !== confirmarContraseña) {
            errorMensaje.textContent = "Las contraseñas no coinciden.";
            event.preventDefault();
            return;
        }

        if (!correo.includes('@') || !correo.includes('.')) {
            errorMensaje.textContent = "El correo debe tener un formato válido.";
            event.preventDefault();
            return;
        }

        alert("Formulario enviado correctamente.");
    });
}