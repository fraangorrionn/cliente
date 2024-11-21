/*Una nueva sala de conciertos local necesita crear una
aplicación para gestionar las bandas que solicitan actuar en ella. Para ello usando
las estructuras de datos más adecuadas, deberás implementar un programa que
gestione la siguiente información:
● Bandas:
○ Nombre
○ Año de formación
○ Lista de integrantes: formada por el dni, nombre y apellido. No podrá
haber, evidentemente, dos componentes en la lista con el mismo dni.
○ Teléfono de contacto
○ Estilo
○ MostrarBanda
○ MostrarIntegrantes
Con estas bandas se quiere mantener un listado con el que se permita:
● imprimirListadoBandas
● buscarBandaPorNombre: busca una banda en la lista por su nombre.
(Debes utilizar programación funcional)
● buscarBandasPorEstilo: busca las bandas en la lista que pertenezcan
a un estilo dado. (Debes utilizar programación funcional)
● ordenarBandasPorAño: ordena la lista por año de formación
● eliminarBanda: elimina una banda dada por su nombre si esta se
encuentra en la lista
Crea los datos que necesites para hacer las pruebas. */

const banda2 = new Banda('Lastrigues', 2019, 123456789, 'Jazz');

banda1.añadirIntegrante('Alejandro', 'Gómez' , '23883999V');
banda1.añadirIntegrante('Fran', 'Rivera' , '23883949V');

banda1.mostrarBanda();
banda1.mostrarIntegrantes();


const gestion = new GestionBandas();

gestion.agregarBanda(banda1);
gestion.agregarBanda(banda2);

gestion.imprimirListadoBandas();

gestion.buscarBandaPorNombre('Lostrogos')



gestion.agregarBanda(new Banda("Los Rockeros", 1995, "123456789", "Rock"));
gestion.agregarBanda(new Banda("Los Clásicos", 2005, "987654321", "Clásica"));
gestion.agregarBanda(new Banda("Los Jazzistas", 1980, "112233445", "Jazz"));
gestion.agregarBanda(new Banda("Los Metaleros", 1990, "998877665", "Metal"));
gestion.agregarBanda(new Banda("Los Electrónicos", 2010, "223344556", "Electrónica"));

gestion.ordenarBandasPorAño();