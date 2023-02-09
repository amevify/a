import {toolCardData} from "./api.js";
export function searchEngine() {
  let searchInput = document.getElementById("search-input");
  let searchInputVal = searchInput.value.toLowerCase();
  let cards = document.getElementById("cards");
  let notMatchKeywordErr = document.querySelector(".not-match-keyword");
  cards.innerHTML = ``;
  // create search result 
    try {
      for(let i = 0; i < toolCardData.length; i++) {
        if(toolCardData[i].toolName.toLowerCase().includes(searchInputVal) || toolCardData[i].description.toLowerCase().includes(searchInputVal) || toolCardData[i].tag.toLowerCase().includes(searchInputVal)) {
          const card = `
            <a href="${toolCardData[i].url}">
              <div class="card">
                <img src="${toolCardData[i].image}" alt="${toolCardData[i].altData}"/>
                <h2 class="tool-name">${toolCardData[i].toolName}</h2>
              </div>
            </a> `
            
            cards.insertAdjacentHTML("beforeend", card); 
        }    
      };
    }
    catch(err) {
      notMatchKeywordErr.innerHTML = `<h2 class="keyword-not-match">No result found for "${searchInputVal}"</h2>`
    }
}
