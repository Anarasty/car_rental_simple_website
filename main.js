const menuBtn = document.getElementById("nav__menu__btn");
const navLinks = document.getElementById("nav__links");
const menuBtnIcon = document.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container img", {
  ...scrollRevealOption,
  delay: 1000,
});

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

const selectCards = document.querySelectorAll(".select__card");
selectCards[0].classList.add("show__info");

const price = ["230", "450", "330", "700", "400"];

const priceEl = document.getElementById("select-price");

// function updateSwiperImage(eventName, args) {
//     if (eventName === "slideChangeTransitionStart") {
//         const index = args && args[0].realIndex;
//         priceEl.innerText = price[index]
//         selectCards.forEach((item) => {
//             item.classList.remove("show__info")
//         })
//     }
// }
function updateSwiperImage(eventName, args) {
  if (eventName === "slideChangeTransitionStart") {
    const index = args && args[0].realIndex;
    priceEl.innerText = price[index];

    // Удаляем класс у всех
    document.querySelectorAll(".select__card").forEach((item) => {
      item.classList.remove("show__info");
    });

    // Находим текущий активный слайд и добавляем show__info
    const activeSlide = document.querySelector(".swiper-slide-active");
    const activeCard = activeSlide.querySelector(".select__card");
    if (activeCard) {
      activeCard.classList.add("show__info");
    }
  }
}

const swiper = new Swiper(".swiper", {
  loop: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    depth: 500,
    modifier: 1,
    scale: 0.75,
    slideShadows: false,
    stretch: -100,
  },

  onAny(event, ...args) {
    updateSwiperImage(event, args);
  },
});

ScrollReveal().reveal(".story__card", {
  ...scrollRevealOption,
  interval: 500,
});

const banner = document.querySelector(".banner__wrapper");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".download__image img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".download__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".download__links", {
  ...scrollRevealOption,
  delay: 1000,
});
