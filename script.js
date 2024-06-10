
document.addEventListener('DOMContentLoaded', function() {
    const imagenes = [
        'img/BigData.png',
        'img/cisco2.png',
        'img/cisco2_1.png',
        'img/InternetCosas.png',
        'img/videojuegos.png'
    ];
    let index = 0; // Índice actual de la imagen
    const imagenActual = document.querySelector('.imagen-actual img');

    // Función para cambiar a la siguiente imagen
    function nextImage() {
        index = (index + 1) % imagenes.length;
        imagenActual.src = imagenes[index];
    }

    // Cambiar a la siguiente imagen cada 3 segundos
    setInterval(nextImage, 3000);
});