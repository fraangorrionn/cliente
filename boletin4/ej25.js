/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está. */

function Punto(x, y) {
    this.x = x;
    this.y = y;

    this.averiguarCuadrante = function() {
        if (this.x > 0 && this.y > 0) {
            return "Cuadrante I";
        } else if (this.x < 0 && this.y > 0) {
            return "Cuadrante II";
        } else if (this.x < 0 && this.y < 0) {
            return "Cuadrante III";
        } else if (this.x > 0 && this.y < 0) {
            return "Cuadrante IV";
        } else if (this.x === 0 && this.y !== 0) {
            return "Sobre el eje Y";
        } else if (this.y === 0 && this.x !== 0) {
            return "Sobre el eje X";
        } else {
            return "En el origen";
        }
    }
}

var coordenada1 = new Punto(-5, 1);
var coordenada2 = new Punto(1, 5);

alert(coordenada1.averiguarCuadrante());
alert(coordenada2.averiguarCuadrante());