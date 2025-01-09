/*Basándote, en el código del ejercicio 6, añade un enlace que al pulsarlo haga aparecer y desaparecer la tabla
 creada en el ejercicio 5 (borrándola, mediante métodos DOM). */
document.addEventListener('DOMContentLoaded', () => {
    let tabla;

    const crearTabla = () => {
        tabla = document.createElement('table');
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
    };

    const enlace = document.createElement('a');
    enlace.href = "#";
    enlace.textContent = "Mostrar/Ocultar Tabla";
    enlace.style.display = "block";
    enlace.style.margin = "20px 0";
    document.body.appendChild(enlace);

    let tablaVisible = false;

    enlace.addEventListener('click', (evento) => {
        evento.preventDefault();

        if (tablaVisible) {
            tabla.remove();
            tablaVisible = false;
        } else {
            crearTabla();
            tablaVisible = true;
        }
    });
});