/* Realizar  un   formulario   para   envío   de   SMS   con   una   área   de   texto   de   145 caracteres como máximo, 
no debe permitir escribir más. Sólo se permiten alfanuméricos y signos de puntuación. Se debe mostrar el número de caracteres
permitidos que le quedan al usuario para poder escribir. */
window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el formulario
    const formulario = document.createElement('form');
    formulario.id = 'smsForm';

    // Crear el área de texto
    const areaTexto = document.createElement('textarea');
    areaTexto.id = 'smsText';
    areaTexto.maxLength = 145; // Máximo de caracteres
    areaTexto.rows = 5;//numero de filas para que se vea mejor
    areaTexto.placeholder = 'Escribe tu mensaje (máx. 145 caracteres)...';
    formulario.appendChild(areaTexto);

    // Crear el contador de caracteres
    const contador = document.createElement('p');
    contador.id = 'charCount';
    contador.textContent = `Caracteres restantes: ${areaTexto.maxLength}`;
    formulario.appendChild(contador);

    // Agregar validación de caracteres al área de texto
    areaTexto.addEventListener('input', () => {
        const texto = areaTexto.value;

        // Validar que sólo contenga caracteres alfanuméricos y signos de puntuación
        const textoValidado = texto.replace(/[^a-zA-Z0-9.,!?;:()\-'" ]/g, '');
        if (texto !== textoValidado) {
            areaTexto.value = textoValidado;
        }

        // Actualizar el contador de caracteres
        contador.textContent = `Caracteres restantes: ${areaTexto.maxLength - textoValidado.length}`;
    });

    // Añadir el formulario al body
    document.body.appendChild(formulario);
}


 