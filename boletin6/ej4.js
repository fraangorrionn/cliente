/*Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera que no use innerHTML, es decir, 
crea los nodos elementos y textos necesarios y añádelos a un HTML.*/ 

window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el título
    const titulo = document.createElement('h1');
    titulo.textContent = 'Generador de Fortuna';
    document.body.appendChild(titulo);

    // Crear el contenedor para el dicho
    const divDicho = document.createElement('div');
    divDicho.id = 'divdicho';
    document.body.appendChild(divDicho);

    // Crear el botón
    const botonFortuna = document.createElement('button');
    botonFortuna.id = 'btn-fortuna';
    botonFortuna.textContent = 'Generar Fortuna';
    document.body.appendChild(botonFortuna);

    // Función para generar la fortuna
    function get_fortune() {
        // Fecha actual
        var hoy = new Date();

        // Lista de dichos
        var dichos = [
            "Carpe Diem.",
            "El silencio es oro, pero la cinta aislante es plata.",
            "Una manzana al día, mantiene al doctor en la lejanía.",
            "A cada uno lo suyo.",
            "Si a la primera no lo consigues, inténtalo de nuevo.",
            "No te conformes con la mediocridad, pelea por el éxito",
            "Vive y deja vivir."
        ];

        // Seleccionar un dicho aleatorio
        var n = dichos.length;
        var numero = Math.floor(Math.random() * n);
        var dichoSeleccionado = dichos[numero];

        // Limpiar contenido previo del div
        while (divDicho.firstChild) {
            divDicho.removeChild(divDicho.firstChild);
        }

        // Crear elementos para mostrar la fortuna
        var fechaTexto = document.createElement('p');
        fechaTexto.textContent = "Hoy es: " + hoy;

        var introduccionTexto = document.createElement('p');
        introduccionTexto.textContent = "Hoy la suerte te dice:";

        var dichoTexto = document.createElement('em');
        dichoTexto.textContent = dichoSeleccionado;

        var dichoParrafo = document.createElement('p');
        dichoParrafo.appendChild(dichoTexto);

        // Agregar los elementos al div
        divDicho.appendChild(fechaTexto);
        divDicho.appendChild(introduccionTexto);
        divDicho.appendChild(dichoParrafo);
    }

    // Añadir evento al botón
    botonFortuna.addEventListener('click', get_fortune);
}
