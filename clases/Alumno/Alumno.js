/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método
 para imprimir un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota
  (puede tener la misma nota en varios módulos). */


class Alumno{
    constructor(nombre, apellido, dni, curso, notas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.curso = curso;
        this.notas = notas;
    }

    imprimir(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Dni: ${this.dni}, Curso: ${this.curso}, Notas: ${this.notas.join(" ,")}`;

    }

    notaMedia(){
        var suma = 0;
        let contador = this.notas.length;
        for (let i = 0; i < contador; i++) {
            suma += this.notas[i];
            
        }
        return suma/contador;
    }

    mejorNota(modulos){
        let maxNota = Math.max(...this.notas);
        let modulosConMejorNota = [];
        for (let i = 0; i < this.notas.length; i++) {
            if(this.notas[i]=== maxNota){
                modulosConMejorNota.push(modulos[i]);
            }
        }
        return {mejorNota : maxNota, modulos : modulosConMejorNota};
    }
    
}
