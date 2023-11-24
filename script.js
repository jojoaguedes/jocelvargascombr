const Links = {
    urlWhatsapp: "https://wa.me/message/6APDXKIURGWRD1",
    urlInstagram: "https://instagram.com/jocelvargasoficial",
    urlFacebool: "https://www.facebook.com/JocelVargasOficial/",
    urlSpotify: "https://open.spotify.com/artist/7nfkCHEbzmE0CWTnV3GTFq",
    urlDeezer: "https://deezer.page.link/VnYsP1nCbUQgNr5EA",
    urlAppleMusic: "https://music.apple.com/br/artist/jocel-vargas/1502460982",
    urlYoutube: "https://youtube.com/jocelvargasoficial",
    urlCifraClub: "https://www.cifraclub.com.br/jocel-vargas/"
}

document.addEventListener('DOMContentLoaded', function() {
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
