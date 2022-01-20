export default function Skillset(){
    const $skillset = document.createElement("section");
    $skillset.classList.add("sections");
    $skillset.id = "skillset";
    $skillset.innerHTML = `
        <h2>Seccion de los skillset</h2>
    `;
    
    return $skillset;
}