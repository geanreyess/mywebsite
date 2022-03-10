/* *************ContactForm ************* */
export default function ContactForm() {
    const d = document;
    const $form = d.querySelector(".contact-form");
    const $loader = d.querySelector(".contact-form-loader");
    const $response = d.querySelector(".contact-form-response");

    $form.addEventListener("submit", e => {
        console.log("Provando uno dos tres");
        e.preventDefault();
        $loader.classList.remove("none");
        fetch("https://formsubmit.co/ajax/sagitario1990_11@hotmail.com", {
            method: "POST",
            body: new FormData(e.target)
        })
        .then(res => (res.ok ? res.json() : Promise.reject(res)))
        .then(json => {
            console.log(json);
            $loader.classList.add("none");
            location.hash = "#gracias"
            $form.reset();
        })
        .catch(err => {
            console.log(err);
            let message = err.statusText|| "Ocurrio un error al enviar, intenta nuevamente";
            $response.querySelector("h3").innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            $loader.classList.add(".none");
            setTimeout(() => {
                location.hash = "#close";
            }, 3000);

        });
    });
}