const back = document.querySelector(".back")!;

back.addEventListener("click", () => {
  console.log("back");
  setTimeout(() => {
    window.location.href = "http://localhost:3000/";
    document.cookie = "username = ; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }, 1000);
});
function getUserName() {
  // fetch("http://localhost:3000/forms")
  //   .then((response) => {
  //     response.json();
  //   })
  //   .then((response) => {
  //     console.log(document.cookie);
  //   });
}
getUserName();
