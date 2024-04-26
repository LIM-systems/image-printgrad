import {
    insliderIsOn, navBackButton, inSliders,
    moreInfoButtons, slidersProgress
} from './common'

export const inSlidersInit = (extSlider, index) => {
    const slider = new Swiper('.inslider_' + index, {
        wrapperClass: 'inslider__wrapper',
        slideClass: 'inslider__screen',
        direction: 'vertical',
        slidesPerView: 'auto',
        parallax: true,
        mousewheel: {
            thresholdTime: 5,
            thresholdDelta: 5,
            releaseOnEdges: true,
            sensitivity: 2,
        },
        watchOverflow: true,
        speed: 900,
        observer: true,
        observeSlideChildren: true,
        freeMode: {
            enabled: true,
        },
        on: {
            slideChange: () => {

            },
            progress: (slider, progress) => {
                slidersProgress = progress
            },
            scroll: (slider, e) => {
                // отключем под слайдер и включаем главный слайдер
                if (slidersProgress === 0 && insliderIsOn && e.deltaY < 0) {
                    const wrapper = inSliders[index].querySelector('.inslider__wrapper')
                    const text = moreInfoButtons[index].querySelector('.more-info__title')
                    const circles = moreInfoButtons[index].querySelectorAll('.more-info__button')
                    setTimeout(() => {
                        navBackButton.classList.add('nav-back-button-hidden')
                        extSlider.enable()
                        slider.disable()
                        wrapper.classList.remove('inslider__wrapper-open')
                        moreInfoButtons[index].classList.remove('more-info-hidden')
                        text.classList.remove('_hide-more-info__title')
                        circles[0].classList.remove('_hide-more-info__button')
                        circles[1].classList.add('_hide-more-info__button')
                        insliderIsOn = false
                    }, 800)
                }
            }
        }
    })
    slider.disable()
    return slider
}