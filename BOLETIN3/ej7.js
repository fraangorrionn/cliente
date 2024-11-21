/*Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. 
Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.*/

var emailCorrecto = false;

while (!emailCorrecto) {

    let email = prompt("Introduce una dirección de correo electrónico:");

    if (validarEmail(email)) {

        let partesEmail = email.split("@");
        let usuario = partesEmail[0];
        let servidor = partesEmail[1];
        emailCorrecto = true;

        alert("Usuario: " + usuario);
        alert("Servidor: " + servidor);
    } else {

        alert("intenta de nuevo.");
    }
}

function validarEmail(email) {
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,7}$/;
    return regex.test(email);
}