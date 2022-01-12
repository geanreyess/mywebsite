export default function Portafolio(){
    const $portafolio = document.createElement("section");
    $portafolio.classList.add("sections");
    $portafolio.innerHTML = `
        <h2 id="portafolio">Seccion del Portafolio</h2>
    `;
    
    return $portafolio;
}