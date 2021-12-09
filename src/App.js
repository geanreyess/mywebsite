import {Header} from "./components/Header.js";

export default function App(){
    console.log("Ejecutando la app");
    const d = document;
    const $root = d.getElementById("root");
    $root.appendChild(Header());
}