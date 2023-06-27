const burger = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const subscribe = document.getElementById("subscribe");

burger.addEventListener("click", () => {
  if (menu.classList.contains("utility")) {
    menu.classList.remove("utility");
    subscribe.classList.add("utility")
  } else {
    menu.classList.add("utility");
    subscribe.classList.remove("utility")

  }
});



