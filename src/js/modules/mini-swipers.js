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

export const poMobileMiniSlidersInit = (className) => {
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