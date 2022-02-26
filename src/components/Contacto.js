export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.classList.add("contact-container");
    $contacto.id = "contacto";
    $contacto.innerHTML = `
        <h2>Contactame</h2>
        <p>"Si estas interesado en trabajar conmigo dejame tu correo y un mensaje explicandome en que consiste el proyecto."</p>
        <form action="https://formsubmit.co/3a2c46427c3264386fcd28579a80ba1b" method="POST">
            <input type="email" name="email" id="email" required placeholder="Escribe tu email" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="Formato de correo invalido">
            <textarea name="comment" id="comment" cols="30" rows="10" required placeholder="Escribe tu mensaje aqui" resize="none"></textarea>
            <input type="submit" value="Enviar">        
        </form>
    `;
    
    return $contacto;
}