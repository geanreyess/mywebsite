export default function Tecnologias(){
    const $tecnologias = document.createElement("section");
    $tecnologias.classList.add("sections");
    $tecnologias.innerHTML = `
        <h2 id="tecnologias"">Seccion del tecnologias</h2>
    `;
    
    return $tecnologias;
}