const back = document.querySelector(".back")!;
const nameUser = document.querySelector(".nameUser") as HTMLElement;
console.log(getCookie("username"));

nameUser.innerHTML = getCookie("username");
back.addEventListener("click", () => {
  console.log("back");
  setTimeout(() => {
    window.location.href = "http://localhost:3000/";
    document.cookie = "username = ; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }, 1000);
});

function getCookie(name: string): string {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : "";
}
