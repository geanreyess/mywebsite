export default function HeroImage(){

    const $heroImage = document.createElement("section");
    $heroImage.innerHTML = `
        <article class="heroImage">
            <div class="data">
                <p class="title">Hola, soy Gean Reyes...</p>
                <p class="title">y desarrollo para la web</p>
            </div>
            <img class="photo-perfil" src="./src/assets/img/foto-perfil.jpg" alt="Foto-GeanReyes">
        </article>
    `;
    
    return $heroImage;
}