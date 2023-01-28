const sidebar = document.querySelector(".sidebar"),
main = document.querySelector(".main"),
menuIcon = document.querySelector(".manu-icon img");

menuIcon.onclick = () => {
    sidebar.classList.toggle("close");
    main.classList.toggle("full");
}


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
      <h2>${toolCardData[x].toolName}</h2>
      </div>
      </a>
    `
    cards.appendChild(cardParent);
}