const form = document.getElementById("form"),
 websiteName = document.getElementById("website-name"),
 emailInput = document.getElementById("email"),
 urlInput = document.getElementById("website-url"),
 errField = document.querySelector(".err-message"),
 generate = document.getElementById("generate"),
 result = document.getElementById("result");
 let websiteNameVal = websiteName.value.trim(),
 emailInputVal = emailInput.value.trim(),
 urlInputVal = urlInput.value.trim();   

//  input validation 
const inputValidator = () => {
    let websiteNameVal = websiteName.value.trim(),
    emailInputVal = emailInput.value.trim(),
    urlInputVal = urlInput.value.trim();   
    // website name validation 
    if(websiteNameVal === "") {
        errMessage(websiteName, "This input cannot leave blank");
    }
    else if (!isNaN(websiteNameVal)) {
        errMessage(websiteName, "Number not accepted");
    }
    else if (websiteNameVal.length < 3) {
        errMessage(websiteName, "Minimum 3 characters");
    }
    else {
        successMessage(websiteName);  
    } // check is email 
    function isEmail() {
  
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInputVal))
         {
           return (true)
         }      
           return (false)   
       }
        // email validation 
        if(emailInputVal === "") {
            errMessage(emailInput, "This input cannot leave blank");
        }
        else if (!isEmail()) {
            errMessage(emailInput, "Please Enter valid email");
        }
        else if (websiteNameVal.length < 3) {
            errMessage(emailInput, "Minimum 3 characters");
        }
        else {
            successMessage(emailInput);  
        }
        // url validation 
    function isUrl(url) {
        if(/^(http(s)?:\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(url)) {
            return true;
        } else {
            return false;
        }
        }
        if(urlInputVal === "") {
            errMessage(urlInput, "This input cannot leave blank");
        }
        else if (!isUrl(urlInputVal)) {
            errMessage(urlInput, "Please Enter valid Url");
        }
        else {
            successMessage(urlInput);  
        }
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
    emailInputVal = emailInput.value.trim(),
    urlInputVal = urlInput.value.trim(); 
    result.value = `
    <h2>Privacy Policy for ${websiteNameVal}</h2>
    <p>At Abtahi hasan, accessible from ${urlInputVal}, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Abtahi hasan and how we use it.</p>
    <p>If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at <b>${emailInputVal}</b></p>
    <h2>Log Files</h2>
    <p>Abtahi hasan follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</p>
    <h2>Cookies and Web Beacons</h2>
    <p>Like any other website, Abtahi hasan uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>
    <h2>Google DoubleClick DART Cookie</h2>
    <p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL – <a href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads</a></p>
    <h2>Privacy Policies</h2>
    <P>You may consult this list to find the Privacy Policy for each of the advertising partners of Abtahi hasan. Our Privacy Policy was created with the help of the <a href="https://www.abtahihasan.com">GDPR Privacy Policy Generator</a></p>
    <p>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Abtahi hasan, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.</p>
    <p>Note that Abtahi hasan has no access to or control over these cookies that are used by third-party advertisers.</p>
    <h2>Third Pary Privacy Policies</h2>
    <p>Abtahi hasan's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</p>
    <p>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</p>
    <h2>Children's Information</h2>
    <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
    <p>Abtahi hasan does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.</p>
    <h2>Online Privacy Policy Only</h2>
    <p>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Abtahi hasan. This policy is not applicable to any information collected offline or via channels other than this website.</p>
    <h2>Consent</h2>
    <p>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</p>`   
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
