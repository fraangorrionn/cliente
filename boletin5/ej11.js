/*Crear   un   formulario   que   contiene   dos   campos   de   texto   contraseña.   Cuando   el   usuario   sale  
de   cada   campo   de   texto,   utilice   el   controlador   de eventos   para   Blur   y   comprobar   si   el   usuario
ha   introducido   nada   en   el   campo   respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   para
decírselo,   y   utilizar   el   método   focus()   para devolver el foco al campo de texto que el usuario acaba de abandonar. */

window.addEventListener('load', inicializar, false);
function inicializar() {
    var contraseña1 = document.getElementById('contraseña1');
    var contraseña2 = document.getElementById('contraseña2');

    contraseña1.addEventListener("blur", function(){
        if(contraseña1.value.trim()===""){
            alert("el campo no puede estar vacio");
            contraseña1.focus();
        }
    });

    contraseña2.addEventListener("blur", function(){
        if(contraseña2.value.trim()===""){
            alert("el campo no puede estar vacio");
            contraseña2.focus();
        }
    });
}
