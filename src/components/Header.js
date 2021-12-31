
export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.innerHTML = `
        <div class="logo">
            <img src="src/assets/logo.png" alt="Logo">
            <p>Gean Reyes</p>
        </div>
        <img class="burger-btn" src="src/assets/menu-burger.svg" alt="Burger">
    `;

    




    return $header;
}