
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword');
const button = document.querySelector('#submit');
const form = document.querySelector("form");

const passwordPattern = /^(?=.*[A-Za-z]).{8,}$/;

function validateForm() {
    let isValid = true;

    // Validate password
    if (!passwordPattern.test(password.value.trim())) {
        password.classList.add("border-red-500");
        isValid = false;
    } else {
        password.classList.remove("border-red-500");
    }

    // Validate password match
    if (repassword.value !== password.value) {
        repassword.classList.add("border-red-500");
        isValid = false;
    } else {
        repassword.classList.remove("border-red-500");
    }

    button.disabled = !isValid;
    return isValid;
}

// Event listeners
form.addEventListener('submit', (e) => {
    if (!validateForm()) {
        e.preventDefault();
    }
});

password.addEventListener('input', validateForm);
repassword.addEventListener('input', validateForm);
