const menuBtn = document.getElementById("nav__menu__btn")
const navLinks = document.getElementById("nav__links")
const menuBtnIcon = document.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open")

    const isOpen = navLinks.classList.contains("open")
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line")
})

const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
} 

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
})

ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 500,
})

ScrollReveal().reveal(".header__container img", {
    ...scrollRevealOption,
    delay: 1000,
})

ScrollReveal().reveal(".range__card", {
    duration: 1000,
    interval: 500,
});

ScrollReveal().reveal(".location__image img", {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal(".location__info .section__header", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".location__info p", {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal(".location__info .location__btn", {
    ...scrollRevealOption,
    delay: 1500,
});