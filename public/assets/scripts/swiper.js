
const swiper = new Swiper(".mySwiper", {
    autoplay: {delay: 2000,},
    slidesPerView: 1.1,
    spaceBetween: 24,
    centeredSlides: true,
    grabCursor: true,
    time:300,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView:1,
        },
        768:{
            slidesPerView:1.5,
        },
        850:{
            slidesPerView:1.7,
        },
        1024: {
            slidesPerView: 1.9,
        },
        1280: {
            slidesPerView: 2.1,
        },
        1536:{
            slidesPerView: 2.5,
        }
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    autoplay: {delay: 2000,},
    slidesPerView: 1.3,
    spaceBetween: 24,
    centeredSlides: true,
    grabCursor: true,
    effect:"fade",
    time:400,
    loop: true,
});