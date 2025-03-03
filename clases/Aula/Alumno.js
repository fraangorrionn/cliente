/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método
 para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota
  (puede tener la misma nota en varios módulos). */

class Alumno {
    constructor(nombre, apellido, dni, notas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.notas = notas; // Array de notas
    }

    // Método para imprimir el alumno
    imprimir() {
        return `Nombre: ${this.nombre} ${this.apellido}, DNI: ${this.dni}, Notas: ${this.notas.join(", ")}`;
    }

    notaMedia() {
        let suma = 0;
        let contador = this.notas.length;

        for (let i = 0; i < contador; i++) {
            suma += this.notas[i];
        }

        return suma / contador;
    }


    mejorNota(modulos) {
        let maxNota = Math.max(...this.notas); // Obtener la mejor nota
        let modulosConMejorNota = [];

        // Encontrar los módulos con la mejor nota
        for (let i = 0; i < this.notas.length; i++) {
            if (this.notas[i] === maxNota) {
                modulosConMejorNota.push(modulos[i]);
            }
        }

        return { mejorNota: maxNota, modulos: modulosConMejorNota };
    }

    // Método para ordenar las notas del alumno
    ordenarNotas() {
        return this.notas.sort((a, b) => a - b);  // Ordena de menor a mayor
    }
}


































/*class Alumno {
    constructor(nombre, dni, curso, notas) {
        this.nombre = nombre;
        this.dni = dni;
        this.curso = curso;
        this.notas = notas; // { modulo: nota, ... 
    }

    imprimir() {
        return `Nombre: ${this.nombre}, DNI: ${this.dni}, Curso: ${this.curso}, Notas: ${JSON.stringify(this.notas)}`;
    }

    notaMedia() {
        let sumaNota = 0;
        let totalModulos = 0;

        for (let nota of Object.values(this.notas)) {
            sumaNota += nota;
            totalModulos++;
        }

        return totalModulos > 0 ? (sumaNota / totalModulos) : 0;
    }

    mejorNota() {

        let modulos = Object.keys(this.notas);
        let mejorNota = this.notas[modulos[0]];
        let mejoresModulos = [modulos[0]];

        for (let i = 1; i < modulos.length; i++) {
            let modulo = modulos[i];
            let nota = this.notas[modulo];

            if (nota > mejorNota) {
                mejorNota = nota;
                mejoresModulos = [modulo];
            } else if (nota === mejorNota) {
                mejoresModulos.push(modulo);
            }
        }

        return { mejorNota, modulos: mejoresModulos };
    }
}*/