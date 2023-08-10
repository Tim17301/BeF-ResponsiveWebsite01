const hamburger = document.querySelector(".hamburger");
const navbarItems = document.querySelector(".navbar-items");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbarItems.classList.toggle("active");
})

document.querySelectorAll(".navbar-items li a").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarItems.classList.toggle("active");
}))