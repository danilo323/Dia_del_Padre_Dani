// Manejo del video de YouTube
function initializeVideo() {
    const btn = document.querySelector('.youtube-section');
    const videoContainer = document.getElementById('video-embed');
    const videoUrl = videoContainer.getAttribute('data-video-url');

    btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) {
            // Ocultar video y remover iframe
            videoContainer.hidden = true;
            videoContainer.innerHTML = '';
            btn.setAttribute('aria-expanded', 'false');
            btn.innerHTML = `
                <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M10 15l5.19-3L10 9v6z"/>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M21.8 8s-.2-1.6-.82-2.28c-.78-.82-1.66-.83-2.06-.88C15.54 5 12 5 12 5s-3.54 0-6.92.09c-.4.05-1.28.06-2.06.88C2.4 6.4 2.2 8 2.2 8S2 9.68 2 11.36v1.29C2 14.3 2.2 16 2.2 16s.2 1.6.82 2.29c.78.83 1.8.8 2.25.89 1.63.12 6.93.09 6.93.09s3.53 0 6.89-.09c.43-.09 1.47-.06 2.24-.89.62-.68.82-2.29.82-2.29s.2-1.7.2-3.38v-1.28c0-1.7-.2-3.38-.2-3.38z"/>
                </svg>
                Escuchar "Mi Viejo" de Piero
            `;
        } else {
            // Mostrar video y crear iframe
            videoContainer.innerHTML = `
                <iframe width="960" height="540" src="${videoUrl}" title="Video Especial para Papá" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            `;
            videoContainer.hidden = false;
            btn.setAttribute('aria-expanded', 'true');
            btn.innerHTML = `
                <svg class="youtube-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M10 15l5.19-3L10 9v6z"/>
                    <path fill="none" d="M0 0h24v24H0z"/>
                    <path d="M21.8 8s-.2-1.6-.82-2.28c-.78-.82-1.66-.83-2.06-.88C15.54 5 12 5 12 5s-3.54 0-6.92.09c-.4.05-1.28.06-2.06.88C2.4 6.4 2.2 8 2.2 8S2 9.68 2 11.36v1.29C2 14.3 2.2 16 2.2 16s.2 1.6.82 2.29c.78.83 1.8.8 2.25.89 1.63.12 6.93.09 6.93.09s3.53 0 6.89-.09c.43-.09 1.47-.06 2.24-.89.62-.68.82-2.29.82-2.29s.2-1.7.2-3.38v-1.28c0-1.7-.2-3.38-.2-3.38z"/>
                </svg>
                Ocultar Video
            `;
            // Scroll to video smoothly
            videoContainer.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Manejo de la descarga del certificado
function downloadCertificate() {
    const link = document.createElement('a');
    link.href = './certificado.html';
    link.download = 'Certificado_Mejor_Papa_del_Mundo.html';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Inicializar funcionalidades cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initializeVideo();
    // Ya no se usa downloadCertificate, solo generatePDF
});
