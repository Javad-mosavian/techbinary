const inpu = document.querySelector('#email');
const password = document.querySelector('#password');
const button = document.querySelector('#submit');
const err = document.querySelector('#err');
const form = document.querySelector("form");
const pattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

form.addEventListener('submit', (e) => {
    if (valid() === false) {
        err.classList.remove("hidden");
        button.disabled = !valid();
        e.preventDefault();
    }
});

inpu.addEventListener('input', () => {
    button.disabled = !valid();
});
password.addEventListener('input', () => {
    button.disabled = !valid();
});

function valid() {
    if (password.value.length >= 1) {
        return pattern.test(inpu.value);
    }else{
        return false;
    }
}