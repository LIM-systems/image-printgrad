import { menuSlider, menuSliderRemove, menuLinks } from './navMenu'
import { setScrollType, moreInfoHandle } from './/utils'
import { subsliderInit } from './subslider'
import { sliderBegin, inSliders, moreInfoButtons } from './common'
import { inSlidersInit } from './insliders'

export const mainSliderInit = () => {
    const wrapper = document.querySelector('.wrapper')
    const screens = document.querySelectorAll('.screen__content')
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
        init: false,
        on: {
            init: () => {
                menuSlider(slider)
                setScrollType(slider, wrapper)
                subsliderInit(slider, screens[0]) // активация вертикального первого подслайдера
                wrapper.classList.add('_loaded')
                // активация вложенных горизонтальных подслайдеров
                const inslidersArr = []
                Array.from(inSliders).forEach((item, i) => {
                    inslidersArr.push(inSlidersInit(slider, i))
                })
                //активация кнопок "подробнее" на подслайдах
                Array.from(moreInfoButtons).forEach((item, i) => moreInfoHandle(slider, inslidersArr[i], item))
            },
            slideChange: () => {
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
            },
            resize: () => {
                setScrollType(slider, wrapper)
            },
            progress: (slider, progress) => {
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
            },
            slidePrevTransitionStart: slider => {
                // console.log(slider.progress)
                // console.log(slider.progress === 0)
                // if (slider.progress === 0) {
                //     setTimeout(() => sliderBegin = true, 900)
                // } else {
                //     setTimeout(() => sliderBegin = false, 900)
                // }
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
}