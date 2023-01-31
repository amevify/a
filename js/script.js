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
function searchEngine() {
  let searchInputVal = searchInput.value.toUpperCase(), 
  card = document.querySelectorAll(".card");
  console.log(searchInputVal);
  
  for(let i = 0; i < card.length; i++) {
    let tName = card[i].querySelector(".tool-name"),
     nameValue = (tName.textContent || tName.innerText).toUpperCase();
     console.log(nameValue);
     if(nameValue.indexOf(searchInputVal) > -1) {
      card[i].style.display = "";
     } else {
      card[i].style.display = "none";
     }
  }
}

searchInput.addEventListener("keyup", searchEngine)

// let cards = document.querySelector(".cards");
let cards = document.getElementById("cards");
for(let x in toolCardData) {
    let cardParent = document.createElement("div");
    
    cardParent.innerHTML = `
    <!-- card 1  -->
    <a href="${toolCardData[x].url}">
    <div class="card">
      <img
        src="${toolCardData[x].image}"
        alt="${toolCardData[x].altData}"
      />
      <h2 class="tool-name">${toolCardData[x].toolName}</h2>
      </div>
      </a>
    `
    cards.appendChild(cardParent);
}
