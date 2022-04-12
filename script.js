const menuOpen = document.getElementById("menu-open");
console.log(menuOpen);

const menuClose = document.getElementById("menu-close");
console.log(menuClose);

const mobileMenu = document.getElementById("mobile-menu");
console.log(mobileMenu);

menuOpen.addEventListener("click", () => {
  console.log("Clicked on Menu-open");
  mobileMenu.classList.add("active");
});

menuClose.addEventListener("click", () => {
  console.log("closing Event");
  mobileMenu.classList.remove("active");
});
