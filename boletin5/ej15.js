/*Crear   un   formulario   que   pida   la   dirección   de   envío   del   usuario.   La   próxima   vez   que   el usuario acceda
a la página, se rellenará la dirección utilizando el valor de la cookie.  */

window.addEventListener('load', inicializar, false);

function inicializar() {
    var direccionGuardada = getCookie('direccion_envio');
    var campoDireccion = document.getElementById('direccion');

    if (direccionGuardada && campoDireccion) {
        campoDireccion.value = direccionGuardada;
    }

    var formulario = document.getElementById('form-direccion');
    if (formulario) {
        formulario.addEventListener('submit', function(event) {
                    event.preventDefault();
                    var nuevaDireccion = campoDireccion.value;
                    if (nuevaDireccion) {
                        setCookie('direccion_envio', nuevaDireccion, 365);
                        alert('¡Dirección guardada exitosamente!');
                    }
                });
            }
        }

        function getCookie(nombre) {
            var nombreCookie = nombre + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(nombreCookie) == 0) {
            return c.substring(nombreCookie.length, c.length);
        }
    }
    return "";
}

function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

