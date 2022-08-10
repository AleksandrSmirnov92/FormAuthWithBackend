"use strict";
const button_Sign_in = document.querySelector(".button_Sign_in");
const button_Sign_up = document.querySelector(".button_Sign_up");
const FormSignIn = document.querySelector(".wrapper_form_Sign_in");
const FormSignUp = document.querySelector(".wrapper_form_Sign_up");
const Button_submit_SignUp = document.querySelector("#Form1");
const Button_submit_SignIn = document.querySelector("#Form2");
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
Button_submit_SignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    let form = document.querySelector("form");
    console.log(form.element);
    console.log("форма отправилась1");
});
Button_submit_SignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("форма отправилась2");
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
