/*Crear   un   formulario   que   utiliza   un   campo   de   entrada   de   texto, que   pida   al   usuario   que escriba   su   nombre   en  
 letras   mayúsculas.   El   botón   de   envío   será   una   imagen.   Validar que   el   formulario   no   está   vacío   y   que   el   
 usuario   ha   escrito   su   nombre   sólo   con   letras mayúsculas. Envíe el formulario a un programa de servidor si es correcto. */

window.addEventListener('click', inicializar, false);

function inicializar() {
    var formulario = document.getElementById('nombreForm');
    var nombreInput = document.getElementById('nombre');
    var errorMensaje = document.getElementById('error');
 
     formulario.addEventListener('submit', (event) => {
         event.preventDefault();
 
         var nombre = nombreInput.value.trim();
 
         if (nombre === "") {
             errorMensaje.textContent = "El campo no puede estar vacío.";
             return;
         }
 
         for (let i = 0; i < nombre.length; i++) {
            var char = nombre[i];
             if (
                 !(
                     (char >= "A" && char <= "Z") ||
                     char === " " || 
                     ["Á", "É", "Í", "Ó", "Ú", "Ñ"].includes(char) 
                 )
             ) {
                 errorMensaje.textContent =
                     "El nombre debe estar en mayúsculas y solo contener letras y espacios.";
                 return;
             }
         }

         errorMensaje.textContent = "";
         formulario.submit();
     });
 }