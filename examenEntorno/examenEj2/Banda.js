/*
Bandas:
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
class Banda {
    constructor(nombre, anioFormacion, telefono, estilo, dni) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.telefono = telefono;
        this.estilo = estilo;
        this.integrantes = new Map();
        this.dnisRegistrados = new Set();
    }

    añadirIntegrante(nombre, apellido, dni) {
        if (this.dnisRegistrados.has(dni)) {
            alert('error el dni ' + dni + ' ya esta registrado.');
            return;
        } else {
            this.integrantes.set(dni, { nombre, apellido });
            this.dnisRegistrados.add(dni);
            alert('el integrante ' + nombre + ' ha sido registrado.');
        }
    }

    mostrarBanda() {
        alert('la Banda es: ' + this.nombre + ', año de formacion: ' + this.anioFormacion + ', telefono: ' + this.telefono + ', estilo de musica: ' + this.estilo);
    }

    mostrarIntegrantes() {
        let mensaje = 'Integrantes';
        this.integrantes.forEach((valor, clave) => {
            mensaje += 'dni: ' + clave + ', nombre: ' + valor.nombre + ' ' + valor.apellido ;
        });
        alert(mensaje);
    }
}

