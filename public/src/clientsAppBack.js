"use strict";
const back = document.querySelector(".back");
back === null || back === void 0 ? void 0 : back.addEventListener("click", () => {
    setTimeout(() => {
        window.location.href = "http://localhost:3000/";
    }, 1000);
});
