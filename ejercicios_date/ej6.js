/*Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.*/

var fecNac = new Date(window.prompt("Introduce tu fecha de nacimiento en formato yyyy-mm-dd"));

function diasSemanaCumpleaños(fecNac) {
    let añoActual = new Date().getFullYear();
    let resultado = [];

    for (let i = 0; i < 50; i++) {
        let añoCumple = añoActual + i;
        let proximoCumple = new Date(añoCumple, fecNac.getMonth(), fecNac.getDate());

        let diaSemana = proximoCumple.getDay();

        let diasSemanaTexto = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        resultado.push(`Cumpleaños ${i + 1} (${añoCumple}): ${diasSemanaTexto[diaSemana]}`);
    }

    return resultado;
}

let diasCumpleaños = diasSemanaCumpleaños(fecNac);

alert(diasCumpleaños.join('\n'));