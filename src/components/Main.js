
import Portafolio from "./Portafolio.js";
import Skillset from "./Skillset.js";
import Tecnologias from "./Tecnologias.js";
import Contacto from "./Contacto.js";

export default function Main(){
    const $main = document.createElement("main");
    $main.appendChild(Portafolio());
    $main.appendChild(Skillset());
    $main.appendChild(Tecnologias());
    $main.appendChild(Contacto());


    return $main; 
}