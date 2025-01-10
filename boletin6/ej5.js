/*Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). Pon texto en las celdas, todo ello mediante DOM. */

window.addEventListener('load', inicializar);

function inicializar(){

    const tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse';
    tabla.style.width = '100%';

    for (let i = 1; i <= 20; i++) {
        const fila = document.createElement('tr');

        for (let j = 1; j <= 20; j++) {
            const celda = document.createElement('td');
            celda.textContent = `Fila ${i}, Columna ${j}`;
            celda.style.border = '1px solid black';
            celda.style.padding = '5px';
            celda.style.textAlign = 'center';
            fila.appendChild(celda);
        }

        tabla.appendChild(fila);
    }

    document.body.appendChild(tabla);
}
