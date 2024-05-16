// глобальное
export const pagePath = window.location.pathname
export let isMobile
export const wrapper = document.querySelector('.wrapper')
export let wrapperScrollListenerToggle = false
export const scrollToggleBlock = document.querySelector('.toggle-scroll')

// главный слайдер
export const sliderElement = document.querySelector('.page')
export let mainSlides = document.querySelectorAll('.screen')
export const sliderWrapper = sliderElement.querySelector('.page__wrapper')
export const screens = document.querySelectorAll('.screen__content')
export let sliderEx = null
export let sliderProgress = 0
export let isSliderActive = true
export let isSliderUp = false
export let parallaxAttributesData = false

// конец подслайдера на главной странице
export const subsliderElem = document.querySelector('.subslider')
export let sliderBegin = true
export let subSliderProgress = 0

// скрытие/открытие мобильного меню
export const toogleMobileMenu = (repeat = false) => {
    const mobileMenu = document.querySelector('.mobile_main_menu')
    const mobileMenuOpen = document.querySelector('.main_menu-burger')
    const mobileMenuClose = document.querySelector('.main_menu-burger-close')
    if (mobileMenuOpen) {
        mobileMenuOpen.addEventListener('click', () => {
            mobileMenu.classList.remove('_hide_mobile_menu')
        })
        if (!repeat) {
            mobileMenuClose.addEventListener('click', () => {
                console.log('2')
                mobileMenu.classList.add('_hide_mobile_menu')
            })
        }
    }
}

// главное верхнее меню
export const mainMenu = document.querySelector('.main_menu')

// все горизонтальные подслайдеры
export const inSliders = document.querySelectorAll('.inslider')
export let insliderIsOn = false
export const inSlidersExs = []
export const mainMiniSwipers = document.querySelectorAll('.mini-swiper')
export const mainMobileMiniSliders = document.querySelectorAll('.mobile_mini_slider')

// все кнопки "подробнее"
export const moreInfoButtons = document.querySelectorAll('.more-info')


// slidersProgress  нужнен, чтобы блокировать анимацию
// внутри события progress во внутренних слайдерах, если была нажата кнопка назад
// на панели навигационного меню
export let slidersProgress = 0


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

// последние слайды для переходов дальше
export const nextSlideButtons = document.querySelectorAll('.more-info-next__button')


// футер
export const footer = document.querySelector('.footer')



// мобильная версия
// сабслайдер
export const mobileSubsliderElem = document.querySelector('.subslider-mobile')
export let mobileSubliderHTML;


// все инслайдеры
export const mobileInsliders = document.querySelectorAll('.mobile-inslider')
export const mobileSlideState = Array.from(mobileInsliders).map(() => false)

// кнопки показа доп.информации
export const mobileMoreInfoButtons = document.querySelectorAll('.more_info_mobile')
