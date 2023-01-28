const navData = {
    tool1 : {
        image: "./../assets/t-icons/google-drive.svg",
        toolName: "Direct link generator",
        altData: "Direct link generator",
        url: "https://www.abtahihasan.com/direct-link-generator"
    },
    tool2 : {
        image: "./../assets/t-icons/paypal.svg",
        toolName: "paypal fee calculator",
        altData: "paypal fee calculator",
        url: "https://www.abtahihasan.com/paypal-fee-calculator"
    },
    tool3 : {
        image: "./../assets/t-icons/stripe.svg",
        toolName: "stripe fee calculator",
        altData: "stripe fee calculator",
        url: "https://www.abtahihasan.com/stripe-fee-calculator"
    }
}

// select nav 
let navlinks = document.querySelector(".navlinks");
for(let x in navData) {
    let toolsListh = document.createElement("li");    
    toolsListh.innerHTML = `
    <a href="${navData[x].url}"
            ><img src="${navData[x].image}" alt="${navData[x].altData}" /><span
              >${navData[x].toolName}</span
            ></a
    >
    `
    navlinks.appendChild(toolsListh);
}

const sidebar = document.querySelector(".sidebar"),
main = document.querySelector(".main"),
menuIcon = document.querySelector(".manu-icon img");

menuIcon.onclick = () => {
    sidebar.classList.toggle("close");
    main.classList.toggle("full");
}
// pop up search box 
let popUp = document.querySelector(".search-pop-up"),
  searchIcon = document.querySelector(".show-search-pop-up i");
  searchIcon.onclick = () => {
    popUp.classList.toggle("show");
  }
  let searchBoxClose = document.querySelector(".search-pop-up > i");
  searchBoxClose.onclick = () => {
    popUp.classList.toggle("show");
  }