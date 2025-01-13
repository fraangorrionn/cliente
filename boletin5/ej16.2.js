window.addEventListener('load', inicializar, false);

function inicializar() {
    // Recuperar dirección de envío desde localStorage
    const direccionGuardada = localStorage.getItem('direccion_envio');
    const campoDireccion = document.getElementById('direccion');

    // Si hay una dirección guardada, rellenar el campo
    if (direccionGuardada && campoDireccion) {
        campoDireccion.value = direccionGuardada;
    }

    // Manejar el envío del formulario
    const formulario = document.getElementById('form-direccion');
    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

            const nuevaDireccion = campoDireccion.value.trim();
            if (nuevaDireccion) {
                // Guardar la dirección en localStorage
                localStorage.setItem('direccion_envio', nuevaDireccion);
                alert('¡Dirección guardada exitosamente!');
            } else {
                alert('Por favor, introduce una dirección válida.');
            }
        });
    }
}
