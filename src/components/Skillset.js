export default function Skillset(){
    const $skillset = document.createElement("section");
    $skillset.classList.add("sections");
    $skillset.classList.add("skills-container");
    $skillset.id = "skillset";
    $skillset.innerHTML = `
        <h2>Habilidades</h2>
        <ul class="skills">
            <li>Programación Web Frontend</li>
            <li>Programación Web Backend</li>
            <li>Autodidacta</li>
            <li>Persistente</li>
        </ul>
    `;
    
    return $skillset;
}