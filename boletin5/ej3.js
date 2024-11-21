/*Añadir un campo de texto en el ejercicio anterior,  al lado de la fecha de nacimiento en el que el usuario no pueda
 escribir y aparezca la edad del usuario. */
 window.addEventListener('load', inicializar, false);

 function inicializar() {
     var form = document.createElement('form');
     form.id = 'registroForm';
     form.onsubmit = function (event) {
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
 
     // Fecha de nacimiento
     var labelFecha = document.createElement('label');
     labelFecha.textContent = 'Fecha de Nacimiento';
     form.appendChild(labelFecha);
 
     var diaInput = document.createElement('input');
     diaInput.type = 'number';
     diaInput.id = 'dia_nac';
     diaInput.name = 'dia_nac';
     diaInput.placeholder = 'Día';
     diaInput.min = 1;
     diaInput.max = 31;
     diaInput.required = true;
 
     var mesInput = document.createElement('select');
     mesInput.id = 'mes_nac';
     mesInput.name = 'mes_nac';
     mesInput.required = true;
     mesInput.innerHTML = `
         <option value="">Mes</option>
         <option value="1">Enero</option>
         <option value="2">Febrero</option>
         <option value="3">Marzo</option>
         <option value="4">Abril</option>
         <option value="5">Mayo</option>
         <option value="6">Junio</option>
         <option value="7">Julio</option>
         <option value="8">Agosto</option>
         <option value="9">Septiembre</option>
         <option value="10">Octubre</option>
         <option value="11">Noviembre</option>
         <option value="12">Diciembre</option>
     `;
 
     var anioInput = document.createElement('input');
     anioInput.type = 'number';
     anioInput.id = 'anio_nac';
     anioInput.name = 'anio_nac';
     anioInput.placeholder = 'Año';
     anioInput.min = 1900;
     anioInput.max = new Date().getFullYear();
     anioInput.required = true;
 
     var edadInput = document.createElement('input');
     edadInput.type = 'text';
     edadInput.id = 'edad';
     edadInput.placeholder = 'Edad';
     edadInput.readOnly = true;
 
     form.appendChild(diaInput);
     form.appendChild(mesInput);
     form.appendChild(anioInput);
     form.appendChild(edadInput);
     form.appendChild(document.createElement('br'));
 
     crearInput('text', 'sexo', 'Sexo');
     crearInput('tel', 'movil', 'Móvil');
     crearInput('email', 'correo', 'Correo Electrónico');
 
     var submitButton = document.createElement('input');
     submitButton.type = 'submit';
     submitButton.value = 'Enviar';
     form.appendChild(submitButton);
 
     document.body.appendChild(form);
 
     // Calcular edad automáticamente
     diaInput.addEventListener('input', calcularEdad);
     mesInput.addEventListener('input', calcularEdad);
     anioInput.addEventListener('input', calcularEdad);
 }
 
 function calcularEdad() {
    var dia = parseInt(document.getElementById('dia_nac').value) || 0;
    var mes = parseInt(document.getElementById('mes_nac').value) || 0;
    var anio = parseInt(document.getElementById('anio_nac').value) || 0;
 
     if (dia && mes && anio) {
        var hoy = new Date();
         var fechaNacimiento = new Date(anio, mes - 1, dia);
         let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
         var mesDiferencia = hoy.getMonth() - fechaNacimiento.getMonth();
         if (mesDiferencia < 0 || (mesDiferencia === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
             edad--;
         }
         document.getElementById('edad').value = edad > 0 ? edad : "Fecha inválida";
     } else {
         document.getElementById('edad').value = "";
     }
 }
 
 function mostrarContenido() {
    var nombre = document.getElementById('nombre').value.toUpperCase();
    var apellidos = document.getElementById('apellidos').value.toUpperCase();
    var usuario = document.getElementById('usuario').value.toUpperCase();
    var contraseña = document.getElementById('contraseña').value;
    var confirmarContraseña = document.getElementById('confirmar_contraseña').value;
    var diaNac = document.getElementById('dia_nac').value;
    var mesNac = document.getElementById('mes_nac').value;
    var anioNac = document.getElementById('anio_nac').value;
    var sexo = document.getElementById('sexo').value.toUpperCase();
    var movil = document.getElementById('movil').value;
    var correo = document.getElementById('correo').value.toUpperCase();
    var edad = document.getElementById('edad').value;
 
    var contenido = `
        <h1>Datos Registrados</h1>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Apellidos:</strong> ${apellidos}</p>
        <p><strong>Usuario:</strong> ${usuario}</p>
        <p><strong>Contraseña:</strong> ${contraseña}</p>
        <p><strong>Confirmar Contraseña:</strong> ${confirmarContraseña}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${diaNac} / ${mesNac} / ${anioNac}</p>
        <p><strong>Edad:</strong> ${edad} años</p>
        <p><strong>Sexo:</strong> ${sexo}</p>
        <p><strong>Móvil:</strong> ${movil}</p>
        <p><strong>Correo Electrónico:</strong> ${correo}</p>
     `;
 
     var nuevaVentana = window.open("", "_blank");
     nuevaVentana.document.write(contenido);
     nuevaVentana.document.close();
 }
 