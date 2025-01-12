/*Crea un documento html, donde existirán 4 contenedores. En uno de ellos, existen dentro una serie de elementos que podrán ser movidos a otro contenedor, 
arrastrados a una papelera donde serán eliminados. */

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear contenedores
    const contenedorFuente = document.createElement('div');
    contenedorFuente.setAttribute('id', 'fuente');
    contenedorFuente.style.width = '200px';
    contenedorFuente.style.height = '300px';
    contenedorFuente.style.border = '2px dashed #ccc';
    contenedorFuente.style.backgroundColor = '#ffffff';
    contenedorFuente.style.margin = '10px';
    contenedorFuente.style.padding = '10px';
    contenedorFuente.style.display = 'inline-block';

    const contenedor1 = document.createElement('div');
    contenedor1.setAttribute('id', 'contenedor1');
    contenedor1.style.width = '200px';
    contenedor1.style.height = '300px';
    contenedor1.style.border = '2px dashed #ccc';
    contenedor1.style.backgroundColor = '#ffffff';
    contenedor1.style.margin = '10px';
    contenedor1.style.padding = '10px';
    contenedor1.style.display = 'inline-block';

    const contenedor2 = document.createElement('div');
    contenedor2.setAttribute('id', 'contenedor2');
    contenedor2.style.width = '200px';
    contenedor2.style.height = '300px';
    contenedor2.style.border = '2px dashed #ccc';
    contenedor2.style.backgroundColor = '#ffffff';
    contenedor2.style.margin = '10px';
    contenedor2.style.padding = '10px';
    contenedor2.style.display = 'inline-block';

    const contenedorPapelera = document.createElement('div');
    contenedorPapelera.setAttribute('id', 'papelera');
    contenedorPapelera.style.width = '200px';
    contenedorPapelera.style.height = '300px';
    contenedorPapelera.style.border = '2px solid red';
    contenedorPapelera.style.backgroundColor = '#ffe5e5';
    contenedorPapelera.style.margin = '10px';
    contenedorPapelera.style.padding = '10px';
    contenedorPapelera.style.display = 'inline-block';

    const tituloPapelera = document.createElement('h1');
    tituloPapelera.textContent = 'Borrar Elemento';
    tituloPapelera.style.fontSize = '16px';
    tituloPapelera.style.textAlign = 'center';
    tituloPapelera.style.marginBottom = '10px';
    contenedorPapelera.appendChild(tituloPapelera);

    document.body.appendChild(contenedorFuente);
    document.body.appendChild(contenedor1);
    document.body.appendChild(contenedor2);
    document.body.appendChild(contenedorPapelera);

    // Crear elementos arrastrables
    for (let i = 1; i <= 5; i++) {
        const elemento = document.createElement('div');
        elemento.textContent = `Elemento ${i}`;
        elemento.classList.add('elemento');
        elemento.style.width = '90%';
        elemento.style.margin = '5px auto';
        elemento.style.padding = '10px';
        elemento.style.backgroundColor = '#add8e6';
        elemento.style.borderRadius = '5px';
        elemento.style.cursor = 'grab';
        elemento.setAttribute('draggable', 'true');
        contenedorFuente.appendChild(elemento);
    }

    // Variables para controlar el arrastre
    let elementoArrastrado = null;

    // Eventos para los elementos arrastrables
    document.querySelectorAll('.elemento').forEach(elemento => {
        elemento.addEventListener('dragstart', (evento) => {
            elementoArrastrado = elemento;
            setTimeout(() => {
                elemento.style.display = 'none';
            }, 0);
        });

        elemento.addEventListener('dragend', () => {
            setTimeout(() => {
                elemento.style.display = 'block';
                elementoArrastrado = null;
            }, 0);
        });
    });

    // Eventos para los contenedores
    const contenedores = [contenedorFuente, contenedor1, contenedor2, contenedorPapelera];

    contenedores.forEach(contenedor => {
        contenedor.addEventListener('dragover', (evento) => {
            evento.preventDefault();
            contenedor.style.borderColor = 'green';
        });

        contenedor.addEventListener('dragleave', () => {
            contenedor.style.borderColor = '#ccc';
        });

        contenedor.addEventListener('drop', () => {
            contenedor.style.borderColor = '#ccc';
            if (contenedor.id === 'papelera') {
                elementoArrastrado.remove();
            } else if (elementoArrastrado) {
                contenedor.appendChild(elementoArrastrado);
            }
        });
    });
}

