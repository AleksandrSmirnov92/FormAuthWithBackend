"use strict";
const back = document.querySelector(".back");
let value = "; " + document.cookie;
console.log(value);
back.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "http://localhost:3000/";
        document.cookie = "username = ; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    }, 1000);
});