document.addEventListener('DOMContentLoaded', () => {
    const commentsList = document.getElementById('comments-list');
    const commentForm = document.getElementById('comment-form');
    const commentAuthorInput = document.getElementById('comment-author');
    const commentTextInput = document.getElementById('comment-text');

    // URL de tu API de comentarios (asegúrate que el puerto coincida con tu server.js)
    const apiUrl = 'http://localhost:3000/api/comments';

    // Función para mostrar los comentarios en el HTML
    function displayComments(comments) {
        commentsList.innerHTML = ''; // Limpiar la lista actual

        if (comments.length === 0) {
            // Usar data-key para el mensaje de "no hay comentarios" para que se pueda traducir
            const noCommentsMessage = document.createElement('p');
            noCommentsMessage.setAttribute('data-key', 'noCommentsYet');
            // Intentar traducir el mensaje si la función setLanguage y translations están disponibles globalmente
            if (typeof translations !== 'undefined' && typeof currentLanguage !== 'undefined' && translations[currentLanguage] && translations[currentLanguage].noCommentsYet) {
                noCommentsMessage.textContent = translations[currentLanguage].noCommentsYet;
            } else {
                 noCommentsMessage.textContent = 'Aún no hay comentarios. ¡Sé el primero!'; // Fallback
            }
            commentsList.appendChild(noCommentsMessage);
            return;
        }

        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment-item'); // Para estilos futuros
            commentElement.style.borderBottom = '1px solid #eee';
            commentElement.style.padding = '10px 0';
            commentElement.style.marginBottom = '10px';

            const authorElement = document.createElement('strong');
            authorElement.textContent = comment.author;

            const timestampElement = document.createElement('span');
            timestampElement.textContent = ` - ${new Date(comment.timestamp).toLocaleString()}`;
            timestampElement.style.fontSize = '0.9em';
            timestampElement.style.color = '#777';

            const textElement = document.createElement('p');
            textElement.textContent = comment.text;
            textElement.style.margin = '5px 0 0 0';

            commentElement.appendChild(authorElement);
            commentElement.appendChild(timestampElement);
            commentElement.appendChild(textElement);
            commentsList.appendChild(commentElement);
        });
    }

    // Función para cargar los comentarios desde la API
    async function fetchComments() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            const data = await response.json();
            displayComments(data.comments);
        } catch (error) {
            console.error('Error al cargar comentarios:', error);
            commentsList.innerHTML = '<p data-key="errorLoadingComments">Error al cargar comentarios. Inténtalo más tarde.</p>';
            // Intentar traducir el mensaje de error si es posible
            if (typeof setLanguage === "function") setLanguage(currentLanguage || 'es');
        }
    }

    // Manejar el envío del formulario de comentarios
    commentForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Evitar que la página se recargue

        const author = commentAuthorInput.value.trim();
        const text = commentTextInput.value.trim();

        if (author && text) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ author, text })
                });
                if (!response.ok) {
                    throw new Error(`Error HTTP: ${response.status}`);
                }
                // const newComment = await response.json(); // El backend devuelve el comentario creado
                commentAuthorInput.value = ''; // Limpiar campos
                commentTextInput.value = '';
                fetchComments(); // Recargar la lista de comentarios
            } catch (error) {
                console.error('Error al enviar comentario:', error);
                alert('Error al enviar el comentario.'); // Podrías mostrar un mensaje más amigable
            }
        }
    });

    // Cargar comentarios cuando la página esté lista
    fetchComments();
});

// Variable global para el idioma actual, si tu `translations.js` la necesita o la establece.
// Esto es una suposición; ajusta según cómo funcione tu `translations.js`.
// Si `translations.js` ya maneja esto globalmente, esta línea podría no ser necesaria aquí.
let currentLanguage = 'es'; // O el idioma por defecto/detectado

// Asegúrate de que tu función setLanguage en translations.js actualice esta variable
// o que `translations.js` exponga una forma de obtener el idioma actual.
// Por ejemplo, en translations.js, cuando cambias de idioma:
// function setLanguage(lang) {
//   ...
//   window.currentLanguage = lang; // Hacerla global
//   ...
// }