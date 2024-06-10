(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://www.instagram.com/embed.js";
    fjs.parentNode.insertBefore(js, fjs);

    // Esperar a que la página se cargue completamente antes de intentar la reproducción automática
    window.addEventListener('load', function() {
        // Seleccionar todos los elementos con la clase "instagram-media"
        var instagramMedia = document.querySelectorAll('.instagram-media');
        // Para cada elemento, buscar el iframe dentro y establecer el atributo "allow" para permitir la reproducción automática
        instagramMedia.forEach(function(element) {
            var iframe = element.querySelector('iframe');
            if (iframe) {
                iframe.setAttribute('allow', 'autoplay');
            }
        });
    });
}(document, 'script', 'instagram-jssdk'));
