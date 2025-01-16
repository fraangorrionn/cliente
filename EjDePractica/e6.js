window.addEventListener('load', inicializar);

function inicializar() {
    // Crear el formulario
    const form = document.createElement('form');
    form.id = 'loginForm';

    // Crear el título
    const title = document.createElement('h1');
    title.textContent = 'Login DWC';

    // Crear el label y el input para el correo electrónico
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Correo Electrónico:';
    emailLabel.setAttribute('for', 'email');

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.placeholder = 'usuario@dwc.com';
    emailInput.required = true;

    // Crear el label y el input para el departamento
    const departmentLabel = document.createElement('label');
    departmentLabel.textContent = 'Departamento:';
    departmentLabel.setAttribute('for', 'department');

    const departmentInput = document.createElement('input');
    departmentInput.type = 'text';
    departmentInput.id = 'department';
    departmentInput.placeholder = 'Departamento';
    departmentInput.required = true;

    // Crear el botón de envío
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Iniciar Sesión';

    // Añadir los elementos al formulario
    form.appendChild(title);
    form.appendChild(emailLabel);
    form.appendChild(emailInput);
    form.appendChild(departmentLabel);
    form.appendChild(departmentInput);
    form.appendChild(submitButton);

    // Añadir el formulario al cuerpo del documento
    document.body.appendChild(form);

    // Cargar valores desde la sesión (si existen)
    const storedEmail = sessionStorage.getItem('email');
    const storedDepartment = sessionStorage.getItem('department');

    if (storedEmail && storedDepartment) {
        emailInput.value = storedEmail;
        departmentInput.value = storedDepartment;
    }

    // Validar y manejar envío del formulario
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío real del formulario

        const email = emailInput.value.trim();
        const department = departmentInput.value.trim();

        // Validar email corporativo
        if (!email.endsWith('@dwc.com')) {
            alert('Por favor, introduce un correo electrónico válido de DWC (@dwc.com)');
            return;
        }

        if (department === '') {
            alert('El campo de departamento no puede estar vacío.');
            return;
        }

        // Guardar en sessionStorage
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('department', department);

        alert('Inicio de sesión exitoso');
        form.reset();
    });
}
