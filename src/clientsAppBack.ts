const back = document.querySelector(".back");

back?.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = "http://localhost:3000/";
  }, 1000);
});
