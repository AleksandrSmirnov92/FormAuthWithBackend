"use strict";
const button_Sign_in = document.querySelector(".button_Sign_in");
const button_Sign_up = document.querySelector(".button_Sign_up");
const FormSignIn = document.querySelector(".wrapper_form_Sign_in");
const FormSignUp = document.querySelector(".wrapper_form_Sign_up");
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
