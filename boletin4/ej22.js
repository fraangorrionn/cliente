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

let contenido = "Contenido de los módulos:\n";
modulos.forEach((descripcion, codigo) => {
    contenido += `${codigo}: ${descripcion}\n`;
});
alert(contenido);

let abreviaturas = "Abreviaturas de los módulos:\n";
for (let [abreviacion] of modulos) {
    abreviaturas += `${abreviacion}\n`;
}
alert(abreviaturas);

let nombresCompletos = "Nombres completos de los módulos:\n";
for (let [_, completo] of modulos) {
    nombresCompletos += `${completo}\n`;
}
alert(nombresCompletos);

if (modulos.has("DAW")) {
    alert("El módulo 'DAW' existe. Se procederá a eliminarlo.");
    modulos.delete("DAW");
} else {
    alert("El módulo 'DAW' no existe.");
}

const modulosOrdenados = new Map([...modulos.entries()].sort());
let contenidoOrdenado = "Contenido de los módulos (ordenados):\n";
modulosOrdenados.forEach((descripcion, codigo) => {
    contenidoOrdenado += `${codigo}: ${descripcion}\n`;
});
alert(contenidoOrdenado);