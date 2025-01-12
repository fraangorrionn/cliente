/*Crea un campo de texto que sirva para mostrar los datos de un array, según coincidan con lo que se va escribiendo. */

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear campo de texto
    const campoTexto = document.createElement('input');
    campoTexto.setAttribute('type', 'text');
    campoTexto.setAttribute('placeholder', 'Escribe para buscar...');
    campoTexto.style.width = '300px';
    campoTexto.style.margin = '10px';
    campoTexto.style.padding = '10px';
    campoTexto.style.border = '1px solid #ccc';
    campoTexto.style.borderRadius = '5px';
    document.body.appendChild(campoTexto);

    // Crear contenedor para los resultados
    const contenedorResultados = document.createElement('div');
    contenedorResultados.setAttribute('id', 'resultados');
    contenedorResultados.style.width = '300px';
    contenedorResultados.style.marginTop = '10px';
    contenedorResultados.style.padding = '10px';
    contenedorResultados.style.border = '1px solid #ccc';
    contenedorResultados.style.borderRadius = '5px';
    contenedorResultados.style.backgroundColor = '#f9f9f9';
    document.body.appendChild(contenedorResultados);

    // Datos del array
    const datos = [
        'Manzana',
        'Mandarina',
        'Mango',
        'Melocotón',
        'Melón',
        'Naranja',
        'Pera',
        'Plátano',
        'Sandía',
        'Uva'
    ];

    // Evento para filtrar resultados
    campoTexto.addEventListener('input', () => {
        const textoEscrito = campoTexto.value.toLowerCase();
        const resultadosFiltrados = datos.filter(dato => dato.toLowerCase().includes(textoEscrito));

        // Limpiar resultados previos
        contenedorResultados.innerHTML = '';

        // Mostrar nuevos resultados
        if (resultadosFiltrados.length > 0) {
            resultadosFiltrados.forEach(resultado => {
                const elementoResultado = document.createElement('div');
                elementoResultado.textContent = resultado;
                elementoResultado.style.padding = '5px 0';
                contenedorResultados.appendChild(elementoResultado);
            });
        } else {
            contenedorResultados.textContent = 'Sin resultados';
        }
    });
}
