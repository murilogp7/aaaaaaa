const btn = document.getElementById("btn");
const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("senha-confirm");

btn.addEventListener("click", (event) => {
    event.preventDefault();
    checkInputEmail();
});

function checkInputEmail() {
    const emailValue = email.value.trim();

    if (emailValue === "murilo@gmail.com") {
        errorInput(email, "Este e-mail já está em uso.");
    }
}

function errorInput(input, message) {
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("small"); // ou "span", dependendo do HTML

    if (textMessage) {
        textMessage.innerText = message;
    }

    formItem.className = "cont-form error"; // Altera a classe corretamente
}
