const express = require('express');
const sqlite3 = require('sqlite3').verbose(); // .verbose() para mensajes de error más detallados
const path = require('path'); // Módulo para trabajar con rutas de archivos
const cors = require('cors'); // Importar el paquete cors

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
            author TEXT NOT NULL,
            text TEXT NOT NULL,
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

// --- Rutas de la API para los comentarios ---

// GET /api/comments - Obtener todos los comentarios
app.get('/api/comments', (req, res) => {
    db.all("SELECT id, author, text, strftime('%Y-%m-%d %H:%M:%S', timestamp) as timestamp FROM comments ORDER BY timestamp DESC", [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({ comments: rows });
    });
});

// POST /api/comments - Añadir un nuevo comentario
app.post('/api/comments', (req, res) => {
    const { author, text } = req.body;

    if (!author || !text) {
        return res.status(400).json({ error: 'El autor y el texto del comentario son obligatorios.' });
    }

    const stmt = db.prepare("INSERT INTO comments (author, text) VALUES (?, ?)");
    stmt.run(author, text, function(err) { // Usar function() para acceder a this.lastID
        if (err) {
            stmt.finalize();
            res.status(500).json({ error: err.message });
            return;
        }
        const newCommentId = this.lastID;
        stmt.finalize();

        // Obtener el comentario recién insertado para devolverlo con el timestamp de la BD
        db.get("SELECT id, author, text, strftime('%Y-%m-%d %H:%M:%S', timestamp) as timestamp FROM comments WHERE id = ?", newCommentId, (err, row) => {
            if (err) {
                // El comentario se insertó, pero hubo un error al recuperarlo.
                // Se podría registrar el error y devolver un 201 con datos parciales o un mensaje específico.
                console.error("Error retrieving comment after insert:", err.message);
                return res.status(201).json({ message: "Comment created, but failed to retrieve full details.", id: newCommentId });
            }
            if (!row) return res.status(404).json({ error: "Comment created, but could not be found." });
            
            res.status(201).json(row);
        });
    });
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor backend escuchando en http://localhost:${port}`);
});