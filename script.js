const Links = {
    urlWhatsapp: "https://wa.me/message/6APDXKIURGWRD1",
    urlInstagram: "https://instagram.com/jocelvargasoficial",
    urlFace: "https://www.facebook.com/JocelVargasOficial/",
    urlSpotify: "https://open.spotify.com/artist/7nfkCHEbzmE0CWTnV3GTFq",
    urlDeezer: "https://deezer.page.link/VnYsP1nCbUQgNr5EA",
    urlAppleMusic: "https://music.apple.com/br/artist/jocel-vargas/1502460982",
    urlYoutube: "https://youtube.com/jocelvargasoficial",
    urlCifraClub: "https://www.cifraclub.com.br/jocel-vargas/"
}

document.addEventListener('DOMContentLoaded', function () {
    const links = document.getElementsByClassName('link');

    function navegarLinkEmNovaAba(url) {
        window.open(url, '_blank');
    }

    function redirecionarLink(event) {
        const element = event.target;
        const linkClass = element.classList[1];

        switch (linkClass) {
            case 'instagramLink':
                navegarLinkEmNovaAba(Links.urlInstagram);
                break;
            case 'whatsappLink':
                navegarLinkEmNovaAba(Links.urlWhatsapp);
                break;
            case 'faceLink':
                navegarLinkEmNovaAba(Links.urlFace)
                break;
            case 'spotifyLink':
                navegarLinkEmNovaAba(Links.urlSpotify);
                break;
            case 'youtubeLink':
                navegarLinkEmNovaAba(Links.urlYoutube);
                break;
            case 'appleLink':
                navegarLinkEmNovaAba(Links.urlAppleMusic);
                break;
            case 'deezerLink':
                navegarLinkEmNovaAba(Links.urlDeezer);
                break;
            case 'cifraClubLink':
                navegarLinkEmNovaAba(Links.urlCifraClub);
                break;
            default:
                break;
        }
    }

    Array.from(links).forEach(link => {
        link.addEventListener('click', redirecionarLink);
    });
});

var swiper = new Swiper(".swiper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    keyboard: true,
});

window.addEventListener("orientationchange", function () {
    // Verifique o tamanho da tela do dispositivo
    const largura = window.innerWidth;
    const altura = window.innerHeight;
  
    // Função para aplicar estilos com base na largura e orientação
    function applyStyles(largura, orientacao) {
      const mediaQuery = `(min-width: ${largura}px) and (orientation: ${orientacao})`;
      if (window.matchMedia(mediaQuery).matches) {
        // Carregue o arquivo CSS correspondente
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = `styles/${mediaQuery}.css`;
        document.head.appendChild(link);
      }
    }
  
    // Aplique estilos para portrait e landscape
    applyStyles(largura, "portrait");
    applyStyles(largura, "landscape");
  });

