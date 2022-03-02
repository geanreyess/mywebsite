
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
        <button class="burger-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z"/></svg>
            <svg class="none" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"/></svg>
        </button>




        

    `;

    

    return $header;
}