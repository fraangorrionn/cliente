/*Usa DOM para crear dinámicamente un enlace link y pon sus atributos. Usa DOM para coger los atributos y mostrar su valor en un Div creado al efecto. */

document.addEventListener('DOMContentLoaded', () => {

    const enlace = document.createElement('a');
    enlace.href = "https://www.ejemplo.com";
    enlace.target = "_blank";
    enlace.textContent = "Visita Ejemplo";
    enlace.style.display = "block";
    enlace.style.margin = "20px";
    document.body.appendChild(enlace);

    const divAtributos = document.createElement('div');
    divAtributos.style.border = "1px solid #ccc";
    divAtributos.style.padding = "10px";
    divAtributos.style.marginTop = "10px";
    document.body.appendChild(divAtributos);

    const mostrarAtributos = () => {
        divAtributos.innerHTML = "";

        const atributos = enlace.attributes;
        for (let i = 0; i < atributos.length; i++) {
            const atributo = atributos[i];
            const parrafo = document.createElement('p');
            parrafo.textContent = `${atributo.name}: ${atributo.value}`;
            divAtributos.appendChild(parrafo);
        }
    };

    mostrarAtributos();

    enlace.addEventListener('click', (evento) => {
        evento.preventDefault(); 
        enlace.setAttribute('title', 'Haz clic para visitar Ejemplo');
        mostrarAtributos();
    });
});