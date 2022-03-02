export default function MenuBurger(panelBtn, panel, menuLink) {
    const d = document;
    const $btnMenu = d.querySelector(panelBtn);
    const $menu = d.querySelector(panel);
    d.addEventListener('click', (e) => {
        
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)){
            
            $btnMenu.firstElementChild.classList.toggle("none");
            $btnMenu.lastElementChild.classList.toggle("none");
            $menu.classList.toggle("is-active");
            
        }

        if(e.target.matches(menuLink)){
            $btnMenu.firstElementChild.classList.remove("none");
            $btnMenu.lastElementChild.classList.add("none");
            $menu.classList.remove("is-active");
        }
        
        console.log(panelBtn)
        
    })
}