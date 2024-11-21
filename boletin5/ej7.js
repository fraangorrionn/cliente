/*Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. Utilice   el   atributo 
  id   para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado. */

window.addEventListener('click', inicializar, false);

function inicializar() {
    var formContainer = document.getElementById('form-container');
    var colorForm = document.getElementById('colorForm');

    colorForm.addEventListener('change', (event) => {
        if (event.target.name === 'color') {
            var colorSeleccionado = event.target.value;
            formContainer.style.backgroundColor = colorSeleccionado;
        }
    });

    colorForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Color seleccionado: ' + document.querySelector('input[name="color"]:checked').value);
    });
}
