import { Autoplay } from "swiper/modules"


export const mainMiniSwipersInit = (className) => {
    const slider = new Swiper(className, {
        direction: 'vertical',
        slidesPerView: 'auto',
        mousewheel: false,
        speed: 900,
        modules: [Autoplay],
        autoplay: {
            delay: 500
        },
        loop: true,
    })
}

export const mainMobileMiniSlidersInit = (className) => {
    const slider = new Swiper(className, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        speed: 900,
    })
}

export const poMiniSlidersInit = (className) => {
    const slider = new Swiper(className, {
        direction: 'horizontal',
        slidesPerView: 'auto',
        centeredSlides: true,
        centerInsufficientSlides: true,
        speed: 900,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}

export const poMobileMiniSlidersInit = (className) => {
    const slider = new Swiper(className, {
        direction: 'horizontal',
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true,
        centerInsufficientSlides: true,
        centeredSlidesBounds: true,
        speed: 900,
    })
}