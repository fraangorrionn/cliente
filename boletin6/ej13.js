/*Crea una página con un div y permite arrastrarlo con el ratón a otro div. */

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el div arrastrable
    let divArrastrar = document.createElement('div');
    divArrastrar.setAttribute('id', 'arrastrar');
    divArrastrar.style.width = '100px';
    divArrastrar.style.height = '100px';
    divArrastrar.style.backgroundColor = 'red';
    divArrastrar.style.position = 'absolute';
    divArrastrar.style.cursor = 'grab';
    divArrastrar.style.left = '50px'; // Posición inicial
    divArrastrar.style.top = '50px'; // Posición inicial
    document.body.appendChild(divArrastrar);

    // Crear el contenedor destino
    let divDestino = document.createElement('div');
    divDestino.setAttribute('id', 'destino');
    divDestino.style.width = '300px';
    divDestino.style.height = '300px';
    divDestino.style.backgroundColor = 'lightblue';
    divDestino.style.position = 'relative';
    divDestino.style.margin = '50px auto';
    divDestino.style.border = '2px dashed gray';
    document.body.appendChild(divDestino);

    // Variables para controlar el arrastre
    let estaArrastrando = false;
    let offsetX, offsetY;

    // Eventos para iniciar y detener el arrastre
    divArrastrar.addEventListener('mousedown', (event) => {
        estaArrastrando = true;
        offsetX = event.offsetX;
        offsetY = event.offsetY;
        divArrastrar.style.cursor = 'grabbing';
    });

    document.addEventListener('mouseup', (event) => {
        estaArrastrando = false;
        divArrastrar.style.cursor = 'grab';

        // Comprobar si el div arrastrable está dentro del contenedor destino
        const rectDestino = divDestino.getBoundingClientRect();
        const rectDiv = divArrastrar.getBoundingClientRect();

        if (
            rectDiv.left >= rectDestino.left &&
            rectDiv.top >= rectDestino.top &&
            rectDiv.right <= rectDestino.right &&
            rectDiv.bottom <= rectDestino.bottom
        ) {
            // Ajustar posición relativa al contenedor
            divArrastrar.style.position = 'absolute';
            divArrastrar.style.left = `${rectDiv.left - rectDestino.left}px`;
            divArrastrar.style.top = `${rectDiv.top - rectDestino.top}px`;
            divDestino.appendChild(divArrastrar);
        }
    });

    // Evento para mover el div
    document.addEventListener('mousemove', (event) => {
        if (estaArrastrando) {
            let x = event.clientX - offsetX;
            let y = event.clientY - offsetY;

            divArrastrar.style.left = `${x}px`;
            divArrastrar.style.top = `${y}px`;
        }
    });
}

