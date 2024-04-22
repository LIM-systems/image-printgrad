// конец подслайдера на главной странице
export let sliderBegin = true

// скрытие/открытие мобильного меню
export const toogleMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile_main_menu')
    const mobileMenuOpen = document.querySelector('.main_menu-burger')
    const mobileMenuClose = document.querySelector('.main_menu-burger-close')

    mobileMenuOpen.addEventListener('click', () => {
        mobileMenu.classList.remove('_hide_mobile_menu')
    })

    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('_hide_mobile_menu')
    })
}

// все горизонтальные подслайдеры
export const inSliders = document.querySelectorAll('.inslider')
export let insliderIsOn = false
export const inSlidersExs = []

// все кнопки "подробнее"
export const moreInfoButtons = document.querySelectorAll('.more-info')


// массив slidersProgress нужнен, чтобы блокировать анимацию
// внутри события progress во внутренних слайдерах, если была нажата кнопка назад
// на панели навигационного меню
export const slidersProgress = []


// взаимодействие с навигационным меню
export const navMenu = document.querySelector('.menu__wrapper')
const navMenuLinks = document.querySelectorAll('.menu__link')
export const navMenuHandle = () => {
    navMenu.addEventListener('mouseover', () => {
        navMenu.classList.add('nav-menu_show-bg')
        navMenuLinks.forEach(item => item.classList.add('nav-menu_show-link'))
    })
    navMenu.addEventListener('mouseout', () => {
        navMenu.classList.remove('nav-menu_show-bg')
        navMenuLinks.forEach(item => item.classList.remove('nav-menu_show-link'))
    })
}

export const navBackButton = document.querySelector('.nav-back-button')
export let activeInslider = 0

