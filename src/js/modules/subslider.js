import {
    sliderBegin, navMenu, insliderIsOn,
    isSliderActive, isSliderUp, footer,
    sliderProgress,
    mainMenu,
    isMobile,
    subsliderElem,
    wrapper,
    scrollToggle,
    subSliderProgress,
    scrollToggleBlock
} from './common'
import { textAnimationInit } from './utils'

export const subsliderInit = () => {
    const slider = new Swiper('.subslider', {
        wrapperClass: 'subslider__wrapper',
        slideClass: 'subslider__screen',
        direction: 'vertical',
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
            progress: (slider, progress) => {
                subSliderProgress = progress
            },
        }
    })
    // блокировка скролла при скрытом диве для остановки сабслайдера
    scrollToggleBlock.addEventListener('wheel', e => {
        e.preventDefault()
    }, { passive: false })

    return slider
}