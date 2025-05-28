document.addEventListener('DOMContentLoaded', () => {
    const registerFormPage = document.getElementById('register-form-page');
    const registerMessage = document.getElementById('register-message');
    const authApiUrl = 'http://localhost:3000/api/auth'; // Asegúrate que esta URL es correcta

    if (registerFormPage) {
        registerFormPage.addEventListener('submit', async (e) => {
            e.preventDefault();
            registerMessage.textContent = ''; // Limpiar mensajes previos
            registerMessage.className = 'auth-message'; // Reset class

            const username = document.getElementById('register-username').value.trim();
            const email = document.getElementById('register-email').value.trim();
            const password = document.getElementById('register-password').value;

            if (!username || !email || !password) {
                showMessage((translations[currentLanguage]?.fillAllFields || 'Por favor, completa todos los campos.'), 'error');
                return;
            }

            if (password.length < 6) {
                showMessage((translations[currentLanguage]?.passwordTooShort || 'La contraseña debe tener al menos 6 caracteres.'), 'error');
                return;
            }

            try {
                const response = await fetch(`${authApiUrl}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || (translations[currentLanguage]?.registerError || 'Error al registrarse. Inténtalo de nuevo.'));
                }

                showMessage((translations[currentLanguage]?.registerSuccessRedirect || '¡Registro exitoso! Redirigiendo a inicio de sesión...'), 'success');
                registerFormPage.reset();
                setTimeout(() => {
                    window.location.href = 'login.html'; // Redirigir a la página de login
                }, 3000); // Espera 3 segundos antes de redirigir

            } catch (error) {
                showMessage(error.message, 'error');
            }
        });
    }

    function showMessage(message, type = 'info') { // type puede ser 'info', 'success', 'error'
        registerMessage.textContent = message;
        registerMessage.className = `auth-message ${type}`; // Para aplicar estilos diferentes
    }
});