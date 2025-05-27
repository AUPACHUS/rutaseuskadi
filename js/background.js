// Lista de nombres de archivo de imágenes de fondo (sin prefijo de ruta)
const fondoFileNames = [
    'naturaleza1.jpg',
    'naturaleza2.jpg',
    'naturaleza3.jpg',
    'naturaleza4.jpg',
    'naturaleza5.jpg',
    'naturaleza6.jpg',
    'naturaleza7.jpg',
    'naturaleza8.jpg',
    'naturaleza9.jpg',
    'naturaleza10.jpg',
    'naturaleza11.jpg',
    'naturaleza12.jpg',
    'naturaleza13.jpg',
    'naturaleza14.jpg',
    'naturaleza15.jpg',
    'naturaleza16.jpg',
    'naturaleza17.jpg',
    'naturaleza18.jpg',
    'naturaleza19.jpg',
    'naturaleza20.jpg',
    'naturaleza21.jpg',
    'naturaleza22.jpg',
    // 'naturaleza23.jpg', // Descomenta si existe y añade a la lista
    'naturaleza24.jpg',
    // Añade más si tienes más imágenes
];

function getImagePathPrefix() {
    const path = window.location.pathname;
    // Si la ruta del HTML no contiene subdirectorios profundos o es index.html, asume que está en la raíz.
    // Esto es una heurística; para estructuras más complejas, podría necesitar ajustes.
    const isRootLevel = path.endsWith('/') || path.endsWith('/index.html') || path.split('/').length <= 2;
    return isRootLevel ? 'img/' : '../img/';
}

const imagePathPrefix = getImagePathPrefix();

// Crea o selecciona el div para la imagen de fondo expandida
let bgDiv = document.getElementById('background-image');
if (!bgDiv) {
    bgDiv = document.createElement('div');
    bgDiv.id = 'background-image';
    document.body.prepend(bgDiv);
}

function cambiarFondo() {
    if (fondoFileNames.length > 0) {
        const random = Math.floor(Math.random() * fondoFileNames.length);
        const imageUrl = `${imagePathPrefix}${fondoFileNames[random]}`;
        // Asegúrate de que bgDiv exista antes de intentar establecer su estilo
        if (bgDiv) bgDiv.style.backgroundImage = `url('${imageUrl}')`;
    }
}

// Cambia el fondo al cargar la página
cambiarFondo();

// Cambia el fondo cada 20 segundos (20000 ms)
setInterval(cambiarFondo, 20000);

// Efecto simple de animación de fondo (puedes personalizarlo)
document.addEventListener('DOMContentLoaded', () => {
    // Aquí puedes agregar animaciones o efectos visuales si lo deseas
    // Por ejemplo, cambiar la opacidad de los fondos al hacer scroll
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const top = document.getElementById('background-top');
        const bottom = document.getElementById('background-bottom');

        if (top) {
            top.style.opacity = 1 - Math.min(scrollY / 300, 1);
        }
        if (bottom) {
            bottom.style.opacity = 1 - Math.min((document.body.scrollHeight - window.innerHeight - scrollY) / 300, 1);
        }
    });
});