/*Crea un formulario con un campo de texto para introducir el código de un producto.
El código debe cumplir obligatoriamente el siguiente formato: tres letras, guión y de
1 a 5 números (ej: ASX-23). Si el campo no es correcto, debe mostrar al salir del
campo un mensaje que informe al usuario.
El formulario también debe tener un botón para ser enviado, pero este no se enviará
si el código no se ha introducido correctamente. Además en el momento en que se
envía el formulario, el código debe ser almacenado en el navegador de forma
permanente sin necesidad de que pase por el servidor. */

/*window.addEventListener('load', inicializar);

function inicializar() {
    // Crear formulario dinámicamente
    const formulario = document.createElement('form');
    formulario.id = 'form-producto';

    // Crear campo de texto para código del producto
    const etiqueta = document.createElement('label');
    etiqueta.textContent = 'Introduce el código del producto: ';
    etiqueta.setAttribute('for', 'codigo-producto');

    const inputCodigo = document.createElement('input');
    inputCodigo.type = 'text';
    inputCodigo.id = 'codigo-producto';
    inputCodigo.placeholder = 'Ej: ABC-123';

    // Crear mensaje de validación
    const mensajeError = document.createElement('p');
    mensajeError.id = 'mensaje-error';
    mensajeError.style.display = 'none';

    // Validar formato del código al salir del campo
    inputCodigo.addEventListener('blur', () => {
        const regex = /^[A-Z]{3}-\d{1,5}$/; // Tres letras, guion y 1-5 números
        if (!regex.test(inputCodigo.value)) {
            mensajeError.textContent = 'El código debe tener el formato: tres letras, guión y de 1 a 5 números (Ej: ASX-23).';
            mensajeError.style.display = 'block';
        } else {
            mensajeError.style.display = 'none';
        }
    });

    // Crear botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';

    // Evitar envío si el código no es válido
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const regex = /^[A-Z]{3}-\d{1,5}$/;
        if (!regex.test(inputCodigo.value)) {
            mensajeError.textContent = 'Por favor, introduce un código válido antes de enviar.';
            mensajeError.style.display = 'block';
        } else {
            mensajeError.style.display = 'none';
            localStorage.setItem('codigoProducto', inputCodigo.value);
            alert('Código guardado correctamente en el navegador.');
            //formulario.reset();
        }
    });

    // Añadir elementos al formulario
    formulario.appendChild(etiqueta);
    formulario.appendChild(inputCodigo);
    formulario.appendChild(mensajeError);
    formulario.appendChild(botonEnviar);

    // Añadir formulario al cuerpo del documento
    document.body.appendChild(formulario);
}*/

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear formulario dinámicamente
    const formulario = document.createElement('form');
    formulario.id = 'form-producto';

    // Crear campo de texto para código del producto
    const etiqueta = document.createElement('label');
    etiqueta.textContent = 'Introduce el código del producto: ';
    etiqueta.setAttribute('for', 'codigo-producto');

    const inputCodigo = document.createElement('input');
    inputCodigo.type = 'text';
    inputCodigo.id = 'codigo-producto';
    inputCodigo.placeholder = 'Ej: ABC-123';

    // Crear mensaje de validación
    const mensajeError = document.createElement('p');
    mensajeError.id = 'mensaje-error';
    mensajeError.style.color = 'red';
    mensajeError.style.display = 'none';

    // Validar formato del código al salir del campo
    inputCodigo.addEventListener('blur', () => {
        const regex = /^[A-Z]{3}-\d{1,5}$/; // Tres letras, guion y 1-5 números
        if (!regex.test(inputCodigo.value)) {
            mensajeError.textContent = 'El código debe tener el formato: tres letras, guión y de 1 a 5 números (Ej: ASX-23).';
            mensajeError.style.display = 'block';
        } else {
            mensajeError.style.display = 'none';
        }
    });

    // Crear botón de envío
    const botonEnviar = document.createElement('button');
    botonEnviar.type = 'submit';
    botonEnviar.textContent = 'Enviar';

    // Evitar envío si el código no es válido y almacenar en cookies
    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        const regex = /^[A-Z]{3}-\d{1,5}$/;
        if (!regex.test(inputCodigo.value)) {
            mensajeError.textContent = 'Por favor, introduce un código válido antes de enviar.';
            mensajeError.style.display = 'block';
        } else {
            mensajeError.style.display = 'none';
            document.cookie = `codigoProducto=${inputCodigo.value}; path=/; max-age=31536000`; // Guardar en cookies por 1 año
            alert('Código guardado correctamente en las cookies.');
            formulario.reset();
        }
    });

    // Añadir elementos al formulario
    formulario.appendChild(etiqueta);
    formulario.appendChild(inputCodigo);
    formulario.appendChild(mensajeError);
    formulario.appendChild(botonEnviar);

    // Añadir formulario al cuerpo del documento
    document.body.appendChild(formulario);
}
