import { menuSlider, menuSliderRemove, menuLinks, inSliderBackButtonHandle, nextSlideButtonsInit } from './navMenu'
import {
    setScrollType, moreInfoHandle, scrollToggle,
    documentScroll, slidersToMobile,
    mobileMoreInfoHandler,
    slidersToDesktop,
    moreInfoMobileHandle,
    mobileSlidesHandlers,
    wrapperScrollHandler
} from './/utils'
import { subsliderInit } from './subslider'
import {
    sliderBegin, inSliders, moreInfoButtons,
    inSlidersExs, sliderProgress, mainMiniSwipers,
    mainMobileMiniSliders, sliderEx, parallaxAttributesData,
    mobileInsliders,
    mobileSlideState,
    isMobile,
    sliderElement,
    wrapper,
    wrapperScrollListenerToggle
} from './common'
import { inSlidersInit } from './insliders'
import { mainMiniSwipersInit, mainMobileMiniSlidersInit } from './mini-swipers'

export const mainSliderInit = () => {
    const screens = document.querySelectorAll('.screen__content')
    let subslider = null
    const slider = new Swiper('.page', {
        wrapperClass: 'page__wrapper',
        slideClass: 'page__screen',
        direction: 'vertical',
        slidesPerView: 'auto',
        parallax: true,
        mousewheel: {
            sensitivity: 0.3,
        },
        watchOverflow: true,
        speed: 900,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        updateOnWindowResize: true,
        init: false,
        on: {
            init: () => {
                window.innerWidth <= 850 ? isMobile = true : isMobile = false
                menuSlider(slider)
                setScrollType(slider, wrapper)
                subslider = subsliderInit() // активация вертикального первого подслайдера
                inSliderBackButtonHandle(slider) // активация кнопки возврата для вложенных слайдеров
                if (mainMiniSwipers) { // небольшие слайдеры с автопрокруткой
                    Array.from(mainMiniSwipers).forEach(item =>
                        mainMiniSwipersInit('.' + item.classList[1]))
                }
                if (mainMobileMiniSliders) { // небольшие слайдеры для мобильной версии
                    Array.from(mainMobileMiniSliders).forEach(item =>
                        mainMobileMiniSlidersInit('.' + item.classList[1]))
                }
                nextSlideButtonsInit(slider) // активация кнопок "следующий слайд"
                documentScroll(slider) // обработчик скролла на всю страницу
                wrapper.classList.add('_loaded')
                // активация вложенных горизонтальных подслайдеров
                Array.from(inSliders).forEach((item, i) => {
                    inSlidersExs.push(inSlidersInit(slider, i))
                })
                //активация кнопок "подробнее" на подслайдах
                Array.from(moreInfoButtons).forEach((item, i) => {
                    const data = {
                        mainSlider: slider,
                        inslider: inSlidersExs[i],
                        insliderElem: inSliders[i],
                        moreInfoButton: item,
                        index: i

                    }
                    moreInfoHandle(data)
                    // isMobile = true
                })
                // активация кнопок "подробнее" в мобильной версии
                mobileMoreInfoHandler()
                // отключение скролла на городах на последнем слайде
                scrollToggle(slider)
                if (isMobile) {
                    slidersToMobile(slider)
                } else {
                    slidersToDesktop(slider, parallaxAttributesData)
                    wrapper.addEventListener('wheel', wrapperScrollHandler, { passive: false })
                }
                //активация кнопок "подробнее" на подслайдах
                //мобильная версия
                Array.from(mobileInsliders).splice(0, mobileInsliders.length - 1).forEach((item, index) => {
                    moreInfoMobileHandle(item, index, true)
                })
            },
            slideChange: () => {
                if (!isMobile) {
                    menuSliderRemove()
                    menuLinks[slider.realIndex].classList.add('_active')
                    //приводим в изначальный вид кнопки "подробнее"
                    Array.from(moreInfoButtons).forEach((item, i) => {
                        const text = item.querySelector('.more-info__title')
                        const circles = item.querySelectorAll('.more-info__button')
                        text.classList.remove('_hide-more-info__title')
                        circles[0].classList.remove('_hide-more-info__button')
                        circles[1].classList.add('_hide-more-info__button')
                    })
                }
            },
            resize: () => {
                setScrollType(slider, wrapper)
                if (window.innerWidth <= 850) {
                    isMobile = true
                    let data = slidersToMobile(slider)
                    if (!parallaxAttributesData) {
                        parallaxAttributesData = data
                        wrapper.removeEventListener('wheel', wrapperScrollHandler, { passive: false })
                        slider.enable()
                    }
                } else {
                    isMobile = false
                    slidersToDesktop(slider, parallaxAttributesData)
                    parallaxAttributesData = false
                    wrapper.addEventListener('wheel', wrapperScrollHandler, { passive: false })
                }
                Array.from(mobileInsliders).splice(0, mobileInsliders.length - 1).forEach((item, index) => {
                    mobileSlidesHandlers(item, mobileSlideState[index], true)
                })
            },
            progress: (slider, progress) => {
                // записываем прогресс
                sliderProgress = progress
                // взаимодействие с саб слайдером - включение/отключение
                // при включенном фримоде
                if (progress === 0 && slider.params.freeMode.enabled) {
                    setTimeout(() => sliderBegin = true, 100)
                } else if (progress !== 0 && slider.params.freeMode.enabled) {
                    sliderBegin = false
                }
                // при выключенном фримоде
                if (slider.progress === 0) {
                    setTimeout(() => sliderBegin = true, 800)
                } else {
                    sliderBegin = false
                }
            }
        }
        // pagination: {
        //     el: '.page__pagination',
        //     type: 'bullets',
        //     clickable: true,
        //     bulletClass: 'page__bullet',
        //     bulletActivaClass: 'page__bullet_active'
        // },
        // scrollbar: {
        //     el: '.page__scroll',
        //     dragClass: 'page__drag-scroll',
        //     draggable: true,
        // }
    })

    slider.init()
    sliderEx = slider
}