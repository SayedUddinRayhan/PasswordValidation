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
