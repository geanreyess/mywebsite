export default function Panel(){

    const $panel = document.createElement("aside");
    $panel.classList.add("panel");
    $panel.innerHTML = `
        <nav class="menu">
            <a href="#seccion1" data-scroll-spy>Portafolio</a>
            <a href="#seccion2" data-scroll-spy>Skillset</a>
            <a href="#seccion3" data-scroll-spy>Tecnologias</a>
            <a href="#seccion4" data-scroll-spy>Contacto</a>
        </nav>
    `;



    return $panel;
}