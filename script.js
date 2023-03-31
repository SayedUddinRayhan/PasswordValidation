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
    if (passValue.length >= 8) {
        addClass("#length", "valid");
        removeClass("#length", "invalid");

        addIcon("#length", "fa-check");
        removeIcon("#length", "fa-times");
    } else {
        addClass("#length", "invalid");
        removeClass("#length", "valid");

        addIcon("#length", "fa-times");
        removeIcon("#length", "fa-check");
    }
}

function addClass(id, cl) {
    document.querySelector(id).classList.add(cl);
}

function removeClass(id, cl) {
    document.querySelector(id).classList.remove(cl);
}

function addIcon(id, cl) {
    document.querySelector(id).firstChild.add(cl);
}

function removeIcon(id, cl) {
    document.querySelector(id).firstChild.add(cl);
}