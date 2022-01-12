export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.innerHTML = `
        <h2 id="contacto"">Seccion del contacto</h2>
    `;
    
    return $contacto;
}