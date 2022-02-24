
export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.innerHTML = `
        <span>Gean Reyes</span>
        <img class="burger-btn" src="src/assets/menu-burger.svg" alt="Burger">
    `;

    

    return $header;
}