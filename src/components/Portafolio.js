export default function Portafolio(){
    const $portafolio = document.createElement("section");
    $portafolio.classList.add("sections");
    $portafolio.id = "portafolio";
    $portafolio.innerHTML = `
        <h2>Seccion del Portafolio</h2>
    `;
    
    return $portafolio;
}