export default function Portafolio(){
    const $portafolio = document.createElement("section");
    $portafolio.classList.add("sections");
    $portafolio.classList.add("portfolios-container");
    $portafolio.id = "portafolio";
    $portafolio.innerHTML = `
        <h2>Mi Portafolio</h2>
        <article class="portfolio">
            <div class="img-proyect"></div>
            <div class="portfolio-info">
                <p class="pulso"><a href="https://geanreyess.github.io" target="_blank">Visita el Proyecto</a></p>
                <div class="reference-container">
                    <img src="src/assets/avatares/avatar-1.jpg" alt="Avatar del CEO">
                    <div class="comments">
                        <p>"Breve agradecieminmto del CEO de la Empresa"</p>
                        <p><i>Nombre del CEO</i></p>
                    </div>
                </div>
            </div>
        </article>
        <article class="portfolio">
            <div class="img-proyect"></div>
            <div class="portfolio-info">
                <p class="pulso"><a href="https://geanreyess.github.io" target="_blank">Visita el Proyecto</a></p>
                <div class="reference-container">
                    <img src="src/assets/avatares/avatar-1.jpg" alt="Avatar del CEO">
                    <div class="comments">
                        <p>"Breve agradecieminmto del CEO de la Empresa"</p>
                        <p><i>Nombre del CEO</i></p>
                    </div>
                </div>
            </div>
        </article>
        <article class="portfolio">
            <div class="img-proyect"></div>
            <div class="portfolio-info">
                <p class="pulso"><a href="https://geanreyess.github.io" target="_blank">Visita el Proyecto</a></p>
                <div class="reference-container">
                    <img src="src/assets/avatares/avatar-1.jpg" alt="Avatar del CEO">
                    <div class="comments">
                        <p>"Breve agradecieminmto del CEO de la Empresa"</p>
                        <p><i>Nombre del CEO</i></p>
                    </div>
                </div>
            </div>
        </article>
    `;
    
    return $portafolio;
}