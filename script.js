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

passField.addEventListener('focus', function () {
    removeClass("#box2", "hide");
})

passField.addEventListener('blur', function () {
    addClass("#box2", "hide");
})


function validation(passValue) {
    if (passValue.length >= 8) {
        valid("#length");
    } else {
        invalid("#length");
    }


    if (passValue.match(/[A-z]/)) {
        valid("#letter");
    } else {
        invalid("#letter");
    }

    if (passValue.match(/[A-Z]/)) {
        valid("#capital");
    } else {
        invalid("#capital");
    }

    if (passValue.match(/\d/)) {
        valid("#number");
    } else {
        invalid("#number");
    }
}


function valid(id) {
    addClass(id, "valid");
    removeClass(id, "invalid");

    addIcon(id, "fa-check");
    removeIcon(id, "fa-times");
}

function invalid(id) {
    addClass(id, "invalid");
    removeClass(id, "valid");

    addIcon(id, "fa-times");
    removeIcon(id, "fa-check");
}



function addClass(id, cl) {
    document.querySelector(id).classList.add(cl);
}

function removeClass(id, cl) {
    document.querySelector(id).classList.remove(cl);
}

function addIcon(id, cl) {
    document.querySelector(id).firstChild.classList.add(cl);
}

function removeIcon(id, cl) {
    document.querySelector(id).firstChild.classList.remove(cl);
}