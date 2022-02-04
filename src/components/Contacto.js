export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.classList.add("contact-container");
    $contacto.id = "contacto";
    $contacto.innerHTML = `
        <h2>Contactame</h2>
        <p>"Si estas interezado en hacer negocios conmigo dejame tu correo y un mensaje explicandome en que consiste el proyecto."</p>
        <form action="">
            <label for="email">Correo</label>
            <input type="text" name="email" id="email" required placeholder="Escribe tu email">
            <label for="comment">Mensaje</label>
            <textarea name="comment" id="comment" cols="30" rows="10" required placeholder="Escribe tu mensaje aqui" resize="none"></textarea>
            <input type="submit" value="Enviar">        
        </form>
    `;
    
    return $contacto;
}