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
    },
    tool4 : {
      image: "./../assets/t-icons/privacy-policy-generator.svg",
      toolName: "Privacy Generator",
      altData: "Privacy Policy Generator",
      url: "https://www.abtahihasan.com/privacy-policy-generator"
  },
  tool5 : {
    image: "./../assets/t-icons/meta-tag-generator.svg",
    toolName: "Meta tag Generator",
    altData: "Meta tag Generator",
    url: "https://www.abtahihasan.com/meta-tag-generator"
},
  tool6 : {   
        image: "./../assets/t-icons/about-us-page-generator.svg",
        toolName: "About Us page Generator",
        altData: "About Us page Generator",
        url: "https://www.abtahihasan.com/about-us-page-generator"
    },
}

// select nav 
let navlinks = document.querySelector(".navlinks");
for(let x in navData) {
    let toolsListh = document.createElement("li");   
    toolsListh.classList.add("list");
    toolsListh.innerHTML = `
    <a href="${navData[x].url}"
            ><img src="${navData[x].image}" alt="${navData[x].altData}" /><span class="tool-name"
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

// search engine

let searchInputSide = document.querySelector(".search-box > input") ;
let searchInputPop= document.querySelector(".pop-up-search-box > input");
function searchEngine(inputs) {
  let input = inputs.value.toUpperCase(); 
  list = document.querySelectorAll(".list");
  for(let i = 0; i < list.length; i++) {
    let tName = list[i].querySelector("span"),
     nameValue = (tName.textContent || tName.innerText).toUpperCase();
     if(nameValue.indexOf(input) > -1) {
      list[i].style.display = "";
     } else {
      list[i].style.display = "none";
     }
  }
}

searchInputSide.onkeyup = function (){
  searchEngine(this);
}
searchInputPop.onkeyup = function (){
  searchEngine(this);
}

// preloader 
window.onload = () => {
  let preloader = document.querySelector(".preloader");
  preloader.style.display = "none";
}
