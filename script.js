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

    // Escolha do tamanho da tela do dispositivo 
    if (largura >= 320 && largura <= 480 && window.screen.orientation === "landscape") {
        // Celular pequeno 
        document.body.style.cssText = "@media (min-width: 320px) and (max-width:480px) and (orientation: landscape) { ... }";
      } else if (largura >= 481 && largura <= 768 && window.screen.orientation === "landscape") {
         // Celular medio
        document.body.style.cssText = "@media (min-width: 481px) and (max-width:768px) and (orientation: landscape) { ... }";
      } else if (largura >= 769 && largura <= 1024 && window.screen.orientation === "landscape") {
        // Tablet
        document.body.style.cssText = "@media (min-width: 768px) and (max-width:1024px) and (orientation: landscape) { ... }";
      } else if (largura >= 1025) {
        // Notebook e PC
        document.body.style.cssText = "@media (min-width: 1025px) { ... }";
      }
});
    //if (largura >= 320 && largura <= 480 && altura >= 480 && altura <= 1024) {
        // celular 
     //   document.body.style.cssText = "@media (min-width:481px) and (max-width:768px) { ... }";
  //  }    
   // if (largura >= 641 && largura <= 1136 && altura >= 1136 && altura <= 1920) {
        //celular deitado
  //      document.body.style.cssText = "@media (min-width: 641px) and (max-width:1136px) and (orientation: landscape) { ... }" 
   // }
   // if (largura >= 769 && largura <= 1024 && altura >= 1024 && altura <= 1280) {
        //tablet
    //    document.body.style.cssText = "@media (min-width: 769px) and (max-width:1024px) and (orientation: landscape) { ... }";
  //  }
  //  else {
        // notebook e PC
   //     document.body.style.cssText = "@media (min-width: 1024px) and (max-width:1200px) and (orientation: landscape) { ... }";
  //  }
//});