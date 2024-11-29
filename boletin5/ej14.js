/*Crear   un   formulario   que   contiene   un   conjunto   de   casillas   de   verificación   con   diferentes tipos   de
cafés   ­   espresso,   cappuccino,   moka,   y   así   sucesivamente.   Pida   al   usuario su   nombre   y   número   de   habitación
y   seleccionar   un   tipo   de   café.   Indicar   al   usuario   que va   a   enviar   el   café   a   su   número   de   habitación.
Cree   las   cookie   para   recordar   las preferencias   del   usuario.   La   próxima   vez   que   el   usuario  entre en la   página,
en introduzca su nombre de usuario y habitación, se mostrará su café favorito. Después de haber pedido 3 cafés, se le dirá que hay una 
tarifa especial y su próximo café será gratuito. */

window.addEventListener('load', inicializar, false);

function inicializar() {
    document.getElementById('enviar').addEventListener('click', recogerDatos);
    mostrarPreferenciasGuardadas();
}

function recogerDatos(event) {
    event.preventDefault(); 

    var nombre = document.getElementById('name').value;
    var numero_habitacion = document.getElementById('room').value;

    var cafes = document.getElementsByName('coffee');
    var seleccionados = [];
    cafes.forEach(cafe => {
        if (cafe.checked) {
            seleccionados.push(cafe.value);
        }
    });

    if (nombre && numero_habitacion && seleccionados.length > 0) {

        document.cookie = `nombre=${nombre}; path=/; max-age=86400`;
        document.cookie = `numero_habitacion=${numero_habitacion}; path=/; max-age=86400`;
        document.cookie = `cafe_favorito=${seleccionados.join(',')}; path=/; max-age=86400`;

        var conteoPedidos = parseInt(getCookie('conteo_pedidos')) || 0;
        conteoPedidos++;
        document.cookie = `conteo_pedidos=${conteoPedidos}; path=/; max-age=86400`;

        if (conteoPedidos % 4 === 0) {
            alert("¡Felicidades! Este es tu cuarto café, tu próximo café será gratuito.");
        } else {
            alert(`Pedido realizado. Este es tu pedido número ${conteoPedidos}.`);
        }
    } else {
        alert("Por favor, complete todos los campos antes de guardar.");
    }
}

function mostrarPreferenciasGuardadas() {
    var nombre = getCookie('nombre');
    var numero_habitacion = getCookie('numero_habitacion');
    var cafeFavorito = getCookie('cafe_favorito');

    if (nombre && numero_habitacion && cafeFavorito) {
        document.getElementById('name').value = nombre;
        document.getElementById('room').value = numero_habitacion;

        var cafes = cafeFavorito.split(',');
        cafes.forEach(cafe => {
            var checkbox = document.getElementById(cafe);
            if (checkbox) {
                checkbox.checked = true;
            }
        });
        alert(`Bienvenido ${nombre}, tu café favorito es: ${cafeFavorito}`);
    }
}

function getCookie(nombre) {
    let name = nombre + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
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

