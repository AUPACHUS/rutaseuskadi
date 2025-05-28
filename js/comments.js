document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const commentForm = document.getElementById('comment-form');
    const commentAuthorInput = document.getElementById('comment-author');
    const commentTextInput = document.getElementById('comment-text');
    const charCounter = document.getElementById('char-counter');

    const apiUrl = 'http://localhost:3000/api/comments';

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
        authorElement.textContent = comment.author;

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
            const response = await fetch(`${apiUrl}/${commentId}/vote`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
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
        // Ocultar otros formularios de respuesta si existen
        document.querySelectorAll('.reply-form').forEach(form => form.remove());

        const replyForm = document.createElement('form');
        replyForm.classList.add('reply-form'); // Para estilos
        replyForm.dataset.parentId = parentId;
        replyForm.style.marginTop = '10px';

        replyForm.innerHTML = `
            <div class="form-group">
                <label for="reply-author-${parentId}" data-key="commentAuthorLabel">Nombre:</label>
                <input type="text" id="reply-author-${parentId}" required>
            </div>
            <div class="form-group">
                <label for="reply-text-${parentId}" data-key="commentTextLabel">Comentario:</label>
                <textarea id="reply-text-${parentId}" rows="3" required maxlength="500"></textarea>
                <span id="reply-char-counter-${parentId}" class="char-counter-reply">500 caracteres restantes</span>
            </div>
            <button type="submit" data-key="submitCommentBtn">Enviar Respuesta</button>
            <button type="button" class="cancel-reply">Cancelar</button>
        `;

        parentCommentElement.appendChild(replyForm);

        const replyAuthorInput = replyForm.querySelector(`#reply-author-${parentId}`);
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
            const author = replyAuthorInput.value.trim();
            const text = replyTextInput.value.trim();

            if (author && text && text.length <= 500) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ 
                            author, 
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

            const authorElement = document.createElement('strong');
            const author = commentAuthorInput.value.trim();
            const text = commentTextInput.value.trim();

            if (author && text && text.length <= 500) {
                try {
                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ author, text }) // parent_id es null por defecto para comentarios principales
                    });

                    if (!response.ok) {
                        throw new Error(`Error HTTP: ${response.status}`);
                    }

                    commentAuthorInput.value = '';
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

    fetchComments();
});

// Esta variable se espera que sea establecida globalmente por translations.js
let currentLanguage = 'es'; // O el idioma por defecto/detectado