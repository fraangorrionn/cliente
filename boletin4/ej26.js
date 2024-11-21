/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo
 y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/

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

function Rectangulo(coordenada1, coordenada2) {
    this.coordenada1 = coordenada1;
    this.coordenada2 = coordenada2;

    this.calcularBase = function() {
        return Math.abs(this.coordenada2.x - this.coordenada1.x);
    }

    this.calcularAltura = function() {
        return Math.abs(this.coordenada2.y - this.coordenada1.y);
    }

    this.perimetro = function() {
        let base = this.calcularBase();
        let altura = this.calcularAltura();
        return 2 * (base + altura);
    }

    this.area = function() {
        let base = this.calcularBase();
        let altura = this.calcularAltura();
        return base * altura;
    }
}

var rectangulo1 = new Rectangulo(coordenada1, coordenada2);

alert("la base del rectángulo es: " + rectangulo1.calcularBase());
alert("El perímetro del rectángulo es: " + rectangulo1.perimetro());
alert("El área del rectángulo es: " + rectangulo1.area());
