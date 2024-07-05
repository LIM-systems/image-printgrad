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
    wrapperScrollListenerToggle,
    transformValue,
    currentTransformValue,
    initTransformValue,
    mobileMenu,
    poMiniSwiper,
    poMiniSwiperMobile,
    pagePath
} from './common'
import { inSlidersInit } from './insliders'
import { mainMiniSwipersInit, mainMobileMiniSlidersInit, poMiniSlidersInit, poMobileMiniSlidersInit } from './mini-swipers'

export const mainSliderInit = () => {
    let subslider = null
    let typed
    const slider = new Swiper('.page', {
        wrapperClass: 'page__wrapper',
        slideClass: 'page__screen',
        direction: 'vertical',
        slidesPerView: 'auto',
        parallax: true,
        mousewheel: {
            sensitivity: 0.3,
        },
        allowTouchMove: false,
        watchOverflow: true,
        speed: 900,
        // observer: true,
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
                if (poMiniSwiper) poMiniSlidersInit('.' + poMiniSwiper.classList[0])
                if (poMiniSwiperMobile) poMobileMiniSlidersInit('.' + poMiniSwiperMobile.classList[0])
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
                // отключение скролла на городах на последнем слайде
                scrollToggle(slider)
                if (isMobile) {
                    const mobileMenuOpen = document.querySelectorAll('.main_menu-burger')[1]

                    if (mobileMenuOpen) {
                        mobileMenuOpen.addEventListener('click', () => {
                            mobileMenu.classList.remove('_hide_mobile_menu')
                        })
                    }
                    slidersToMobile(slider)
                    setTimeout(() => {
                        const typedTextEl = document.querySelector('.typed-text-1-mobile')
                        if (typedTextEl) {
                            typed = new Typed('.typed-text-1-mobile', {
                                strings: ['преумножить уровень доходов', 'перейти на новый уровень сервиса',
                                    'достичь успеха в развитии бизнеса'],
                                typeSpeed: 50,
                                backSpeed: 30,
                                loop: true
                            })
                        }
                    }, 300)
                } else {
                    slidersToDesktop(slider, parallaxAttributesData)
                    wrapper.addEventListener('wheel', wrapperScrollHandler, { passive: false })
                }
                //активация кнопок "подробнее" на подслайдах
                //мобильная версия
                Array.from(mobileInsliders).splice(0, mobileInsliders.length - 1).forEach((item, index) => {
                    moreInfoMobileHandle(item, index, true)
                })

                const mobileMenuClose = document.querySelector('.main_menu-burger-close')
                mobileMenuClose.addEventListener('click', () => {
                    mobileMenu.classList.add('_hide_mobile_menu')
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
                slider.update()
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
                        setTimeout(() => {
                            if (typed) {
                                let typedText = document.querySelector('.typed-text-1-mobile')
                                if (typedText) {
                                    typedText.nextSibling.remove()
                                    typed.destroy()
                                    typed = null
                                    typed = new Typed('.typed-text-1-mobile', {
                                        strings: ['преумножить уровень доходов', 'перейти на новый уровень сервиса',
                                            'достичь успеха в развитии бизнеса'],
                                        typeSpeed: 50,
                                        backSpeed: 30,
                                        loop: true
                                    })
                                }
                            }
                        }, 300)
                    }
                } else {
                    isMobile = false
                    slidersToDesktop(slider, parallaxAttributesData)
                    parallaxAttributesData = false
                    wrapper.addEventListener('wheel', wrapperScrollHandler, { passive: false })
                }
                Array.from(mobileInsliders).splice(0, mobileInsliders.length - 1).forEach((item, index) => {
                    mobileSlidesHandlers(item, index, true)
                })
                slider.update()
            },
            scroll: (slider, e) => {
                if (isMobile) slider.update()
            },
            touchMove: (slider, e) => {
                slider.update()
            },
            progress: (slider, progress) => {
                // записываем прогресс
                if (!isMobile) sliderProgress = progress
                // взаимодействие с саб слайдером - включение/отключение
                // при включенном фримоде
                if (progress === 0 && slider.params.freeMode.enabled) {
                    setTimeout(() => sliderBegin = true, 100)
                } else if (progress !== 0 && slider.params.freeMode.enabled) {
                    sliderBegin = false
                }
                // при выключенном фримоде
                if (sliderProgress === 0) {
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