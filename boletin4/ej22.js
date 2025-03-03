/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en 
Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos*/


const modulos = new Map();
modulos.set("DWECL", "Desarrollo Web en Entorno Cliente");
modulos.set("DAW", "Despliegue de Aplicaciones Web");
modulos.set("DDI", "Diseño de Interfaces");
modulos.set("DWES", "Desarrollo Web en Entorno Servidor");

alert(`Hay ${modulos.size} módulos almacenados.`);

var contenido = "contenido de los modulos: \n";

modulos.forEach((clave, descripcion) => {
    contenido += `${clave}, ${descripcion}\n`;
});
alert(contenido);

var abreviaturas = "abreviaturas de los modulos: \n";
for(let [clave] of modulos){
    abreviaturas += `${clave}\n`;
}
alert(abreviaturas);

var nombresCompletos = "nombres completos de los modulos: \n";
for(let [_, descripcion] of modulos){
    nombresCompletos += `${descripcion}\n`;
}
alert(nombresCompletos);

if(modulos.has("DAW")){
    alert("El modulo daw sera eliminado")
    modulos.delete("DAW");
}else{
    alert("el modulo DAW no existe");
}

var modulosOrdenados = new Map([...modulos.entries()].sort());
let contenidoOrdenado = "contenido de los modulos ordenados: \n";
modulosOrdenados.forEach((clave, descripcion) => {
    contenidoOrdenado += `${clave}, ${descripcion}\n`;
});
alert(contenidoOrdenado);
