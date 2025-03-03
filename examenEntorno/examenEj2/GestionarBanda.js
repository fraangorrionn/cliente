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
        alert('Banda ' + banda.nombre + ' agregada.');
    }

    imprimirListadoBandas(){
        if (this.bandas.length === 0) {
            alert('no hay  bandas registradas');
        } else {
            let listado = 'listado de las bandas:\n';
            this.bandas.forEach(banda => {
                listado += banda.nombre + '\n';
            });
            alert(listado);
        }
    }

    buscarBandaPorNombre(nombre) {
        var bandaEncontrada = this.bandas.find(banda => banda.nombre === nombre);
        if (bandaEncontrada) {
            bandaEncontrada.mostrarBanda();
        } else {
            alert(`no se encontro ninguna banda con el nombre: ${nombre}`);
        }
    }

    ordenarBandasPorAnyo(){
        this.bandas.sort((a, b) => a.anioFormacion - b.anioFormacion);
        alert("bandas ordenadas por año de formacion: ")
        this.imprimirListadoBandas();

    }
}