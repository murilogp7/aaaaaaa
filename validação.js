const form = document.getElementById("formulario");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwardconfirm = document.getElementById("senha-confirm");

form.addEventListener("submit", (event) =>{
    event.preventDefault();

checkInputUsername();
})

 function checkInputUsername(){
    const usernameValue = username.value;

    if(usernameValue === ""){
        errorInput(username, "preencha o username ")

    }

 }

 function errorInput(input,messege){
    const formItem = input.parentElement;
    const textMessege = formItem.querySelector("a")
     
textMessege.innerText= message;

formItem.className= "cont-form error"
}
