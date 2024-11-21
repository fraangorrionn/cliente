/*Realizar   un   examen   tipo   test   online   de   2  preguntas con 4 respuestas (sólo   se   puede seleccionar   1).   Cuando
el   usuario   seleccione   una respuesta,  hacerle   saber   si   es correcta o incorrecta y mostrar la respuesta correcta en un 
campo de texto aparte. */
window.addEventListener('click', inicializar, false);

function inicializar() {
    var respuestasCorrectas = {
        pregunta1: "Mercurio",
        pregunta2: "París"
    };

    var botonVerificar = document.getElementById('botonVerificar');

    botonVerificar.addEventListener('click', function () {
        let mensaje = "";

        var seleccion1 = document.querySelector('input[name="pregunta1"]:checked');
        if (seleccion1) {
            if (seleccion1.value === respuestasCorrectas.pregunta1) {
                mensaje += "Pregunta 1: ¡Correcto!\n";
                document.getElementById('respuestaCorrecta1').value = "Correcto: " + respuestasCorrectas.pregunta1;
            } else {
                mensaje += `Pregunta 1: Incorrecto. La respuesta correcta es ${respuestasCorrectas.pregunta1}.\n`;
                document.getElementById('respuestaCorrecta1').value = "Incorrecto. Correcta: " + respuestasCorrectas.pregunta1;
            }
        } else {
            mensaje += "Pregunta 1: No seleccionaste una respuesta.\n";
            document.getElementById('respuestaCorrecta1').value = "No seleccionaste ninguna respuesta.";
        }

        var seleccion2 = document.querySelector('input[name="pregunta2"]:checked');
        if (seleccion2) {
            if (seleccion2.value === respuestasCorrectas.pregunta2) {
                mensaje += "Pregunta 2: ¡Correcto!\n";
                document.getElementById('respuestaCorrecta2').value = "Correcto: " + respuestasCorrectas.pregunta2;
            } else {
                mensaje += `Pregunta 2: Incorrecto. La respuesta correcta es ${respuestasCorrectas.pregunta2}.\n`;
                document.getElementById('respuestaCorrecta2').value = "Incorrecto. Correcta: " + respuestasCorrectas.pregunta2;
            }
        } else {
            mensaje += "Pregunta 2: No seleccionaste una respuesta.\n";
            document.getElementById('respuestaCorrecta2').value = "No seleccionaste ninguna respuesta.";
        }

        alert(mensaje);
    });
}
