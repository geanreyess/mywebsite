export default function Skillset(){
    const $skillset = document.createElement("section");
    $skillset.classList.add("sections");
    $skillset.innerHTML = `
        <h2 id="skillset">Seccion de los skillset</h2>
    `;
    
    return $skillset;
}