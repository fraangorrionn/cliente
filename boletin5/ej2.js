/*Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para
 mandar los datos a una nueva ventana.*/

 window.addEventListener('load', inicializar, false);

 function inicializar() {
     var form = document.createElement('form');
     form.id = 'registroForm';
     form.onsubmit = function(event) {
         event.preventDefault();
         mostrarContenido();
     };
 
     function crearInput(type, id, placeholder, required = true) {
         var label = document.createElement('label');
         label.htmlFor = id;
         label.textContent = placeholder;
         label.style.display = 'block';
 
         var input = document.createElement('input');
         input.type = type;
         input.id = id;
         input.name = id;
         input.placeholder = placeholder;
         input.required = required;
 
         form.appendChild(label);
         form.appendChild(input);
         form.appendChild(document.createElement('br'));
     }
 
     crearInput('text', 'nombre', 'Nombre');
     crearInput('text', 'apellidos', 'Apellidos');
     crearInput('text', 'usuario', 'Nombre de usuario');
     crearInput('password', 'contraseña', 'Contraseña');
     crearInput('password', 'confirmar_contraseña', 'Confirmar Contraseña');
     crearInput('number', 'dia_nac', 'Día de Nacimiento', false);
     crearInput('text', 'mes_nac', 'Mes de Nacimiento');
     crearInput('number', 'anio_nac', 'Año de Nacimiento', false);
     crearInput('text', 'sexo', 'Sexo');
     crearInput('tel', 'movil', 'Móvil');
     crearInput('email', 'correo', 'Correo Electrónico');
 
     var submitButton = document.createElement('input');
     submitButton.type = 'submit';
     submitButton.value = 'Enviar';
     form.appendChild(submitButton);
 
     document.body.appendChild(form);
 }
 
 function mostrarContenido() {
     var nombre = document.getElementById('nombre').value.toUpperCase();
     var apellidos = document.getElementById('apellidos').value.toUpperCase();
     var usuario = document.getElementById('usuario').value.toUpperCase();
     var contraseña = document.getElementById('contraseña').value;
     var confirmarContraseña = document.getElementById('confirmar_contraseña').value;
     var diaNac = document.getElementById('dia_nac').value;
     var mesNac = document.getElementById('mes_nac').value.toUpperCase();
     var anioNac = document.getElementById('anio_nac').value;
     var sexo = document.getElementById('sexo').value.toUpperCase();
     var movil = document.getElementById('movil').value;
     var correo = document.getElementById('correo').value.toUpperCase();
 
     var contenido = `
         Nombre: ${nombre}
         Apellidos: ${apellidos}
         Usuario: ${usuario}
         Contraseña: ${contraseña}
         Confirmar Contraseña: ${confirmarContraseña}
         Fecha de Nacimiento: ${diaNac} / ${mesNac} / ${anioNac}
         Sexo: ${sexo}
         Móvil: ${movil}
         Correo Electrónico: ${correo}`;
 
     alert(contenido);
 }