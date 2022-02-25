
export function Header(){
    const $header = document.createElement("header");
    $header.classList.add("header");
    $header.innerHTML = `
        <span>Gean Reyes</span>
        <div class="social-media-container">
            <a href="https://www.facebook.com/geancarlo.reyesalayo.3/" target="_blank"><img src="src/assets/svg/facebook-brands.svg" alt="facebook"></a>
            <a href=""><img src="src/assets/svg/instagram-brands.svg" alt="Instagram"></a>
            <a href=""><img src="src/assets/svg/linkedin-brands.svg" alt="linkedin"></a>
            <a href=""><img src="src/assets/svg/twitter-brands.svg" alt="twitter"></a>
        </div>
        <img class="burger-btn" src="src/assets/menu-burger.svg" alt="Burger">
    `;

    

    return $header;
}