import {
    navMenu, insliderIsOn,
    isSliderActive, isSliderUp, footer,
    sliderProgress,
    isMobile,
    subsliderElem,
    wrapper,
    scrollToggle,
    subSliderProgress,
    scrollToggleBlock,
    pagePath
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
                if (pagePath !== '/po.html') subSliderProgress = progress
            },
        }
    })
    // блокировка скролла при скрытом диве для остановки сабслайдера
    scrollToggleBlock.addEventListener('wheel', e => {
        e.preventDefault()
    }, { passive: false })

    return slider
}