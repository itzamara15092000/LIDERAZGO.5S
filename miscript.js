// Función para registrar al usuario
function register() {
    // Obtener los valores de los campos
    const regName = document.getElementById('regName').value.trim();
    const regEmail = document.getElementById('regEmail').value.trim();
    const regPassword = document.getElementById('regPassword').value.trim();

    // Validar que no haya campos vacíos
    if (regName === '' || regEmail === '' || regPassword === '') {
        alert('Por favor, completa todos los campos para registrarte.');
        return;
    }

    // Validación básica de correo electrónico
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(regEmail)) {
        alert('Por favor, ingresa un correo electrónico válido.');
        return;
    }

    // Guardar en almacenamiento local (simulación de base de datos)
    localStorage.setItem('userEmail', regEmail);
    localStorage.setItem('userPassword', regPassword);
    alert('¡Registro exitoso! Ya puedes iniciar sesión.');

    // Limpiar los campos
    document.getElementById('regName').value = '';
    document.getElementById('regEmail').value = '';
    document.getElementById('regPassword').value = '';
}

// Función para iniciar sesión
function login() {
    // Obtener los valores de los campos de inicio de sesión
    const loginEmail = document.getElementById('loginEmail').value.trim();
    const loginPassword = document.getElementById('loginPassword').value.trim();

    // Validar que no haya campos vacíos
    if (loginEmail === '' || loginPassword === '') {
        alert('Por favor, completa todos los campos para iniciar sesión.');
        return;
    }

    // Obtener el correo y la contraseña registrados (simulación de base de datos)
    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    // Verificar las credenciales
    if (loginEmail === storedEmail && loginPassword === storedPassword) {
        alert('¡Inicio de sesión exitoso! Bienvenido/a.');
        // Aquí podrías redirigir al usuario a otra página o sección
    } else {
        alert('Correo electrónico o contraseña incorrectos.');
    }

    // Limpiar los campos
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginPassword').value = '';
}
