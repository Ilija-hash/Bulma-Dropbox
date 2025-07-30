// mobile menu

const burgerIcon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");
const navButton = document.querySelector("#nav-button");

burgerIcon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
  burgerIcon.classList.toggle("is-active");
  navButton.classList.toggle("ml-2");
});
