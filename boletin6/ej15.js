/*Crea un documento html, donde existirán 2 contenedores. En uno de ellos, existe dentro un elemento que podrá ser copiado (no movido)  al otro contenedor. */

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear contenedores
    const contenedorOrigen = document.createElement('div');
    contenedorOrigen.setAttribute('id', 'origen');
    contenedorOrigen.style.width = '200px';
    contenedorOrigen.style.height = '300px';
    contenedorOrigen.style.border = '2px dashed #ccc';
    contenedorOrigen.style.backgroundColor = '#f9f9f9';
    contenedorOrigen.style.margin = '20px';
    contenedorOrigen.style.padding = '10px';
    contenedorOrigen.style.display = 'inline-block';
    contenedorOrigen.style.verticalAlign = 'top';

    const contenedorDestino = document.createElement('div');
    contenedorDestino.setAttribute('id', 'destino');
    contenedorDestino.style.width = '200px';
    contenedorDestino.style.height = '300px';
    contenedorDestino.style.border = '2px dashed #ccc';
    contenedorDestino.style.backgroundColor = '#ffffff';
    contenedorDestino.style.margin = '20px';
    contenedorDestino.style.padding = '10px';
    contenedorDestino.style.display = 'inline-block';
    contenedorDestino.style.verticalAlign = 'top';

    document.body.appendChild(contenedorOrigen);
    document.body.appendChild(contenedorDestino);

    // Crear elemento arrastrable
    const elemento = document.createElement('div');
    elemento.textContent = 'Elemento a copiar';
    elemento.setAttribute('draggable', 'true');
    elemento.style.width = '90%';
    elemento.style.margin = '5px auto';
    elemento.style.padding = '10px';
    elemento.style.backgroundColor = '#add8e6';
    elemento.style.borderRadius = '5px';
    elemento.style.textAlign = 'center';
    elemento.style.cursor = 'grab';

    contenedorOrigen.appendChild(elemento);

    // Variables para controlar el arrastre
    let elementoCopiado = null;

    // Evento dragstart
    elemento.addEventListener('dragstart', (evento) => {
        elementoCopiado = evento.target;
    });

    // Eventos para el contenedor destino
    contenedorDestino.addEventListener('dragover', (evento) => {
        evento.preventDefault(); // Necesario para permitir el drop
        contenedorDestino.style.borderColor = 'green';
    });

    contenedorDestino.addEventListener('dragleave', () => {
        contenedorDestino.style.borderColor = '#ccc';
    });

    contenedorDestino.addEventListener('drop', () => {
        contenedorDestino.style.borderColor = '#ccc';
        if (elementoCopiado) {
            // Crear una copia del elemento
            const copiaElemento = elementoCopiado.cloneNode(true);
            copiaElemento.style.cursor = 'default'; // Evitar que sea arrastrable después
            copiaElemento.setAttribute('draggable', 'false');
            contenedorDestino.appendChild(copiaElemento);
        }
    });
}