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