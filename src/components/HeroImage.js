export default function HeroImage(){

    const $heroImage = document.createElement("section");
    $heroImage.innerHTML = `
        <article class="heroImage">
            <img class="photo-perfil" src="./src/assets/img/foto-perfil.jpg" alt="Foto-GeanReyes">
            <div class="data">
                <h1>Gean Carlo</h1>
                <p>Desarrollador Frontend</p>
            </div>
        </article>
    `;
    
    return $heroImage;
}