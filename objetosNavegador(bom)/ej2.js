/*Escribir un script que mostrará el nombre del navegador , la versión y el sistema operativo que esté utilizando. 
Prueba tu programa en distintos navegadores, el objeto Navigator no está estandarizado. */

function mostrarInformacionDelNavegador() {
    const nombreNavegador = navigator.appName;
    const versionNavegador = navigator.appVersion;
    const sistemaOperativo = navigator.platform;

    alert(`Información del navegador:
    - Nombre del navegador: ${nombreNavegador}
    - Versión del navegador: ${versionNavegador}
    - Sistema operativo: ${sistemaOperativo}`);
}

mostrarInformacionDelNavegador();