export default function Panel(){

    const $panel = document.createElement("aside");
    $panel.classList.add("panel");
    $panel.innerHTML = `
        <nav class="menu">
            <a href="index.html#portafolio" data-scroll-spy>Portafolio</a>
            <a href="index.html#skillset" data-scroll-spy>Habilidades</a>
            <a href="index.html#tecnologias" data-scroll-spy>Tecnologías</a>
            <a href="index.html#contacto" data-scroll-spy>Contacto</a>
        </nav>
        <p><span class="cp">&copy;</span> Copyright 2022</p>
    `;



    return $panel;
}