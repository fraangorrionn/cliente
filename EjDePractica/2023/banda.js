class Banda {
    constructor(nombre, anioFormacion, telefono, estilo) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.integrantes = new Map();
        this.dnisRegistrados = new Set(); // Usamos un Set para mantener los DNI únicos
        this.telefono = telefono;
        this.estilo = estilo;
    }

    añadirIntegrante(nombre, apellido, dni) {
        if (this.dnisRegistrados.has(dni)) {
            alert('Error: el DNI ' + dni + ' ya está registrado.');
            return;
        } else {
            this.integrantes.set(dni, { nombre, apellido });
            this.dnisRegistrados.add(dni);
            alert('El integrante ' + nombre + ' ha sido registrado.');
        }
    }

    mostrarBanda() {
        alert('La Banda es: ' + this.nombre + ', Año de Formación: ' + this.anioFormacion + ', Teléfono: ' + this.telefono + ', Estilo de Música: ' + this.estilo);
    }

    mostrarIntegrantes() {
        let mensaje = 'Integrantes:\n';
        // Iteramos sobre el Map para mostrar cada integrante
        this.integrantes.forEach((valor, clave) => {
            mensaje += 'DNI: ' + clave + ', Nombre: ' + valor.nombre + ' ' + valor.apellido + '\n';
        });
        alert(mensaje);
    }
}

class GestionBandas {
    constructor() {
        this.bandas = [];
    }

    agregarBanda(banda) {
        this.bandas.push(banda);
        alert('Banda ' + banda.nombre + ' agregada.');
    }

    imprimirListadoBandas() {
        if (this.bandas.length === 0) {
            alert('No hay bandas registradas.');
        } else {
            let listado = 'Listado de las bandas:\n';
            this.bandas.forEach(banda => {
                listado += banda.nombre + '\n';
            });
            alert(listado);
        }
    }

    buscarBandaPorNombre(nombre) {
        const bandaEncontrada = this.bandas.find(banda => banda.nombre === nombre);
        if (bandaEncontrada) {
            bandaEncontrada.mostrarBanda();
        } else {
            alert(`No se encontró ninguna banda con el nombre: ${nombre}`);
        }
    }

    buscarBandasPorEstilo(estilo) {
        const bandasEncontradas = this.bandas.filter(banda => banda.estilo === estilo);
        if (bandasEncontradas.length > 0) {
            let mensaje = `Bandas con estilo "${estilo}":\n`;
            bandasEncontradas.forEach(banda => banda.mostrarBanda());
        } else {
            alert(`No se encontraron bandas con el estilo: ${estilo}`);
        }
    }

    ordenarBandasPorAño() {
        this.bandas.sort((a, b) => a.anioFormacion - b.anioFormacion);
        alert("Bandas ordenadas por año de formación:");
        this.imprimirListadoBandas();
    }

    eliminarBanda(nombre) {
        const index = this.bandas.findIndex(banda => banda.nombre === nombre);
        if (index !== -1) {
            this.bandas.splice(index, 1);
            alert(`La banda ${nombre} ha sido eliminada.`);
        } else {
            alert(`No se encontró ninguna banda con el nombre: ${nombre}`);
        }
    }
}

// Ejemplo de uso
const gestion = new GestionBandas();
const banda1 = new Banda('Los Rockeros', 2000, '123-456-789', 'Rock');
const banda2 = new Banda('Los Melódicos', 1995, '987-654-321', 'Pop');

gestion.agregarBanda(banda1);
gestion.agregarBanda(banda2);

banda1.añadirIntegrante('Juan', 'Pérez', '12345678A');
banda1.añadirIntegrante('María', 'Gómez', '87654321B');

gestion.imprimirListadoBandas();
banda1.mostrarIntegrantes();
gestion.ordenarBandasPorAño();
gestion.eliminarBanda('Los Rockeros');
gestion.imprimirListadoBandas();
