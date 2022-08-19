const button_Sign_in = document.querySelector(".button_Sign_in")!;
const button_Sign_up = document.querySelector(".button_Sign_up")!;
const FormSignIn = document.querySelector(".wrapper_form_Sign_in")!;
const FormSignUp = document.querySelector(".wrapper_form_Sign_up")!;
const Form1_SignUp = document.querySelector("#Form1")!;
const error_Login = document.querySelector("#error_Login")!;
const error_Password = document.querySelector("#error_Password")!;
const error_Repeat_password = document.querySelector("#error_Repeat_password")!;
let state = {
  classButton: "",
  values: {
    Login: "",
    Password: "",
    Repeat_password: "",
    Email: null,
  },
  valuesTrue: [false, false, false],
};
button_Sign_up.addEventListener("click", () => {
  state.classButton = "Sign_up";
  // console.log("Зарегестрироваться", state.classButton);
  changeSignUpAndSignIn();
});
button_Sign_in.addEventListener("click", () => {
  state.classButton = "Sign_in";
  console.log("Войти", state.classButton);
  changeSignUpAndSignIn();
});

Form1_SignUp.addEventListener("submit", (e) => {
  e.preventDefault();
  const Login = document.querySelector("[name = 'Login']")! as HTMLInputElement;
  const Password = document.querySelector(
    "[name = 'Password']"
  )! as HTMLInputElement;
  const Repeat_password = document.querySelector(
    "[name = 'Repeat_password']"
  )! as HTMLInputElement;
  const Email = document.querySelector("[name = 'Email']")! as HTMLInputElement;
  formValidation(Login, Password, Repeat_password);
  console.log(state.values);
  let include: any = state.valuesTrue.includes(false);

  if (include === false) {
    (Login.value = ""), (Password.value = ""), (Repeat_password.value = "");
    createUsers();
    console.log("форма отправилась1");
  } else {
    console.log("Заполните форму до конца");
  }
  Email.value = "";
  console.log(JSON.stringify(state.values));
  // createUsers();
});

function createUsers() {
  fetch("http://localhost:3000/forms", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(state.values),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // if (response.status === "success") {
      //   setTimeout(() => {
      //     window.location.href = "http://localhost:3000/forms";
      //   }, 2000);
      //   console.log("Успешно");
      // } else {
      //   console.log("Ошибка заполнения формы");
      // }
    });
}
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
function formValidation(
  Login: HTMLInputElement,
  Password: HTMLInputElement,
  Repeat_password: HTMLInputElement
) {
  let message: string = "";
  // Login
  if (Login.value === "" || Login.value === null) {
    message = "Введите логин";
    error_Login.innerHTML = `<span>${message}</span>`;
    state.valuesTrue[0] = false;
  } else if (Login.value.length <= 4) {
    message = "Логин слишком короткий";
    error_Login.innerHTML = `<span>${message}</span>`;
    state.valuesTrue[0] = false;
  } else {
    state.values.Login = Login.value;
    error_Login.innerHTML = ``;
    state.valuesTrue[0] = true;
  }
  // Password
  if (Password.value === "" || Password.value === null) {
    message = "Введите пароль";
    error_Password.innerHTML = `<span>${message}</span>`;
    state.valuesTrue[1] = false;
  } else {
    state.values.Password = Password.value;
    error_Password.innerHTML = "";
    state.valuesTrue[1] = true;
  }
  // Repeat password
  if (Repeat_password.value === "" || Repeat_password.value === null) {
    message = "Повторите пароль";
    error_Repeat_password.innerHTML = `<span>${message}</span>`;
    state.valuesTrue[2] = false;
  } else if (Repeat_password.value !== Password.value) {
    message = "Пароль не совпадает";
    error_Repeat_password.innerHTML = `<span>${message}</span>`;
    state.valuesTrue[2] = false;
  } else {
    state.values.Repeat_password = Repeat_password.value;
    error_Repeat_password.innerHTML = "";
    state.valuesTrue[2] = true;
  }
}
