function generatePDF() {
    const iframe = document.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.left = '-9999px';
    iframe.style.width = '900px';
    iframe.style.height = '700px';
    iframe.src = './certificado.html';
    
    document.body.appendChild(iframe);
    
    iframe.onload = function() {
        setTimeout(() => {
            const opt = {
                margin: 0.2,
                filename: 'Certificado_Mejor_Papa_del_Mundo.pdf',
                image: { type: 'jpeg', quality: 1.0 },
                html2canvas: { 
                    scale: 3,
                    useCORS: true,
                    allowTaint: true,
                    backgroundColor: null,
                    width: 900,
                    height: 700
                },
                jsPDF: { 
                    unit: 'in', 
                    format: [11, 8.5], 
                    orientation: 'landscape' 
                }
            };
            
            // Generar PDF desde el contenido del iframe
            html2pdf()
                .set(opt)
                .from(iframe.contentDocument.querySelector('.certificate'))
                .save()
                .then(() => {
                    // Remover el iframe después de generar el PDF
                    document.body.removeChild(iframe);
                })
                .catch((error) => {
                    console.error('Error generando PDF:', error);
                    document.body.removeChild(iframe);
                });
        }, 1000); // Esperar 1 segundo para que carguen todos los estilos
    };
}
