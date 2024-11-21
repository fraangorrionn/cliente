/* Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, 
no debe permitir escribir más. Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres
permitidos que le quedan al usuario para poder escribir. */
window.addEventListener('click', inicializar, false);

function inicializar() {
    var textarea = document.getElementById("mensaje");
    var contador = document.getElementById("contador");

    function actualizarContador() {
        var caracteresRestantes = 145 - textarea.value.length;
        contador.textContent = `Caracteres restantes: ${caracteresRestantes}`;
    }

    textarea.addEventListener("input", (event) => {

        var caracteresPermitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.,!?¡¿()'\"-_:;@# ";
        
        var textoFiltrado = Array.from(textarea.value)
            .filter(char => caracteresPermitidos.includes(char))
            .join('');

        if (textoFiltrado !== textarea.value) {
            textarea.value = textoFiltrado;
        }

        actualizarContador();
    });

    document.getElementById("smsForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Mensaje enviado: " + textarea.value);
        textarea.value = ""; 
        actualizarContador();
    });

    actualizarContador();
}


 