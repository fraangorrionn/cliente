window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el elemento <h1> dentro del <body>
    let h1Element = document.createElement("h1");
    h1Element.textContent = "Encabezado Principal";
    document.body.appendChild(h1Element);

    // Crear el elemento <p> dentro del <body>
    let pElement = document.createElement("p");
    document.body.appendChild(pElement);

    // Crear el texto y enlaces dentro del párrafo <p>
    let text1 = document.createTextNode("Texto 1 ");
    pElement.appendChild(text1);

    let link1 = document.createElement("a");
    link1.href = "#";
    link1.textContent = "Enlace 1";
    pElement.appendChild(link1);

    let text2 = document.createTextNode(" Texto 2 ");
    pElement.appendChild(text2);

    let link2 = document.createElement("a");
    link2.href = "#";
    link2.textContent = "Enlace 2";
    pElement.appendChild(link2);

    let text3 = document.createTextNode(" Texto 3 ");
    pElement.appendChild(text3);

    let link3 = document.createElement("a");
    link3.href = "#";
    link3.textContent = "Enlace 3";
    pElement.appendChild(link3);

    let text4 = document.createTextNode(" Texto 4");
    pElement.appendChild(text4);
}