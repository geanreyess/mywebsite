export default function Tecnologias(){
    const $tecnologias = document.createElement("section");
    $tecnologias.classList.add("sections");
    $tecnologias.classList.add("technologies-container");
    $tecnologias.id = "tecnologias";
    $tecnologias.innerHTML = `
        <h2>Tecnologías</h2>
        <div class="techs-carrousel">
            <div class="tooltip">
                <img src="./src/assets/img/tecs/html5.svg" alt="Html">
                <span class="tooltiptext">HTML</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/css.svg" alt="CSS">
                <span class="tooltiptext">CSS</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/javascript.svg" alt="JavaScript">
                <span class="tooltiptext">JavaScript</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/git.svg" alt="Git">
                <span class="tooltiptext">Git</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/github.svg" alt="Git-hub">
                <span class="tooltiptext">GitHub</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/node.svg" alt="Node JS">
                <span class="tooltiptext">Node JS</span>
            </div>
            <div class="tooltip">
                <img src="./src/assets/img/tecs/react.svg" alt="React JS">
                <span class="tooltiptext">React JS</span>
            </div>
        </div>
    `;
    
    return $tecnologias;
}