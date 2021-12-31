import {Header} from "./components/Header.js";
import MenuBurger from "./components/MenuBurger.js";
import Panel from "./components/Panel.js";

export default function App(){
    console.log("Ejecutando la app");
    const d = document;
    const $root = d.getElementById("root");
    $root.appendChild(Header());
    $root.appendChild(Panel());







    //carga de modulos...
    console.log("Hola mundo")
    MenuBurger(".burger-btn", ".panel", ".menu a");
}