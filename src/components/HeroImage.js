export default function HeroImage(){

    const $heroImage = document.createElement("section");
    $heroImage.innerHTML = `
        <article class="heroImage">
            <img class="photo-perfil" src="./src/assets/img/foto-perfil.jpg" alt="Foto-GeanReyes">
            <div class="data">
                <h1>Gean Reyes</h1>
                <p>Desarrollador FullStack MERN</p>
            </div>
        </article>
    `;
    
    return $heroImage;
}