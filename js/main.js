let banners = ["Os melhores do Brasil", "Qualidade e preco baixo"];

let bannerAtual = 0;

let trocaBanner = () => {
    bannerAtual = (bannerAtual + 1) % 2;
    document.querySelector('h2#mensagem').textContent = banners[bannerAtual];
}

setInterval(trocaBanner, 2000);