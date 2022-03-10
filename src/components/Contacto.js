export default function Contacto(){
    const $contacto = document.createElement("section");
    $contacto.classList.add("sections");
    $contacto.classList.add("contact-container");
    $contacto.id = "contacto";
    $contacto.innerHTML = `
        <h2>Contactame</h2>
        <p>"Si estas interesado en trabajar conmigo dejame tu correo y un mensaje explicandome en que consiste el proyecto."</p>
        <form method="POST" class="contact-form">
            <input type="email" name="email" id="email" required placeholder="Escribe tu email" pattern="^[a-zA-Z0-9.!#$%&'*+\/=?^_{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$" title="Formato de correo invalido">
            <textarea name="comment" id="comment" cols="30" rows="10" required placeholder="Escribe tu mensaje aqui" resize="none"></textarea>
            <div class="contact-form-loader none">
                <img src="src/assets/svg/loader.svg" alt="Enviando...">
            </div>
            <input class="btn" type="submit" value="ENVIAR MENSAJE">        
        </form>
        <article id="gracias" class="modal">
                <div class="modal-content">
                    <article class="contact-form-response">
                        <h3>
                            ¡Muchas gracias!
                            <br>
                            Por tus comentarios
                        </h3>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12,18c4,0,5-4,5-4H7C7,14,8,18,12,18z"/><path d="M12,2C6.486,2,2,6.486,2,12c0,5.514,4.486,10,10,10s10-4.486,10-10C22,6.486,17.514,2,12,2z M12,20c-4.411,0-8-3.589-8-8 s3.589-8,8-8s8,3.589,8,8S16.411,20,12,20z"/><path d="M13 12l2 .012C15.012 11.55 15.194 11 16 11s.988.55 1 1h2c0-1.206-.799-3-3-3S13 10.794 13 12zM8 11c.806 0 .988.55 1 1h2c0-1.206-.799-3-3-3s-3 1.794-3 3l2 .012C7.012 11.55 7.194 11 8 11z"/></svg>
                    </article>
                </div>
            </article>
    `;
    
    return $contacto;
}