/*Enunciado:
Desarrolla un sistema de gestión de vehículos en una empresa de alquiler. La empresa tiene diferentes tipos de vehículos: Coches y Motocicletas.

Tendrás las siguientes clases:

Clases:
Clase Vehiculo (Clase base):

Atributos:
marca: Marca del vehículo.
modelo: Modelo del vehículo.
año: Año de fabricación del vehículo.
precioPorDia: Precio por día de alquiler.
Métodos:
mostrarInformacion: Muestra toda la información del vehículo.
calcularAlquiler: Calcula el precio de alquiler en función de los días de alquiler.
Clase Coche (Hereda de Vehiculo):

Atributos:
numeroDePuertas: Número de puertas del coche.
tipo: Tipo de coche (por ejemplo: sedán, SUV, etc.).
Métodos:
mostrarInformacion: Sobrescribe el método de Vehiculo para mostrar información adicional sobre el coche (número de puertas y tipo de coche).
calcularAlquiler: Sobrescribe el método de Vehiculo para aplicar un descuento si el alquiler supera 7 días (descuento del 10%).
Clase Motocicleta (Hereda de Vehiculo):

Atributos:
cilindrada: Cilindrada de la motocicleta.
tipo: Tipo de motocicleta (por ejemplo: deportiva, cruiser, etc.).
Métodos:
mostrarInformacion: Sobrescribe el método de Vehiculo para mostrar información adicional sobre la motocicleta (cilindrada y tipo de moto).
calcularAlquiler: Sobrescribe el método de Vehiculo para aplicar un descuento si el alquiler supera 5 días (descuento del 5%).
Requisitos:
Debes usar herencia para las clases Coche y Motocicleta.
Los métodos sobrescritos deben permitir modificar o añadir comportamiento específico para cada tipo de vehículo.
El método calcularAlquiler debe aplicar un descuento si el alquiler es superior a los días indicados (7 para coches y 5 para motocicletas).
 */


// Crear vehículos
const coche1 = new Coche('Toyota', 'Corolla', 2022, 50, 4, 'Sedán');
const moto1 = new Motocicleta('Yamaha', 'MT-09', 2021, 30, 847, 'Deportiva');

// Mostrar información de los vehículos
console.log('Información del Coche:');
coche1.mostrarInformacion();

console.log('\nInformación de la Motocicleta:');
moto1.mostrarInformacion();

// Calcular el alquiler para un coche por 10 días
const alquilerCoche = coche1.calcularAlquiler(10);
console.log(`\nEl alquiler del coche por 10 días es: ${alquilerCoche}€`);

// Calcular el alquiler para una motocicleta por 6 días
const alquilerMoto = moto1.calcularAlquiler(6);
console.log(`\nEl alquiler de la motocicleta por 6 días es: ${alquilerMoto}€`);