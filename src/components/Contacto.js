export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.id = "contacto";
    $contacto.innerHTML = `
        <h2>Seccion del contacto</h2>
    `;
    
    return $contacto;
}