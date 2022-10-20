var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 16,
    breakpoints: {
        375: {
            slidesPerView: 1.5,
            spaceBetween: 16,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 16,
        },
        1200: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
        // when window width is >= 640px
        1920: {
            slidesPerView: 4,
            spaceBetween: 16,
        }
      },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});