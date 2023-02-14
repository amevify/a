//  error massage 
export function errMessage (input, message) {
    let fromControl = input.parentElement;
    let small = fromControl.querySelector("small");
    small.innerText = message;
    fromControl.className = "form-control error"
}
// seccess message 
export function successMessage(input) {
    let fromControl = input.parentElement;
    let small = fromControl.querySelector("small");
    small.style.display = "none";
    fromControl.className = "form-control success"
}
