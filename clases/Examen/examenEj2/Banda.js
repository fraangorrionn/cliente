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
    constructor(nombre, anioFormacion, telefono, estilo) {
        this.nombre = nombre;
        this.anioFormacion = anioFormacion;
        this.telefono = telefono;
        this.estilo = estilo;
        this.integrantes = [];  // Usamos un array para los integrantes
        this.dnisRegistrados = [];  // Usamos un array para almacenar los DNI
    }

    añadirIntegrante(nombre, apellido, dni) {
        // Comprobamos si el DNI ya está registrado en el array de DNI
        if (this.dnisRegistrados.includes(dni)) {
            console.log('Error: el DNI ' + dni + ' ya está registrado.');
            return;
        } else {
            // Añadimos el integrante como un objeto en el array de integrantes
            this.integrantes.push({ nombre, apellido, dni });
            this.dnisRegistrados.push(dni);  // Añadimos el DNI al array de DNI registrados
            console.log('El integrante ' + nombre + ' ha sido registrado.');
        }
    }

    mostrarBanda() {
        console.log('La Banda es: ' + this.nombre + ', Año de formación: ' + this.anioFormacion + ', Teléfono: ' + this.telefono + ', Estilo de música: ' + this.estilo);
    }

    mostrarIntegrantes() {
        let mensaje = 'Integrantes: ';
        this.integrantes.forEach(integrante => {
            mensaje += `DNI: ${integrante.dni}, Nombre: ${integrante.nombre} ${integrante.apellido}\n`;
        });
        console.log(mensaje);
    }
}


