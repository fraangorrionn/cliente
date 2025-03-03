/*
Una nueva sala de conciertos local necesita crear una aplicación para gestionar las bandas que solicitan actuar en ella.
Para ello usando las estructuras de datos más adecuadas, deberás implementar un programa que gestione la siguiente información:

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
ordenarBandasPorAño: ordena la lista por año de formación

 */
var gestion = new GestionBanda();
var banda1 = new Banda('ACDC', 1990, '611-726-617', 'Rock');
var banda2 = new Banda('GunsAndRose', 1980, '611-726-618', 'Metal');

gestion.agregarBanda(banda1);
gestion.agregarBanda(banda2);

banda1.añadirIntegrante('24515987b', 'Fran', 'Rivera');
banda1.añadirIntegrante('12345678u', 'Ale', 'Gomez');

banda2.añadirIntegrante('77777777j', 'Manolo', 'Lama');
banda2.añadirIntegrante('66666666q', 'Perico', 'Martinez');

gestion.imprimirListadoBandas();
banda1.mostrarIntegrantes();
banda2.mostrarIntegrandes();
gestion.ordenarBandasPorAnyo();
gestion.buscarBandaPorNombre('ACDC');
gestion.buscarBandaPorNombre('ERHF');
gestion.imprimirListadoBandas();