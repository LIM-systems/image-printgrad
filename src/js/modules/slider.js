import { menuSlider, menuSliderRemove, menuLinks } from './navMenu'
import { setScrollType } from './/utils'

export const mainSliderInit = () => {
    const wrapper = document.querySelector('.wrapper')
    const slider = new Swiper('.page', {
        wrapperClass: 'page__wrapper',
        slideClass: 'page__screen',
        direction: 'vertical',
        slidesPerView: 'auto',
        parallax: true,
        mousewheel: {
            sensitivity: 1,
        },
        watchOverflow: true,
        speed: 800,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        init: false,
        on: {
            init: () => {
                menuSlider(slider)
                setScrollType(slider, wrapper)
                wrapper.classList.add('_loaded')
            },
            slideChange: () => {
                menuSliderRemove()
                menuLinks[slider.realIndex].classList.add('_active')
            },
            resize: () => {
                setScrollType(slider, wrapper)
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