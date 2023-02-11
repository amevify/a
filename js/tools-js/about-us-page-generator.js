const form = document.getElementById("form"),
    websiteName = document.getElementById("website-name"),
    websiteTypeInput = document.getElementById("websiteType"),
    descriptionInput = document.getElementById("description"),
    errField = document.querySelector(".err-message"),
    generate = document.getElementById("generate"),
    result = document.getElementById("result");


//  input validation 
const inputValidator = () => {
    let websiteNameVal = websiteName.value.trim(),
        websiteTypeVal = websiteTypeInput.value.trim(),
        descriptionVal = descriptionInput.value.trim();
    // website name validation 
    function validate(input, field) {
        if(input === "") {
            errMessage(field, "This input cannot leave blank");
        }
        else if (!isNaN(input)) {
            errMessage(field, "Number not accepted");
        }
        else if (input.length < 3) {
            errMessage(field, "Minimum 3 characters");
        }
        else {
            successMessage(field);  
        } 
    }
    validate(websiteNameVal, websiteName);
    validate(websiteTypeVal, websiteTypeInput);
    validate(descriptionVal, descriptionInput);

}
    
//  error massage 
function errMessage (input, message) {
    let fromControl = input.parentElement;
    let small = fromControl.querySelector("small");
    small.innerText = message;
    fromControl.className = "form-control error"
}
// seccess message 
function successMessage(input) {
    let fromControl = input.parentElement;
    let small = fromControl.querySelector("small");
    small.style.display = "none";
    fromControl.className = "form-control success"
}

// code generator

function printCode() {
    let websiteNameVal = websiteName.value.trim(),
        websiteTypeVal = websiteTypeInput.value.trim(),
        descriptionVal = descriptionInput.value.trim();
        result.value = `
        <h2>About Us!</h2>
        <h3 style="text-align: center;">Welcome To <span">${websiteNameVal}</span></h3>
        <p><span>${websiteNameVal}</span> is a Professional <span>${websiteTypeVal}</span> Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of <span>${websiteTypeVal}</span>, with a focus on dependability and <span id="W_Spec">${descriptionVal}</span>. We're working to turn our passion for <span id="W_Type3">tool website</span> into a booming <a href="https://www.abtahihasan.com/about-us-page-generator" rel="do-follow" style="color: inherit; text-decoration: none;">online website</a>. We hope you enjoy our <span id="W_Type4">tool website</span> as much as we enjoy offering them to you.</p>
        <p>I will keep posting more important posts on my Website for all of you. Please give your support and love.</p>
        <p style="font-weight: bold; text-align: center;">Thanks For Visiting Our Site<br><br> <span style="color: blue; font-size: 16px; font-weight: bold; text-align: center;">Have a nice day!</span></p>  
    `   
}

// form onsubmit  

form.onsubmit = (event) => {
    event.preventDefault();         
    inputValidator();

    let formControl = document.querySelectorAll(".form-control"),
    SuccessRate = 0,
    inputCount = formControl.length;
    formControl.forEach((formControl) => {
        if(formControl.className === "form-control success") {
            SuccessRate++;
        }
        if (inputCount === SuccessRate) {
            printCode();
        }
    })

    
}

// copy code btn 
let copyBtn = document.getElementById("copy-data");
copyBtn.onclick = () => {
    navigator.clipboard.writeText(result.value); 
}
