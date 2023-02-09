import {printCardData} from "./print-data.js";
import {searchEngine} from "./search-engine.js";

const sidebar = document.querySelector(".sidebar"),
main = document.querySelector(".main"),
menuIcon = document.querySelector(".manu-icon img");

menuIcon.onclick = () => {
    sidebar.classList.toggle("close");
    main.classList.toggle("full");
}

// preloader 
window.onload = () => {
  let preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
}

// search engine
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", searchEngine)

// print tools cards 
printCardData();




