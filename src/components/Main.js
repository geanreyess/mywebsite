import HeroImage from "./HeroImage.js";

export default function Main(){
    const $main = document.createElement("main");
    $main.appendChild(HeroImage());
    // $main.appendChild(Portafolio());
    // $main.appendChild(Skillset());
    // $main.appendChild(Tecnologias());
    // $main.appendChild(contacto());


    return $main; 
}