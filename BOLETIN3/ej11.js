/*Diseña una expresión regular que valide contraseñas que contengan al menos una letra mayúscula, una letra minúscula, un número 
y un carácter especial, y que tengan entre 8 y 20 caracteres.*/

function validarContrasena(contrasena) {

    if (contrasena.length < 8 || contrasena.length > 20) {
        return false;
    }

    const mayuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const numero = /\d/;
    const caracterEspecial = /[@$!%*?&]/;

    return mayuscula.exec(contrasena) && 
           minuscula.exec(contrasena) && 
           numero.exec(contrasena) && 
           caracterEspecial.exec(contrasena);
}

let contrasena = prompt("Introduce una contraseña:");

if (validarContrasena(contrasena)) {
    alert("Contraseña válida");
} else {
    alert("Contraseña inválida");
}
