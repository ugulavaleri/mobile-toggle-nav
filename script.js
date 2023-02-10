/*------------------------------------------------------------*/
/* ანუ ტელეფონის რეზოლუციაზე რომ გაცნდება ტექსტი, მაგის დაჭერაზე ჩამოიშლება ნავი რა */

const toggle = document.getElementById("mobile-nav-menu");
const mobileNav = document.getElementById("mobileNav");

mobileNav.addEventListener("click", () => {
    toggle.classList.toggle("show");
    toggle.classList.toggle("hide");
});
