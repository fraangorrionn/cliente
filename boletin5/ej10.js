window.addEventListener('load', inicializar, false);

function inicializar() {
    var formulario = document.getElementById('registroForm');
    var errorMensaje = document.getElementById('errorMensaje');

    var campos = ['nombre', 'apellidos', 'usuario', 'contraseña', 'confirmar_contraseña', 'correo', 'movil'];
    campos.forEach(campoId => {
        var campo = document.getElementById(campoId);
        campo.addEventListener('input', function () {
            validarCampo(campoId);
        });
    });

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
            errorMensaje.textContent = "Todos los campos son obligatorios";
            event.preventDefault();
            return;
        }

        if (movil.length !== 9 || isNaN(movil)) {
            errorMensaje.textContent = "El móvil debe tener exactamente 9 dígitos numéricos";
            event.preventDefault();
            return;
        }

        if (contraseña !== confirmarContraseña) {
            errorMensaje.textContent = "Las contraseñas no coinciden";
            event.preventDefault();
            return;
        }

        if (!correo.includes('@') || !correo.includes('.')) {
            errorMensaje.textContent = "El correo debe tener un formato válido";
            event.preventDefault();
            return;
        }

        alert("Formulario enviado correctamente");
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
    /*Usar   el   evento   de   entrada   de   teclado   para   validar   on­the­fly   (sobre   la   marcha)   en   los
campos de textos del formulario de la figura. */

    function validarCampo(campoId) {
        var campo = document.getElementById(campoId);
        var valor = campo.value.trim();
        var error = "";
    
        switch (campoId) {
            case 'nombre':
            case 'apellidos':
            case 'usuario':
                if (!valor) error = `${campoId} es obligatorio.`;
                break;
    
            case 'correo':
                if (!valor.includes('@') || !valor.includes('.')) {
                    error = "el correo debe tener un formato valido.";
                }
                break;
    
            case 'movil':
                if (valor.length !== 9 || isNaN(valor)) {
                    error = "el movil debe tener exactamente 9 dígitos numericos.";
                }
                break;
    
            case 'contraseña':
            case 'confirmar_contraseña':
                if (!valor) error = `${campoId} es obligatorio.`;
                break;
        }
    
        var errorSpan = document.getElementById(`error_${campoId}`);
        if (errorSpan) {
            errorSpan.textContent = error;
        }
    
        return !error;
    }

    
}