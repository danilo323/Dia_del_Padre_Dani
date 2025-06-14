// Configuración de imágenes y descripciones
const images = [
    {
        src: './img/imagen1.jpeg',
        description: 'Papá, gracias por estar siempre a mi lado, eres mi mayor ejemplo.'
    },
    {
        src: './img/imagen2.jpg',
        description: 'Tu amor y tus consejos son el mejor regalo de la vida.'
    },
    {
        src: './img/imagen3.png',
        description: 'Papá, tu apoyo es mi fuerza cada día.'
    }
];

let currentImageIndex = 0;
const modal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const imageDescription = document.getElementById('imageDescription');

// Función para abrir el modal
function openModal(index) {
    currentImageIndex = index;
    updateModalImage();
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

// Función para cambiar la imagen
function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateModalImage();
}

// Función para actualizar la imagen en el modal
function updateModalImage() {
    const image = images[currentImageIndex];
    modalImage.src = image.src;
    modalImage.alt = image.description;
    imageDescription.textContent = image.description;
}

// Manejar teclas de navegación
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowLeft') changeImage(-1);
        if (e.key === 'ArrowRight') changeImage(1);
        if (e.key === 'Escape') closeModal();
    }
});
