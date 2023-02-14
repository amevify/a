// copy code btn 
export function copyCodeButton(result) {
    let copyBtn = document.getElementById("copy-btn");
    copyBtn.onclick = () => {
        navigator.clipboard.writeText(result.value);
        copyBtn.querySelector("img").src = "./../assets/icon/copied-solid.svg";
        setTimeout(() => {
            copyBtn.querySelector("img").src = "./../assets/icon/copy-solid.svg";
        }, 500)
}
}

