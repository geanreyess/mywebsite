export default function MenuBurger(panelBtn, panel, menuLink) {
    const d = document;
    d.addEventListener('click', (e) => {
        console.log("Se hizo click")
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            d.querySelector(panel).classList.toggle("is-active")
            d.querySelector(panelBtn).classList.toggle("is-active")
            console.log("Se activo")
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            d.querySelector(panelBtn).classList.remove("is-active")
            console.log("Se desactivo")
        }


    })
}