
const span = document.querySelector(".errormsg")
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#password-confirm");

function validatePasswords() {
    if (passwordInput.value !== passwordConfirmInput.value) {
        passwordInput.setCustomValidity("unmatched passwords");
        passwordConfirmInput.setCustomValidity("unmatched passwords");
        span.style.display = 'block';
    } else {
        passwordInput.setCustomValidity("");
        passwordConfirmInput.setCustomValidity("");
        span.style.display = 'none';
    };
}

passwordConfirmInput.addEventListener("input", validatePasswords)
passwordInput.addEventListener("input", validatePasswords)