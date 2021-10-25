// ***** H E A D E R *****

// header > logo 

let header_1_logo = document.querySelector(".header-1-logo");

header_1_logo.addEventListener("mouseover", function () {

    document.querySelector(".fa-shopify").style.textShadow = "2px 2px rgb(167, 167, 167)";
    document.querySelector(".header-1-logo-span").style.textShadow = "2px 2px rgb(167, 167, 167)";
});

header_1_logo.addEventListener("mouseout", function () {

    document.querySelector(".fa-shopify").style.textShadow = "";
    document.querySelector(".header-1-logo-span").style.textShadow = "";
});

// header > icons

let header_3_icons_1 = document.getElementsByClassName("header-3-icons-all")[0];
let header_3_icons_2 = document.getElementsByClassName("header-3-icons-all")[1];
let header_3_icons_3 = document.getElementsByClassName("header-3-icons-all")[2];

// header > icons 1

header_3_icons_1.addEventListener("mouseover", function () {

    header_3_icons_1.style.textShadow = "2px 2px rgb(167, 167, 167)";
});

header_3_icons_1.addEventListener("mouseout", function () {

    header_3_icons_1.style.textShadow = "";
});

// header > icons 2

header_3_icons_2.addEventListener("mouseover", function () {

    header_3_icons_2.style.textShadow = "2px 2px rgb(167, 167, 167)";
});

header_3_icons_2.addEventListener("mouseout", function () {

    header_3_icons_2.style.textShadow = "";
});

// header > icons 3

header_3_icons_3.addEventListener("mouseover", function () {

    header_3_icons_3.style.textShadow = "2px 2px rgb(167, 167, 167)";
});

header_3_icons_3.addEventListener("mouseout", function () {

    header_3_icons_3.style.textShadow = "";
});


// ***** N A V B A R *****

let navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-active");
    }

    else {

        navbar.classList.remove("navbar-active");
    }
});

window.addEventListener("load", function () {

    if (window.scrollY > 80) {

        navbar.classList.add("navbar-active");
    }

    else {

        navbar.classList.remove("navbar-active");
    }
});


// ***** H O M E  1 *****

let mySwiper_home_1 = new Swiper(".mySwiper-home-1", {

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    loop: true,
    centeredSlides: true,
    cssMode: false,
    mousewheel: false,
    direction: "horizontal",
    keyboard: false,
    // keyboard: {
    //     enabled: true,
    // },

    freeMode: false,
    grabCursor: true,
    loopFillGroupWithBlank: false,
    effect: "fade",
    effect: "cube",
    effect: "coverflow",
    // coverflowEffect: {
    //     rotate: 50,
    //     stretch: 0,
    //     depth: 100,
    //     modifier: 1,
    //     slideShadows: true,
    // },

    effect: "flip",
    effect: "cards",
    effect: "creative",
    // creativeEffect: {
    //     prev: {
    //       shadow: true,
    //       translate: ["-120%", 0, -500],
    //     },
    //     next: {
    //       shadow: true,
    //       translate: ["120%", 0, -500],
    //     },
    //   },

    effect: "none",

    // scrollbar: {
    //     el: ".swiper-scrollbar",
    //     hide: true,
    // },

    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
        //   type: "fraction"
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  2 *****


// ***** H O M E  3 *****

let mySwiper_home_3 = new Swiper(".mySwiper-home-3", {

    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  4 *****

let mySwiper_home_4 = new Swiper(".mySwiper-home-4", {

    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    // autoplay: {
    //     delay : 5000,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  5 *****



// ***** H O M E  6 *****

let mySwiper_home_6 = new Swiper(".mySwiper-home-6", {

    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 10,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  7 *****

let mySwiper_home_7 = new Swiper(".mySwiper-home-7", {

    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 15,
    centeredSlides: false,
    loop: false,
    grabCursor: true,
    // autoplay: {
    //     delay : 5000,
    //     disableOnInteraction: false,
    // },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  8 *****

let mySwiper_home_8 = new Swiper(".mySwiper-home-8", {

    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 7,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// ***** H O M E  9 *****

let mySwiper_home_9 = new Swiper(".mySwiper-home-9", {

    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    effect: "fade",
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    // navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev",
    // },
});


// ***** H O M E  10 *****

let mySwiper_home_10 = new Swiper(".mySwiper-home-10", {

    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 15,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ***** H O M E  11 *****

let mySwiper_home_11 = new Swiper(".mySwiper-home-11", {

    slidesPerView: 6,
    slidesPerGroup: 1,
    spaceBetween: 15,
    centeredSlides: false,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay : 5000,
        disableOnInteraction: false,
    },
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //     dynamicBullets: true,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
