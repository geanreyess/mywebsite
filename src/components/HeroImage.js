export default function HeroImage(){

    const $heroImage = document.createElement("section");
    $heroImage.innerHTML = `
        <article class="hero-image" style="--hero-image:url('../img/hero-image-2.jpg');--hero-attachment: fixed;">
            <aside class="hero-image-opacity" style="--hero-opacity-color: var(--black-alpha-color)">
                <div class="hero-image-content">
                    <h2 class="hero-image-title" style="--hero-text-color: var(--white-color)">Hola, soy Gean Reyes...<br>y desarrollo para la web</h2>
                    <img class="photo-perfil" src="./src/assets/img/foto-perfil.jpg" alt="Foto-GeanReyes">
                </div>
            </aside>
        </article>
    `;
    
    return $heroImage;
}



















