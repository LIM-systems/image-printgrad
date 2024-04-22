import {
    navBackButton, activeInslider, inSliders,
    inSlidersExs, moreInfoButtons, insliderIsOn,
    slidersProgress,
} from './common'

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
                if (!slider.enabled) {
                    inSlidersExs[activeInslider].disable()
                    slider.enable()
                    setTimeout(() => {
                        const wrapper = inSliders[activeInslider].querySelector('.inslider__wrapper')
                        const text = moreInfoButtons[activeInslider].querySelector('.more-info__title')
                        const circles = moreInfoButtons[activeInslider].querySelectorAll('.more-info__button')
                        inSlidersExs[activeInslider].setProgress(0, 0)
                        navBackButton.classList.add('nav-back-button-hidden')
                        moreInfoButtons[activeInslider].classList.remove('more-info-hidden')
                        text.classList.remove('_hide-more-info__title')
                        circles[0].classList.remove('_hide-more-info__button')
                        circles[1].classList.add('_hide-more-info__button')
                        insliderIsOn = false
                    }, 800)
                }
                menuSliderRemove()
                slider.slideTo(i, 800)
                menuLink.classList.add('_active')
            })
        }
    }
}


// вешаем обработчик на кнопку назад при открытом внутреннем слайдере
export const inSliderBackButtonHandle = slider => {
    navBackButton.addEventListener('click', () => {
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
