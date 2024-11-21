/*Una nueva sala de conciertos local necesita crear una aplicación para gestionar las
bandas que solicitan actuar en ella. Para ello usando las estructuras de datos más
adecuadas, deberás implementar un programa que gestione la siguiente
información:
● Bandas:
○ Nombre
○ Año de formación○ Integrantes: contiene el dni, nombre y apellido de cada uno de los
integrantes. No podrá haber, evidentemente, dos componentes con
el mismo dni. Elige la estructura adecuada.
○ Teléfono de contacto
○ Estilo
○ MostrarBanda
○ MostrarIntegrantes
Con estas bandas se quiere mantener un listado con el que se permita:
● imprimirListadoBandas
● buscarBandaPorNombre: busca una banda en la lista por su nombre.
(Debes utilizar programación funcional)
● ordenarBandasPorAño: ordena la lista por año de formación */

class Banda {
    constructor(nombre, añoFormacion, integrantes, telefonoContacto, estilo) {
        this.nombre = nombre;
        this.añoFormacion = añoFormacion;
        this.integrantes = new Map(); // Usaremos un Map para evitar duplicados por DNI
        this.telefonoContacto = telefonoContacto;
        this.estilo = estilo;

        // Agregar los integrantes si se proporciona una lista al crear la banda
        if (integrantes) {
            integrantes.forEach(integrante => this.agregarIntegrante(integrante));
        }
    }

    agregarIntegrante(integrante) {
        if (this.integrantes.has(integrante.dni)) {
            alert(`El integrante con DNI ${integrante.dni} ya está en la banda.`);
        } else {
            this.integrantes.set(integrante.dni, integrante);
        }
    }

    mostrarBanda() {
        alert(`Nombre: ${this.nombre}`);
        alert(`Año de formación: ${this.añoFormacion}`);
        alert(`Teléfono de contacto: ${this.telefonoContacto}`);
        alert(`Estilo: ${this.estilo}`);
        this.mostrarIntegrantes();
    }

    mostrarIntegrantes() {
        console.log("Integrantes:");
        this.integrantes.forEach(integrante => {
            alert(`DNI: ${integrante.dni}, Nombre: ${integrante.nombre}, Apellido: ${integrante.apellido}`);
        });
    }
}

// Crear una lista de bandas
let listaBandas = [];

// Función para agregar una nueva banda
function agregarBanda(nombre, añoFormacion, integrantes, telefonoContacto, estilo) {
    const nuevaBanda = new Banda(nombre, añoFormacion, integrantes, telefonoContacto, estilo);
    listaBandas.push(nuevaBanda);
}

// Función para imprimir el listado de bandas
function imprimirListadoBandas() {
    listaBandas.forEach(banda => banda.mostrarBanda());
}

// Función para buscar una banda por nombre (programación funcional)
function buscarBandaPorNombre(nombre) {
    const bandaEncontrada = listaBandas.find(banda => banda.nombre.toLowerCase() === nombre.toLowerCase());
    if (bandaEncontrada) {
        bandaEncontrada.mostrarBanda();
    } else {
        alert(`No se encontró una banda con el nombre "${nombre}".`);
    }
}

// Función para ordenar las bandas por año de formación
function ordenarBandasPorAño() {
    listaBandas.sort((a, b) => a.añoFormacion - b.añoFormacion);
    alert("Bandas ordenadas por año de formación:");
    imprimirListadoBandas();
}

// Ejemplo de uso
agregarBanda("Banda A", 2000, [
    { dni: "12345678A", nombre: "Juan", apellido: "Pérez" },
    { dni: "87654321B", nombre: "Ana", apellido: "Gómez" }
], "123-456-789", "Rock");

agregarBanda("Banda B", 2010, [
    { dni: "23456789C", nombre: "Luis", apellido: "Martínez" }
], "987-654-321", "Pop");

// Mostrar el listado de bandas
imprimirListadoBandas();

// Buscar una banda por nombre
buscarBandaPorNombre("Banda A");

// Ordenar las bandas por año de formación y mostrar el listado ordenado
ordenarBandasPorAño();