document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".navToggle");
    const navMenu = document.querySelector(".navMenu");

    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});