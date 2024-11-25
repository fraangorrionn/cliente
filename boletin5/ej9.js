/*Añadir un botón de reseteo de formulario con confirmación antes de borrar. */
window.addEventListener('load', inicializar, false);
/*Usar JS para validar el formulario de la figura y evitar el envío hasta que esté correcto. */
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
            errorMensaje.textContent = "todos los campos son obligatorios";
            event.preventDefault();
            return;
        }

        if (movil.length !== 9) {
            errorMensaje.textContent = "wl movil debe tener exactamente 9 dígitos";
            event.preventDefault();
            return;
        }

        if (contraseña !== confirmarContraseña) {
            errorMensaje.textContent = "las contraseñas no coinciden";
            event.preventDefault();
            return;
        }

        if (!correo.includes('@') || !correo.includes('.')) {
            errorMensaje.textContent = "3l correo debe tener un formato valido";
            event.preventDefault();
            return;
        }

        alert("formulario enviado correctamente");

    });
    /*Añadir un botón de reseteo de formulario con confirmación antes de borrar. */
    formulario.addEventListener('reset', function (event){
        var confirmacion = confirm("quieres resetea?");
        if(!confirmacion){
            event.preventDefault();
            alert("reseteo cancelado");
        }else{
            alert("formulario reseteado");
        }

    });
}