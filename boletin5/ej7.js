/*Crear   un   formulario   con   los   botones   de   opción   que   representan   diferentes   colores. Utilice   el   atributo 
  id   para   cada   botón   de   radio.   Cambiar   el   fondo   del   formulario   al   color seleccionado. */

  window.addEventListener('load', inicializar);

  function inicializar() {
      // Crear el contenedor del formulario
      const formContainer = document.createElement('div');
      formContainer.className = 'form-container';
      formContainer.id = 'form-container';
      document.body.appendChild(formContainer);
  
      // Crear el formulario
      const colorForm = document.createElement('form');
      colorForm.id = 'colorForm';
      formContainer.appendChild(colorForm);
  
      // Título del formulario
      const titulo = document.createElement('h1');
      titulo.textContent = 'Selecciona un color';
      colorForm.appendChild(titulo);
  
      // Opciones de colores
      const colores = [
          { id: 'rojo', nombre: 'Rojo', valor: '#FF0000' },
          { id: 'verde', nombre: 'Verde', valor: '#00FF00' },
          { id: 'azul', nombre: 'Azul', valor: '#0000FF' },
          { id: 'amarillo', nombre: 'Amarillo', valor: '#FFFF00' },
      ];
  
      const opcionesContenedor = document.createElement('div');
      opcionesContenedor.className = 'color-options';
      colorForm.appendChild(opcionesContenedor);
  
      colores.forEach((color) => {
          // Crear input de tipo radio
          const input = document.createElement('input');
          input.type = 'radio';
          input.id = color.id;
          input.name = 'color';
          input.value = color.valor;
  
          // Crear etiqueta para el radio
          const label = document.createElement('label');
          label.setAttribute('for', color.id);
          label.textContent = color.nombre;
  
          // Añadir input y label al contenedor
          opcionesContenedor.appendChild(input);
          opcionesContenedor.appendChild(label);
      });
  
      // Crear botón de envío
      const submitButton = document.createElement('input');
      submitButton.type = 'submit';
      submitButton.value = 'Confirmar';
      colorForm.appendChild(submitButton);
  
      // Cambiar el color del fondo del formulario según la selección
      colorForm.addEventListener('change', (event) => {
          if (event.target.name === 'color') {
              const colorSeleccionado = event.target.value;
              formContainer.style.backgroundColor = colorSeleccionado;
          }
      });
  
      // Mostrar alerta con el color seleccionado al enviar el formulario
      colorForm.addEventListener('submit', (event) => {
          event.preventDefault(); // Prevenir recarga de la página
          const colorSeleccionado = document.querySelector('input[name="color"]:checked');
          if (colorSeleccionado) {
              alert(`Color seleccionado: ${colorSeleccionado.id.toUpperCase()}`);
          } else {
              alert('Por favor, selecciona un color.');
          }
      });
  }
  