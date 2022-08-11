"use strict";
const button_Sign_in = document.querySelector(".button_Sign_in");
const button_Sign_up = document.querySelector(".button_Sign_up");
const FormSignIn = document.querySelector(".wrapper_form_Sign_in");
const FormSignUp = document.querySelector(".wrapper_form_Sign_up");
const Form1_SignUp = document.querySelector("#Form1");
let state = {
    classButton: "",
};
button_Sign_up.addEventListener("click", () => {
    state.classButton = "Sign_up";
    console.log("Зарегестрироваться", state.classButton);
    changeSignUpAndSignIn();
});
button_Sign_in.addEventListener("click", () => {
    state.classButton = "Sign_in";
    console.log("Войти", state.classButton);
    changeSignUpAndSignIn();
});
Form1_SignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const Login = document.querySelector("[name = 'Login']");
    const Password = document.querySelector("[name = 'Password']");
    const Repeat_password = document.querySelector("[name = 'Repeat_password']");
    const Email = document.querySelector("[name = 'Email']");
    let values = {
        Login: Login.value,
        Password: Password.value,
        Repeat_password: Repeat_password.value,
        Email: Email.value,
    };
    console.log("форма отправилась1");
    console.log(values);
    Login.value = "";
    Password.value = "";
    Repeat_password.value = "";
    Email.value = "";
});
function changeSignUpAndSignIn() {
    if (state.classButton === "Sign_up") {
        FormSignUp.classList.remove("display_flex");
        FormSignIn.classList.add("display_flex");
    }
    if (state.classButton === "Sign_in") {
        FormSignIn.classList.remove("display_flex");
        FormSignUp.classList.add("display_flex");
    }
}
