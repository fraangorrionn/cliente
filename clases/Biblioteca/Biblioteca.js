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


class Biblioteca{
    constructor(nombre, direccion){
        this.nombre = nombre;
        this.direccion = direccion;
        this.libros = [];
    }

    añadirLibro(libro) {
        this.libros.push(libro);
        console.log('Libro ' + libro.titulo + ' agregado.');
    }

    buscarLibroPorTitulo(titulo){
        var libroEncontrado = this.libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
        if (libroEncontrado) {
            libroEncontrado.mostrarInformacion();
        } else {
            console.log(`No se encontró ningun libro con el titulo: ${titulo}`);
        }
    }

    listarLibrosDisponibles() {
        const disponibles = this.libros.filter(libro => libro.disponible);
        if (disponibles.length === 0) {
            console.log('No hay libros disponibles actualmente.');
        } else {
            console.log('Libros disponibles:');
            disponibles.forEach(libro => libro.mostrarInformacion());
        }
    }

    prestarLibro(isbn) {
        const libro = this.libros.find(l => l.isbn === isbn);
        if (libro) {
            if (libro.disponible) {
                libro.disponible = false;
                console.log(`El libro "${libro.titulo}" ha sido prestado.`);
            } else {
                console.log(`El libro "${libro.titulo}" no está disponible para préstamo.`);
            }
        } else {
            console.log('No se ha encontrado el libro con el ISBN proporcionado.');
        }
    }
}