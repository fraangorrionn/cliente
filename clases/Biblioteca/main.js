/*Enunciado:
Desarrolla un programa que gestione una biblioteca y los libros que contiene.

Tendrás dos clases:

Clase Libro:

Atributos:
titulo: Título del libro.
autor: Autor del libro.
añoPublicacion: Año de publicación del libro.
isbn: ISBN único del libro.
disponible: Un booleano que indica si el libro está disponible o no (inicialmente en true).
Métodos:
mostrarInformacion: Muestra la información completa del libro (título, autor, año de publicación, ISBN, disponibilidad).
Clase Biblioteca:

Atributos:
nombre: Nombre de la biblioteca.
direccion: Dirección de la biblioteca.
libros: Un array que contiene todos los libros que están registrados en la biblioteca.
Métodos:
agregarLibro: Añade un libro a la biblioteca.
buscarLibroPorTitulo: Busca un libro por su título. Si lo encuentra, debe mostrar su información.
listarLibrosDisponibles: Muestra todos los libros disponibles en la biblioteca.
prestarLibro: Permite prestar un libro (lo marca como no disponible). Si el libro ya no está disponible, muestra un mensaje diciendo que no se puede prestar.
Requisitos:
No se deben permitir libros duplicados en la biblioteca (en base al ISBN).
Los libros solo pueden ser prestados si están disponibles (disponible = true).
Usa un enfoque funcional para los métodos que requieren buscar o filtrar libros. */


var libro1 = new Libro('el hobbit', 'tolkien', 1980, '1', 'Si');
var libro2 = new Libro('sangre y fuego', 'martin', 1990, '2', 'Si');
var libro3 = new Libro('el cosmere', 'sanderson', 1970, '3', 'No');
var biblioteca = new Biblioteca('antonio machado', 'utrera 32');


biblioteca.añadirLibro(libro1);
biblioteca.añadirLibro(libro2);

console.log("busqueda de libro por titulo");
biblioteca.buscarLibroPorTitulo("el hobbit");
biblioteca.listarLibrosDisponibles();

// Prestar un libro
biblioteca.prestarLibro('1');

// Intentar prestar el mismo libro nuevamente
biblioteca.prestarLibro('1');