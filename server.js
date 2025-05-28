require('dotenv').config();
// Asegúrate de tener un archivo .env con las variables EMAIL_USER y EMAIL_PASS

const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // .verbose() para mensajes de error más detallados
const path = require('path'); // Módulo para trabajar con rutas de archivos
const cors = require('cors'); // Importar el paquete cors
const nodemailer = require('nodemailer'); // Importar nodemailer

const app = express();
const port = 3000; // Puerto en el que correrá el servidor backend
app.use(cors()); // Habilitar CORS para todas las rutas


// Middleware para parsear JSON en las peticiones (para cuando envíes datos desde el frontend)
app.use(express.json());
// Middleware para parsear datos de formularios URL-encoded
app.use(express.urlencoded({ extended: true }));

// --- Configuración de la Base de Datos SQLite ---
const dbPath = path.resolve(__dirname, 'rutaseuskadi.db'); // Nombre y ubicación de tu archivo de base de datos
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error al conectar con la base de datos SQLite:', err.message);
    } else {
        console.log('Conectado a la base de datos SQLite.');
        // Crear la tabla de comentarios si no existe
        db.run(`CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            parent_id INTEGER DEFAULT NULL REFERENCES comments(id), -- Para comentarios anidados
            author TEXT NOT NULL,
            text TEXT NOT NULL,
            rating INTEGER DEFAULT 0,
            status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected')), -- Estados: pending, approved, rejected
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error al crear la tabla "comments":', err.message);
            } else {
                console.log('Tabla "comments" lista o ya existente.');
            }
        });
    }
});

// --- Configuración de Nodemailer ---
// Es MUY RECOMENDABLE usar variables de entorno para las credenciales.
// Por ejemplo, crea un archivo .env y usa un paquete como dotenv.
// EMAIL_USER=tu_correo@gmail.com
// EMAIL_PASS=tu_contraseña_de_aplicacion_o_normal
const transporter = nodemailer.createTransport({
    service: 'gmail', // O tu proveedor de correo
    auth: {
        user: process.env.EMAIL_USER || 'artemnugiocursojava@gmail.com', // Reemplaza o usa variable de entorno
        pass: process.env.EMAIL_PASS || 'giuv fpgn dtjq rorf'    // Reemplaza o usa variable de entorno
    }
});

async function sendModerationEmail(commentDetails) {
    const mailOptions = {
        from: process.env.EMAIL_USER || 'artemnugiocursojava@gmail.com', // El mismo correo desde el que envías
        to: 'artemugiocursojava@gmail.com', // Tu correo para recibir notificaciones
        subject: 'Nuevo Comentario Esperando Moderación',
        html: `
            <h1>Nuevo Comentario Recibido</h1>
            <p>Un nuevo comentario ha sido enviado y está esperando tu aprobación.</p>
            <ul>
                <li><strong>ID:</strong> ${commentDetails.id}</li>
                <li><strong>Autor:</strong> ${commentDetails.author}</li>
                <li><strong>Comentario:</strong></p>
                <p style="border-left: 3px solid #ccc; padding-left: 10px;">${commentDetails.text}</p>
                <li><strong>Fecha:</strong> ${new Date(commentDetails.timestamp).toLocaleString()}</li>
            </ul>
            <p>Por favor, revisa y actualiza su estado en la base de datos ('approved' o 'rejected').</p>
        `
    };

    try {
        let info = await transporter.sendMail(mailOptions);
        console.log('Correo de moderación enviado a artemugiocursojava@gmail.com');
        console.log('Message sent: %s', info.messageId); // Log del ID del mensaje
        // Para servicios como Ethereal, podrías ver una URL de vista previa: console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    } catch (error) {
        console.error('Error al enviar el correo de moderación:', error);
    }
}

// --- Rutas de la API para los comentarios ---

// GET /api/comments - Obtener comentarios aprobados
app.get('/api/comments', (req, res) => {
    db.all(`SELECT id, parent_id, author, text, rating, 
            strftime('%Y-%m-%d %H:%M:%S', timestamp) as timestamp 
            FROM comments 
            WHERE status = 'approved'
            ORDER BY timestamp DESC`, [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ comments: rows });
    });
});

// POST /api/comments - Añadir un nuevo comentario (con validación)
app.post('/api/comments', (req, res) => {
    const { author, text, parent_id = null, rating = 0 } = req.body;
        
    if (!author || !text) {
        return res.status(400).json({ error: 'El autor y el texto del comentario son obligatorios.' });
    }
            if (typeof author !== 'string' || typeof text !== 'string') {
                return res.status(400).json({ error: 'El autor y el texto deben ser cadenas de texto.' });
            }
    if (text.length > 500) {
        return res.status(400).json({ error: 'El comentario no puede exceder los 500 caracteres.' });
    }
            if (parent_id !== null && (typeof parent_id !== 'number' || !Number.isInteger(parent_id))) {
                return res.status(400).json({ error: 'parent_id debe ser un número entero o null.' });
            }
            if (typeof rating !== 'number' || !Number.isInteger(rating)) { // Aunque el default es 0, el cliente podría enviar algo incorrecto
                return res.status(400).json({ error: 'rating debe ser un número entero.' });
            }

    const stmt = db.prepare("INSERT INTO comments (author, text, parent_id, rating, status) VALUES (?, ?, ?, ?, ?)");
    stmt.run(author, text, parent_id, rating, 'pending', function(err) {
        if (err) {
            stmt.finalize(); // Asegúrate de finalizar en caso de error
            res.status(500).json({ error: err.message });
            return;
        }
        const newCommentId = this.lastID;
        const newCommentTimestamp = new Date().toISOString(); // Para la respuesta y el correo

        // Responder al cliente primero
        res.status(201).json({
            id: newCommentId,
            author: author,
            text: text,
            parent_id: parent_id,
            rating: rating,
            status: 'pending',
            timestamp: newCommentTimestamp
        });

        stmt.finalize(); // Finalizar el statement después de la operación de BD

        // Enviar correo de notificación para moderación
        sendModerationEmail({
            id: newCommentId,
            author: author,
            text: text,
            timestamp: newCommentTimestamp
        });
    });
});

// Endpoint para moderación (solo accesible con autenticación en producción)
app.patch('/api/comments/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    if (!['approved', 'rejected'].includes(status)) {
        return res.status(400).json({ error: 'Estado no válido' });
    }

    db.run("UPDATE comments SET status = ? WHERE id = ?", [status, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }
        res.json({ success: true });
    });
});

// Endpoint para votar
app.post('/api/comments/:id/vote', (req, res) => {
    const { id } = req.params;
    const { action } = req.body; // 'upvote' o 'downvote'

    if (!['upvote', 'downvote'].includes(action)) {
        return res.status(400).json({ error: 'Acción no válida' });
    }

    const change = action === 'upvote' ? 1 : -1;

    db.run("UPDATE comments SET rating = rating + ? WHERE id = ?", [change, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }
        res.json({ success: true });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});