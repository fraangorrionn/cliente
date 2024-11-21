/*En una nueva ventana, imprimir todas las propiedades del objeto navigator. */

function mostrarPropiedadesNavigator() {
    // Abrir una nueva ventana
    const nuevaVentana = window.open('', '_blank', 'width=600,height=400');

    if (nuevaVentana) {
        // Construir contenido HTML con las propiedades de navigator
        let contenido = '<h1>Propiedades del objeto navigator</h1><ul>';

        for (const propiedad in navigator) {
            try {
                contenido += `<li><strong>${propiedad}</strong>: ${navigator[propiedad]}</li>`;
            } catch (error) {
                contenido += `<li><strong>${propiedad}</strong>: No se puede acceder o propiedad restringida</li>`;
            }
        }

        contenido += '</ul>';

        // Insertar el contenido en la nueva ventana
        nuevaVentana.document.open();
        nuevaVentana.document.write(`
            <html>
                <head>
                    <title>Propiedades del Objeto Navigator</title>
                </head>
                <body>${contenido}</body>
            </html>
        `);
        nuevaVentana.document.close();
    } else {
        alert('No se pudo abrir la nueva ventana. Verifica si tienes bloqueadores de ventanas emergentes activos.');
    }
}

mostrarPropiedadesNavigator();