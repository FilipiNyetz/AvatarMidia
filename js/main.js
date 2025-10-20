function clickCard(idElemento) {
    console.log("Card clicado:", idElemento.id);
    idElemento.classList.toggle("reveal")
    console.log(idElemento.classList)

}

const swiper = new Swiper(".feedback-swiper", {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    pagination: {
        clickable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    },
});

function showResponse(element) {
    const buttonElement = element.children[0];
    const imgElement = buttonElement.children[0];
    const textResponse = element.children[1];

    // alterna a classe do texto
    textResponse.classList.toggle("show-describe");

    // verifica se o parágrafo está visível
    const isShowed = textResponse.classList.contains("show-describe");

    // alterna o ícone conforme o estado
    if (isShowed) {
        imgElement.src = "Assets/img/iconsFAQ/minusiCON.svg"; // ícone de "fechar"
    } else {
        imgElement.src = "Assets/img/iconsFAQ/maximusICON.svg"; // ícone de "abrir"
    }

    element.classList.toggle("open", isShowed);
}