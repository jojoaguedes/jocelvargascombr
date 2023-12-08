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

    // Se o tamanho da tela do dispositivo corresponder às especificações da primeira media query, aplique as regras CSS definidas nessa media query
    if (largura >= 768 && largura <= 1024 && altura >= 1024 && altura <= 1280) {
        document.body.style.cssText = "@media (min-width: 768px) and (max-width:1024px) and (orientation: landscape) { ... }";
    }
    if (largura >= 481 && largura <= 768 && altura >= 768 && altura <= 1024) {
        // Caso contrário, aplique as regras CSS definidas na terceira media query
        document.body.style.cssText = "@media (min-width:481px) and (max-width:768px) { ... }";
    }    
    if (largura >= 640 && largura <= 1136 && altura >= 1136 && altura <= 1920) {
        document.body.style.cssText = "@media (min-width: 640px) and (max-width:1136px) and (orientation: landscape) { ... }" 
    } else {
        // Aplique as regras CSS definidas na segunda media query
        document.body.style.cssText = "@media (min-width: 1024px) and (orientation: landscape) { ... }";
    }
});