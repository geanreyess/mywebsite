export default function MenuBurger(panelBtn, panel, menuLink) {
    const d = document;
    let toggle;
    d.addEventListener('click', (e) => {
        
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            toggle = d.querySelector(panel).classList.toggle("is-active")
            if(!toggle){
                d.querySelector(panel).classList.add("not-active")
            }else {
                d.querySelector(panel).classList.remove("not-active")

            }
            
        }

        if(e.target.matches(menuLink)){
            d.querySelector(panel).classList.remove("is-active")
            // d.querySelector(panelBtn).classList.remove("is-active")
            console.log("Se desactivo")
        }


    })
}