/*Crear   un   formulario   que   contiene   dos   campos   de   texto   contraseña.   Cuando   el   usuario   sale  
de   cada   campo   de   texto,   utilice   el   controlador   de eventos   para   Blur   y   comprobar   si   el   usuario
ha   introducido   nada   en   el   campo   respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   para
decírselo,   y   utilizar   el   método   focus()   para devolver el foco al campo de texto que el usuario acaba de abandonar. */

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el formulario
    const formulario = document.createElement('form');
    formulario.id = 'formulario';

    // Crear el primer campo de contraseña
    const label1 = document.createElement('label');
    label1.textContent = 'Contraseña:';
    label1.setAttribute('for', 'contraseña1');

    const contraseña1 = document.createElement('input');
    contraseña1.type = 'password';
    contraseña1.id = 'contraseña1';
    contraseña1.placeholder = 'Ingresa tu contraseña';

    // Crear el segundo campo de contraseña
    const label2 = document.createElement('label');
    label2.textContent = 'Confirmar Contraseña:';
    label2.setAttribute('for', 'contraseña2');

    const contraseña2 = document.createElement('input');
    contraseña2.type = 'password';
    contraseña2.id = 'contraseña2';
    contraseña2.placeholder = 'Confirma tu contraseña';

    // Crear el botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';

    // Añadir elementos al formulario
    formulario.appendChild(label1);
    formulario.appendChild(contraseña1);
    formulario.appendChild(label2);
    formulario.appendChild(contraseña2);
    formulario.appendChild(botonEnviar);

    // Añadir el formulario al body
    document.body.appendChild(formulario);

    // Validación con evento blur para el primer campo de contraseña
    contraseña1.addEventListener('blur', function () {
        if (contraseña1.value.trim() === '') {
            alert('El campo "Contraseña" no puede estar vacío.');
            contraseña1.focus();
        }
    });

    // Validación con evento blur para el segundo campo de contraseña
    contraseña2.addEventListener('blur', function () {
        if (contraseña2.value.trim() === '') {
            alert('El campo "Confirmar Contraseña" no puede estar vacío.');
            contraseña2.focus();
        }
    });
}
