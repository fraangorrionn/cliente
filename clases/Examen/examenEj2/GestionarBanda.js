/*Bandas:
Nombre
Año de formación
Integrantes: contiene el dni, nombre y apellido de cada uno de los integrantes. No podrá haber, evidentemente, dos componentes
 con el mismo dni. Elige la estructura más adecuada.
Teléfono de contacto 
Estilo
MostrarBanda
MostrarIntegrantes

Con estas bandas se quiere mantener un listado con el que se permita:

imprimirListadoBandas
buscarBandaPorNombre: busca una banda en la lista por su nombre. (Debes utilizar programación funcional)
ordenarBandasPorAño: ordena la lista por año de formación */ 

class GestionBanda {
    constructor() {
        this.bandas = [];
    }

    agregarBanda(banda) {
        this.bandas.push(banda);
        console.log('Banda ' + banda.nombre + ' agregada.');
    }

    imprimirListadoBandas(){
        if (this.bandas.length === 0) {
            console.log('No hay bandas registradas.');
        } else {
            let listado = 'Listado de las bandas:\n';
            this.bandas.forEach(banda => {
                listado += `${banda.nombre} (Año de formación: ${banda.anioFormacion})\n`;
            });
            console.log(listado);
        }
    }

    buscarBandaPorNombre(nombre) {
        // Buscamos sin distinguir entre mayúsculas y minúsculas
        var bandaEncontrada = this.bandas.find(banda => banda.nombre.toLowerCase() === nombre.toLowerCase());
        if (bandaEncontrada) {
            bandaEncontrada.mostrarBanda();
        } else {
            console.log(`No se encontró ninguna banda con el nombre: ${nombre}`);
        }
    }

    ordenarBandasPorAnyo(){
        this.bandas.sort((a, b) => a.anioFormacion - b.anioFormacion);
        console.log("Bandas ordenadas por año de formación:");
        this.imprimirListadoBandas();
    }
}
