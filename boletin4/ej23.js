/*En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos). 
Utiliza la estructura que sea más conveniente. 
Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en
 dicho módulo.
Calcula el número total de alumnos matriculados en todos los módulos*/

const modulos = new Map();

modulos.set("DDI", { duracion: 8, numAlumnos: 14 });
modulos.set("DWS", { duracion: 16, numAlumnos: 16 });
modulos.set("DAW", { duracion: 10, numAlumnos: 11 });
modulos.set("DWES", { duracion: 18, numAlumnos: 18 });

if (modulos.has("DWS")){
    let dwsInfo = modulos.get("DWS");
    alert(`numero de alumnos en DWS: ${dwsInfo.numAlumnos}`);
}

var totalAlumnos = 0;

modulos.forEach((info) => {
    totalAlumnos += info.numAlumnos;
});

alert(`El número total de alumnos matriculados en todos los módulos es: ${totalAlumnos}`);
