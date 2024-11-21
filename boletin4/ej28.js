/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método
 para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota
  (puede tener la misma nota en varios módulos). */

  class Alumno {
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
}

let alumno = new Alumno("Juan Perez", "12345678A", "2º Bachillerato", {
    Matematicas: 8.5,
    Historia: 9,
    Biologia: 7.5,
    Fisica: 9
});

alert(alumno.imprimir());

alert(`Nota Media: ${alumno.notaMedia()}`);

const mejorNotaInfo = alumno.mejorNota();
alert(`Mejor Nota: ${mejorNotaInfo.mejorNota}, Módulos: ${mejorNotaInfo.modulos.join(', ')}`);
