export default function Panel(){

    const $panel = document.createElement("aside");
    $panel.classList.add("panel");
    $panel.innerHTML = `
        <nav class="menu">
            <a href="index.html#portafolio" data-scroll-spy><span><img src="src/assets/svg/suitcase-solid.svg" alt="suitcase"></span>Portafolio</a>
            <a href="index.html#skillset" data-scroll-spy><span><img src="src/assets/svg/award-solid.svg" alt="Award"></span>Habilidades</a>
            <a href="index.html#tecnologias" data-scroll-spy><span><img src="src/assets/svg/satellite-dish-solid.svg" alt="satellite"></span>Tecnologías</a>
            <a href="index.html#contacto" data-scroll-spy><span><img src="src/assets/svg/paper-plane-solid.svg" alt="paper-plane"></span>Contacto</a>
        </nav>
        <p><span class="cp">&copy;</span> Copyright 2022</p>
    `;



    return $panel;
}