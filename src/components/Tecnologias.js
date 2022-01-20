export default function Tecnologias(){
    const $tecnologias = document.createElement("section");
    $tecnologias.classList.add("sections");
    $tecnologias.id = "tecnologias";
    $tecnologias.innerHTML = `
        <h2>Seccion del tecnologias</h2>
    `;
    
    return $tecnologias;
}