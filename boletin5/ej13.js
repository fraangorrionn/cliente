/*Crear   un   formulario   que   contenga   un   cuadro   de   texto.   Después   de   que   el   usuario introduzca
texto,   todas   las   letras   se   convertirán   en   minúsculas,   tan   pronto   como   haga clic en cualquier otro 
lugar el formulario. */

window.addEventListener('click', inicializar, false);

function inicializar() {
    var formulario = document.getElementById('formulario');
    var cuadroTexto = document.getElementById('text');

    formulario.addEventListener('focusout', () => {
        cuadroTexto.value = cuadroTexto.value.toLowerCase();
    });
}