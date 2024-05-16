import {
    navBackButton, activeInslider, inSliders,
    inSlidersExs, moreInfoButtons, insliderIsOn,
    slidersProgress, mainMenu, nextSlideButtons
} from './common'
import { toogleParallax } from './utils'

// ссылки навигационного меню
export const menuLinks = document.querySelectorAll('.menu__link');

// удаление активного класса меню
export const menuSliderRemove = () => {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

// навигационное меню по слайдеру
export const menuSlider = (slider) => {
    if (menuLinks.length > 0) {
        menuLinks[slider.realIndex].classList.add('_active');
        for (let i = 0; i < menuLinks.length; i++) {
            const menuLink = menuLinks[i]
            menuLink.addEventListener('click', e => {
                e.preventDefault()
                mainMenu.classList.remove('_hide_main_menu')
                if (!slider.enabled) {
                    const data = toogleParallax(inSliders[activeInslider])
                    slidersProgress = 0
                    inSlidersExs[activeInslider].disable()
                    slider.enable()
                    setTimeout(() => {
                        const wrapper = inSliders[activeInslider].querySelector('.inslider__wrapper')
                        wrapper.classList.remove('inslider__wrapper-open')
                        const text = moreInfoButtons[activeInslider].querySelector('.more-info__title')
                        const circles = moreInfoButtons[activeInslider].querySelectorAll('.more-info__button')
                        inSlidersExs[activeInslider].setProgress(0, 0)
                        navBackButton.classList.add('nav-back-button-hidden')
                        moreInfoButtons[activeInslider].classList.remove('more-info-hidden')
                        text.classList.remove('_hide-more-info__title')
                        circles[0].classList.remove('_hide-more-info__button')
                        circles[1].classList.add('_hide-more-info__button')
                        insliderIsOn = false
                        toogleParallax(inSliders[activeInslider], data)
                    }, 1000)
                }
                menuSliderRemove()
                slider.slideTo(i, 800)
                menuLink.classList.add('_active')
            })
        }
    }
}

// переход к следующему слайду с помощью
// последнего слайда в инслайдерах
export const nextSlideButtonsInit = (slider) => {
    Array.from(nextSlideButtons).forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            const data = toogleParallax(inSliders[activeInslider])
            slidersProgress = 0
            inSlidersExs[activeInslider].disable()
            slider.enable()
            setTimeout(() => {
                const wrapper = inSliders[activeInslider].querySelector('.inslider__wrapper')
                wrapper.classList.remove('inslider__wrapper-open')
                const text = moreInfoButtons[activeInslider].querySelector('.more-info__title')
                const circles = moreInfoButtons[activeInslider].querySelectorAll('.more-info__button')
                inSlidersExs[activeInslider].setProgress(0, 0)
                navBackButton.classList.add('nav-back-button-hidden')
                moreInfoButtons[activeInslider].classList.remove('more-info-hidden')
                text.classList.remove('_hide-more-info__title')
                circles[0].classList.remove('_hide-more-info__button')
                circles[1].classList.add('_hide-more-info__button')
                insliderIsOn = false
                toogleParallax(inSliders[activeInslider], data)
            }, 1000)
            slider.slideNext(800)
        })
    })
}


// вешаем обработчик на кнопку назад при открытом внутреннем слайдере
export const inSliderBackButtonHandle = slider => {
    navBackButton.addEventListener('click', () => {
        mainMenu.classList.remove('_hide_main_menu')
        const wrapper = inSliders[activeInslider].querySelector('.inslider__wrapper')
        const text = moreInfoButtons[activeInslider].querySelector('.more-info__title')
        const circles = moreInfoButtons[activeInslider].querySelectorAll('.more-info__button')
        wrapper.classList.remove('inslider__wrapper-open')
        inSlidersExs[activeInslider].disable()
        inSlidersExs[activeInslider].setProgress(0, 800)
        setTimeout(() => {
            navBackButton.classList.add('nav-back-button-hidden')
            moreInfoButtons[activeInslider].classList.remove('more-info-hidden')
            text.classList.remove('_hide-more-info__title')
            circles[0].classList.remove('_hide-more-info__button')
            circles[1].classList.add('_hide-more-info__button')
            slider.enable()
            insliderIsOn = false
        }, 1000)
    })
}
