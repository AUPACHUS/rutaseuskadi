document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const commentForm = document.getElementById('comment-form');
    // const commentAuthorInput = document.getElementById('comment-author'); // Ya no es necesario si el usuario está logueado
    const commentTextInput = document.getElementById('comment-text');
    const charCounter = document.getElementById('char-counter');

    // Elementos de autenticación
    const authSection = document.getElementById('auth-section');
    const userInfoDiv = document.getElementById('user-info');
    const usernameDisplay = document.getElementById('username-display');
    const logoutBtn = document.getElementById('logout-btn');
    const loginFormContainer = document.getElementById('login-form-container');
    const registerFormContainer = document.getElementById('register-form-container');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const showRegisterLink = document.getElementById('show-register-link');
    const showLoginLink = document.getElementById('show-login-link');
    const authMessage = document.getElementById('auth-message');
    const commentFormWrapper = document.getElementById('comment-form-wrapper');
    const loginToCommentMsg = document.getElementById('login-to-comment-msg');
    const loginPromptLink = document.getElementById('login-prompt-link');

    const apiUrl = 'http://localhost:3000/api/comments';
    const authApiUrl = 'http://localhost:3000/api/auth';

    // Contador de caracteres
    if (commentTextInput && charCounter) {
        commentTextInput.addEventListener('input', () => {
            const remaining = 500 - commentTextInput.value.length;
            charCounter.textContent = `${remaining} caracteres restantes`;
            if (remaining < 0) {
                charCounter.style.color = 'red';
            } else {
                charCounter.style.color = '';
            }
        });
    }

    // --- Lógica de Autenticación ---
    function updateAuthState() {
        const token = localStorage.getItem('authToken');
        const username = localStorage.getItem('username');

        if (token && username) {
            userInfoDiv.style.display = 'block';
            usernameDisplay.textContent = username;
            loginFormContainer.style.display = 'none';
            registerFormContainer.style.display = 'none';
            authMessage.textContent = '';
            commentFormWrapper.style.display = 'block';
            loginToCommentMsg.style.display = 'none';
            // if (document.getElementById('comment-author-group')) {
            //     document.getElementById('comment-author-group').style.display = 'none'; // Ocultar campo de autor
            // }
        } else {
            userInfoDiv.style.display = 'none';
            loginFormContainer.style.display = 'block'; // Mostrar login por defecto
            registerFormContainer.style.display = 'none';
            commentFormWrapper.style.display = 'none';
            loginToCommentMsg.style.display = 'block';
            // if (document.getElementById('comment-author-group')) {
            //     document.getElementById('comment-author-group').style.display = 'block'; // Mostrar campo autor si no logueado
            // }
        }
    }

    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('login-username').value;
            const password = document.getElementById('login-password').value;
            try {
                const response = await fetch(`${authApiUrl}/login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Error al iniciar sesión');
                
                localStorage.setItem('authToken', data.accessToken);
                localStorage.setItem('username', data.username);
                localStorage.setItem('userId', data.userId);
                updateAuthState();
                loginForm.reset();
            } catch (error) {
                authMessage.textContent = error.message;
            }
        });
    }

    if (registerForm) {
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const username = document.getElementById('register-username').value;
            const email = document.getElementById('register-email').value;
            const password = document.getElementById('register-password').value;
            try {
                const response = await fetch(`${authApiUrl}/register`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, email, password })
                });
                const data = await response.json();
                if (!response.ok) throw new Error(data.error || 'Error al registrarse');
                
                authMessage.textContent = 'Registro exitoso. Por favor, inicia sesión.';
                authMessage.style.color = 'green';
                registerForm.reset();
                showLoginForm(); // Mostrar formulario de login después del registro
            } catch (error) {
                authMessage.textContent = error.message;
                authMessage.style.color = 'red';
            }
        });
    }

    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('authToken');
            localStorage.removeItem('username');
            localStorage.removeItem('userId');
            updateAuthState();
        });
    }

    function showLoginForm() {
        loginFormContainer.style.display = 'block';
        registerFormContainer.style.display = 'none';
        authMessage.textContent = '';
    }
    function showRegisterForm() {
        loginFormContainer.style.display = 'none';
        registerFormContainer.style.display = 'block';
        authMessage.textContent = '';
    }

    if (showRegisterLink) showRegisterLink.addEventListener('click', (e) => { e.preventDefault(); showRegisterForm(); });
    if (showLoginLink) showLoginLink.addEventListener('click', (e) => { e.preventDefault(); showLoginForm(); });
    if (loginPromptLink) loginPromptLink.addEventListener('click', (e) => { e.preventDefault(); showLoginForm(); authSection.scrollIntoView(); });

    // Función para mostrar comentarios con anidación
    function displayComments(allComments, parentId = null, level = 0) {
        const children = allComments.filter(c => {
            if (parentId === null) {
                return c.parent_id === null;
            }
            return c.parent_id === parentId;
        });

        children.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)); // Sort children by newest first

        if (level === 0 && children.length === 0) { // Check if it's top level and no root comments
            const noCommentsMessage = document.createElement('p');
            noCommentsMessage.setAttribute('data-key', 'noCommentsYet');
            noCommentsMessage.textContent = (typeof translations !== 'undefined' && typeof currentLanguage !== 'undefined' && translations[currentLanguage]?.noCommentsYet)
                ? translations[currentLanguage].noCommentsYet
                : 'Aún no hay comentarios. ¡Sé el primero!';
            commentsList.appendChild(noCommentsMessage);
            return;
        }

        children.forEach(comment => {
            const commentElement = createCommentElement(comment, level);
            commentsList.appendChild(commentElement);

            // Mostrar respuestas
            displayComments(allComments, comment.id, level + 1);
        });
    }

    function createCommentElement(comment, level) {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item');
        commentElement.style.marginLeft = `${level * 20}px`; // Indentación para respuestas
        commentElement.dataset.commentId = comment.id;

        const headerDiv = document.createElement('div');
        headerDiv.classList.add('comment-header');

        const authorElement = document.createElement('strong');
        authorElement.textContent = comment.author_username; // Usar el username del join

        const ratingElement = document.createElement('span');
        ratingElement.classList.add('comment-rating');
        ratingElement.textContent = ` ★ ${comment.rating}`; // Mostrar rating

        const timestampElement = document.createElement('span');
        timestampElement.classList.add('comment-timestamp');
        timestampElement.textContent = ` - ${new Date(comment.timestamp).toLocaleString()}`;

        const voteButtons = document.createElement('div');
        voteButtons.classList.add('vote-buttons');
        
        const upvoteBtn = document.createElement('button');
        upvoteBtn.textContent = '↑';
        upvoteBtn.classList.add('vote-btn', 'upvote');
        upvoteBtn.addEventListener('click', () => voteComment(comment.id, 'upvote'));
        
        const downvoteBtn = document.createElement('button');
        downvoteBtn.textContent = '↓';
        downvoteBtn.classList.add('vote-btn', 'downvote');
        downvoteBtn.addEventListener('click', () => voteComment(comment.id, 'downvote'));

        voteButtons.append(upvoteBtn, downvoteBtn);
        headerDiv.append(authorElement, ratingElement, timestampElement, voteButtons);

        const textElement = document.createElement('p');
        textElement.classList.add('comment-text');
        textElement.textContent = comment.text;

        const replyBtn = document.createElement('button');
        replyBtn.textContent = 'Responder'; // Podrías usar data-key para traducir "Responder"
        replyBtn.classList.add('reply-btn');
        replyBtn.addEventListener('click', () => showReplyForm(comment.id, commentElement));

        commentElement.append(headerDiv, textElement, replyBtn);
        return commentElement;
    }

    async function voteComment(commentId, action) {
        try {
            const token = localStorage.getItem('authToken');
            if (!token) {
                alert('Debes iniciar sesión para votar.');
                return;
            }
            const response = await fetch(`${apiUrl}/${commentId}/vote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ action })
            });

            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            
            fetchComments(); // Recargar comentarios después de votar
        } catch (error) {
            console.error('Error al votar:', error);
            alert('Error al registrar tu voto. Inténtalo más tarde.');
        }
    }

    function showReplyForm(parentId, parentCommentElement) {
        const token = localStorage.getItem('authToken');
        if (!token) {
            alert('Debes iniciar sesión para responder.');
            return;
        }

        // Ocultar otros formularios de respuesta si existen
        document.querySelectorAll('.reply-form').forEach(form => form.remove());

        const replyForm = document.createElement('form');
        replyForm.classList.add('reply-form'); // Para estilos
        replyForm.dataset.parentId = parentId;
        replyForm.style.marginTop = '10px';

        replyForm.innerHTML = `
            <!-- El campo de autor para respuestas ya no es necesario si se usa el usuario logueado -->
            <!-- <div class="form-group">
                <label for="reply-author-${parentId}" data-key="commentAuthorLabel">Nombre:</label>
                <input type="text" id="reply-author-${parentId}" required>
            </div> -->
            <div class="form-group">
                <label for="reply-text-${parentId}" data-key="commentTextLabel">Comentario:</label>
                <textarea id="reply-text-${parentId}" rows="3" required maxlength="500"></textarea>
                <span id="reply-char-counter-${parentId}" class="char-counter-reply">500 caracteres restantes</span>
            </div>
            <button type="submit" data-key="submitCommentBtn">Enviar Respuesta</button>
            <button type="button" class="cancel-reply">Cancelar</button>
        `;

        parentCommentElement.appendChild(replyForm);

        // const replyAuthorInput = replyForm.querySelector(`#reply-author-${parentId}`);
        const replyTextInput = replyForm.querySelector(`#reply-text-${parentId}`);
        const replyCharCounter = replyForm.querySelector(`#reply-char-counter-${parentId}`);

        replyTextInput.addEventListener('input', () => {
            const remaining = 500 - replyTextInput.value.length;
            replyCharCounter.textContent = `${remaining} caracteres restantes`;
            replyCharCounter.style.color = remaining < 0 ? 'red' : '';
        });

        replyForm.querySelector('.cancel-reply').addEventListener('click', () => {
            replyForm.remove();
        });

        replyForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            // const author = replyAuthorInput.value.trim(); // Ya no se necesita
            const text = replyTextInput.value.trim();
            const token = localStorage.getItem('authToken');

            if (!token) { // Doble chequeo, aunque el form no debería mostrarse
                alert('Error: No estás autenticado.');
                return;
            }

            if (text && text.length <= 500) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                        body: JSON.stringify({ 
                            text, 
                            parent_id: parentId 
                        })
                    });

                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }

                    replyForm.remove();
                    // Mostrar mensaje de éxito para la respuesta
                    const successMsg = document.createElement('p');
                    successMsg.textContent = (typeof translations !== 'undefined' && typeof currentLanguage !== 'undefined' && translations[currentLanguage]?.commentPending)
                        ? translations[currentLanguage].commentPending
                        : '¡Gracias por tu comentario! Está pendiente de moderación.';
                    successMsg.style.color = 'green';
                    successMsg.style.fontSize = '0.9em';
                    parentCommentElement.appendChild(successMsg);
                    setTimeout(() => successMsg.remove(), 5000);

                    fetchComments(); // Recargar todos los comentarios para ver la respuesta (si se aprueba rápido)
                } catch (error) {
                    console.error('Error al enviar respuesta:', error);
                    alert('Error al enviar la respuesta. Inténtalo más tarde.');
                }
            }
        });

        if (typeof setLanguage === 'function' && typeof currentLanguage !== 'undefined') {
            setLanguage(currentLanguage); // Para traducir labels en el form de respuesta
        }
    }

    async function fetchComments() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            commentsList.innerHTML = ''; // Limpiar antes de volver a mostrar
            displayComments(data.comments, null, 0); // Iniciar con parentId null y nivel 0
        } catch (error) {
            console.error('Error al cargar comentarios:', error);
            commentsList.innerHTML = '<p data-key="errorLoadingComments">Error al cargar comentarios. Inténtalo más tarde.</p>';
            if (typeof setLanguage === "function" && typeof currentLanguage !== 'undefined') {
                setLanguage(currentLanguage || 'es');
            }
        }
    }

    if (commentForm) {
        commentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const token = localStorage.getItem('authToken');

            if (!token) {
                alert('Debes iniciar sesión para comentar.');
                // Opcionalmente, podrías redirigir al formulario de login o mostrarlo.
                // showLoginForm();
                // authSection.scrollIntoView();
                return;
            }

            const text = commentTextInput.value.trim();

            if (text && text.length <= 500) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                        body: JSON.stringify({ text }) // parent_id es null por defecto, author viene del token
                    });

                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }

                    // commentAuthorInput.value = ''; // Ya no se usa
                    commentTextInput.value = '';
                    if (charCounter) { // Resetear contador
                        charCounter.textContent = '500 caracteres restantes';
                        charCounter.style.color = '';
                    }
                    
                    const successMsg = document.createElement('p');
                    successMsg.textContent = (typeof translations !== 'undefined' && typeof currentLanguage !== 'undefined' && translations[currentLanguage]?.commentPending)
                        ? translations[currentLanguage].commentPending
                        : '¡Gracias por tu comentario! Está pendiente de moderación.';
                    successMsg.style.color = 'green';
                    commentForm.appendChild(successMsg); // Añadir mensaje al formulario
                    setTimeout(() => successMsg.remove(), 5000); // Quitar mensaje después de 5s

                    // No es necesario recargar comentarios aquí si están pendientes de moderación y no se muestran inmediatamente.
                    // fetchComments(); 
                } catch (error) {
                    console.error('Error al enviar comentario:', error);
                    alert('Error al enviar el comentario.');
                }
            } else if (text.length > 500) {
                alert('El comentario excede los 500 caracteres.');
            }
        });
    }

    updateAuthState(); // Comprobar estado de autenticación al cargar
    fetchComments();
});
// Esta variable se espera que sea establecida globalmente por translations.js
let currentLanguage = 'es'; // O el idioma por defecto/detectado