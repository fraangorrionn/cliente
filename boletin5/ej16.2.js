/*Crear   un   formulario   que   pida   la   dirección   de   envío   del   usuario.   La   próxima   vez   que   el usuario acceda a la página,
 se rellenará la dirección utilizando localStorage.  */

window.addEventListener('load', inicializar);

function inicializar() {
    const direccionGuardada = localStorage.getItem('direccion_envio');
    if (direccionGuardada) {
        const mensajeDireccion = document.createElement('p');
        mensajeDireccion.textContent = `Dirección guardada: ${direccionGuardada}`;
        document.body.appendChild(mensajeDireccion);
    }

    const botonFormulario = document.createElement('button');
    botonFormulario.textContent = 'Guardar nueva dirección';
    botonFormulario.id = 'boton-guardar-direccion';
    document.body.appendChild(botonFormulario);

    botonFormulario.addEventListener('click', () => {
        if (document.getElementById('formulario-reserva')) return;

        const formulario = document.createElement('form');
        formulario.id = 'formulario-reserva';
 
        const labelDireccion = document.createElement('label');
        labelDireccion.setAttribute('for', 'direccion');
        labelDireccion.textContent = 'Dirección de envío:';
        formulario.appendChild(labelDireccion);
 
        const inputDireccion = document.createElement('input');
        inputDireccion.type = 'text';
        inputDireccion.id = 'direccion';
        formulario.appendChild(inputDireccion);
 
        const botonGuardar = document.createElement('button');
        botonGuardar.type = 'submit';
        botonGuardar.textContent = 'Guardar Dirección';
        formulario.appendChild(botonGuardar);
 
        document.body.appendChild(formulario);
 
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();
 
            const nuevaDireccion = inputDireccion.value.trim();
            if (nuevaDireccion) {
                localStorage.setItem('direccion_envio', nuevaDireccion);
 
                let mensajeDireccion = document.querySelector('p');
                if (!mensajeDireccion) {
                    mensajeDireccion = document.createElement('p');
                    document.body.insertBefore(mensajeDireccion, botonFormulario);
                }
                mensajeDireccion.textContent = `Dirección guardada: ${nuevaDireccion}`;
 
                alert('¡Dirección guardada exitosamente!');
                formulario.remove();
            } else {
                alert('Por favor, introduce una dirección válida.');
            }
        });
    });
}
 
 
 
