/*Crear   un   formulario   que   pida   la   dirección   de   envío   del   usuario.   La   próxima   vez   que   el usuario acceda
a la página, se rellenará la dirección utilizando el valor de la cookie.  */

window.addEventListener('load', inicializar, false);

function inicializar() {
    var direccionGuardada = getCookie('direccion_envio');
    var campoDireccion = document.getElementById('direccion');

    if (direccionGuardada && campoDireccion) {
        campoDireccion.value = direccionGuardada;
    }

    var formulario = document.getElementById('formularioDireccion');
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

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
  
function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
} 