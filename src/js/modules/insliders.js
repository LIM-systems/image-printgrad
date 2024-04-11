import { inSliders } from './common'

export const inSlidersInit = (extSlider, index) => {
    const slider = new Swiper('.inslider_' + index, {
        wrapperClass: 'inslider__wrapper',
        slideClass: 'inslider__screen',
        direction: 'horizontal',
        slidesPerView: 'auto',
        parallax: true,
        mousewheel: {
            sensitivity: 1,
        },
        watchOverflow: true,
        speed: 900,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        freeMode: {
            enabled: true,
        },
        on: {
            slideChange: () => {

            },
            progress: (slider, progress) => {

            },
        }
    })
    slider.disable()
    return slider
}