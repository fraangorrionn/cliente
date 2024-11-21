/*Escribe una expresión regular que extraiga todas las URLs de un texto HTML.*/
const textoHTML = 'Visita nuestro sitio en <a href="https://www.ejemplo.com">ejemplo</a> o en https://otro-sitio.org para más información.';
const urls = textoHTML.match(/https?:\/\/[^\s"'<>]+/g);
console.log(urls); // Muestra ["https://www.ejemplo.com", "https://otro-sitio.org"]
