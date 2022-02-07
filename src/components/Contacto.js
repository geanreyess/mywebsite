export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.classList.add("contact-container");
    $contacto.id = "contacto";
    $contacto.innerHTML = `
        <h2>Contactame</h2>
        <p>"Si estas interezado en hacer negocios conmigo dejame tu correo y un mensaje explicandome en que consiste el proyecto."</p>
        <form action="https://formsubmit.co/sagitario1990_11@hotmail.com" method="POST">
            <label for="email">Correo</label>
            <input type="email" name="email" id="email" required placeholder="Escribe tu email" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="Formato de correo invalido">
            <label for="comment">Mensaje</label>
            <textarea name="comment" id="comment" cols="30" rows="10" required placeholder="Escribe tu mensaje aqui" resize="none"></textarea>
            <input type="submit" value="Enviar">        
        </form>
    `;
    
    return $contacto;
}