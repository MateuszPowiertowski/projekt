const hamburger = document.getElementById("hamburger");
const navbar = document.querySelector(".navbar-primery");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
