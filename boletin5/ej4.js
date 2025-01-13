/*Realizar   un   examen   tipo   test   online   de   2  preguntas con 4 respuestas (sólo   se   puede seleccionar   1).   Cuando
el   usuario   seleccione   una respuesta,  hacerle   saber   si   es correcta o incorrecta y mostrar la respuesta correcta en un 
campo de texto aparte. */
window.addEventListener('load', inicializar);

function inicializar() {
    let formulario = document.createElement('form');
    formulario.id = 'quizForm';
    document.body.appendChild(formulario);

    let pregunta1 = document.createElement('h1')
    pregunta1.textContent = 'cual es la capital de españa';
    formulario.appendChild(pregunta1);

    let opcionPregunta1 = [
        {id: 'respuesta1', texto: 'barcelona', escorrecta: false},
        {id: 'respuesta2', texto: 'granada', escorrecta: false},
        {id: 'respuesta3', texto: 'madrid', escorrecta: true},
        {id: 'respuesta4', texto: 'cadiz', escorrecta: false},
    ]

    opcionPregunta1.forEach(opcion => {
        let contenedorOpcion = document.createElement('div');
        
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pregunta1';
        input.id = opcion.id;
        input.value = opcion.texto;
        input.dataset.correcto = opcion.escorrecta;

        let label = document.createElement('label');
        label.setAttribute('for', opcion.id);
        label.textContent = opcion.texto;

        contenedorOpcion.appendChild(input);
        contenedorOpcion.appendChild(label);
        formulario.appendChild(contenedorOpcion);
    });

    let resultado1 = document.createElement('p');
    resultado1.id = 'resultado1';
    formulario.appendChild(resultado1);

    formulario.addEventListener('change', (e) => {
        if (e.target.name === 'pregunta1') {
            let esCorrecta = e.target.dataset.correcto === 'true';
            resultado1.textContent = esCorrecta
                ? '¡Correcto! Madrid es la capital de España.'
                : `Incorrecto. La respuesta correcta es Madrid.`;
        }
    });

    let pregunta2 = document.createElement('h1')
    pregunta2.textContent = 'cual es la capital de andalucia';
    formulario.appendChild(pregunta2);

    let opcionPregunta2 = [
        {id: 'respuesta1', texto: 'sevilla', escorrecta: true},
        {id: 'respuesta2', texto: 'granada', escorrecta: false},
        {id: 'respuesta3', texto: 'malaga', escorrecta: false},
        {id: 'respuesta4', texto: 'almeria', escorrecta: false},
    ]

    opcionPregunta2.forEach(opcion => {
        let contenedorOpcion = document.createElement('div');
        
        let input = document.createElement('input');
        input.type = 'radio';
        input.name = 'pregunta2';
        input.id = opcion.id;
        input.value = opcion.texto;
        input.dataset.correcto = opcion.escorrecta;

        let label = document.createElement('label');
        label.setAttribute('for', opcion.id);
        label.textContent = opcion.texto;

        contenedorOpcion.appendChild(input);
        contenedorOpcion.appendChild(label);
        formulario.appendChild(contenedorOpcion);
    });

    let resultado2 = document.createElement('p');
    resultado2.id = 'resultado2';
    formulario.appendChild(resultado2);

    formulario.addEventListener('change', (e) => {
        if (e.target.name === 'pregunta2') {
            let esCorrecta = e.target.dataset.correcto === 'true';
            resultado2.textContent = esCorrecta
                ? '¡Correcto! Sevilla es la capital de Andalucia.'
                : `Incorrecto. La respuesta correcta es Ancalucia.`;
        }
    });
}
