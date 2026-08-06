"use strict";

const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("#nav-links");
const navigationLinks = document.querySelectorAll("#nav-links a");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear().toString();
}

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("open");

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
}

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navigation?.classList.remove("open");
        menuButton?.setAttribute("aria-expanded", "false");
    });
});