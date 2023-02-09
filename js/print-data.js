import {toolCardData} from "./api.js";
export function printCardData() {
    let cards = document.getElementById("cards");
      for(let i = 0; i < toolCardData.length; i++) {    
          const card  = `
          <a href="${toolCardData[i].url}">
            <div class="card">
              <img src="${toolCardData[i].image}" alt="${toolCardData[i].altData}" />
              <h2 class="tool-name">${toolCardData[i].toolName}</h2>
            </div>
          </a>
        `
        cards.insertAdjacentHTML("beforeend", card); 
      }  
}

