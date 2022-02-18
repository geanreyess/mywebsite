export default function HeroImage(){

    const $heroImage = document.createElement("section");
    $heroImage.innerHTML = `
        <article class="heroImage">
            <img class="photo-perfil" src="./src/assets/img/foto-perfil.jpg" alt="Foto-GeanReyes">
            <div class="data">
                <p class="title">Hola, soy Gean Reyes</p>
                <p class="title">Hago paginas Web</p>
                <p class="comment">Soy un desarrollador de software orientado a paginas web del lado del cliente.</p>
            </div>
        </article>
    `;
    
    return $heroImage;
}