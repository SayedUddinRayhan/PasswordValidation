let passField = document.querySelector("#passField");
let eye = document.querySelector("#eye");

eye.addEventListener("click", function () {
    if (passField.type == "password") {
        passField.type = "text";

        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");

    } else {
        passField.type = "password";
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    }
})

passField.addEventListener('keyup', function () {
    validation(passField.value);
})

function validation(passValue) {
    let length1 = document.querySelector("#length");
    let icon = document.querySelector("#length").firstChild;
    if (passValue.length >= 8) {
        length1.classList.add("valid");
        length1.classList.remove("invalid");
        icon.classList.add("fa-check");
        icon.classList.remove("fa-times");
    } else {
        length1.classList.add("invalid");
        length1.classList.remove("valid");
        icon.classList.add("fa-times");
        icon.classList.remove("fa-check");
    }
}