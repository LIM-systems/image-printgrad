import {
    sliderBegin, navMenu, insliderIsOn,
    isSliderActive, isSliderUp, footer,
    sliderProgress,
    mainMenu,
    isMobile,
    subsliderElem
} from './common'

export const subsliderInit = (extSlider, screen) => {
    const wrapper = document.querySelector('.wrapper')
    if (!subsliderElem) return
    const scrollToggle = document.querySelector('.toggle-scroll')
    let subSliderProgress = 0
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
    scrollToggle.addEventListener('wheel', e => {
        e.preventDefault()
    }, { passive: false })
    // поднятие и опускание сабслайдера при скролле вверх и вниз
    wrapper.addEventListener('wheel', e => {
        if (isMobile) return
        // измеряем размер максимального сокрытия сабслайдера вверху
        let scrollHide = -((Math.round(window.innerHeight / 100) * 100) + 100) // насколько скрыть
        let scrollSpeed = -1 * (scrollHide / 7) // шаг пролистывания в пикселях(скорость)

        if (sliderBegin && !insliderIsOn) {
            if (subSliderProgress === 1 && scrollHide < subsliderElem.offsetTop && subsliderElem.offsetTop <= 0 && e.deltaY > 0) {
                // если листаем вниз
                // для плавного сокрытия слайдера наверх
                let part5 = scrollHide / 7 * 4 // когда 5\7 слайдера ушло наверх
                let part2 = scrollHide / 7 * 2 // когда 2\7 слайдера ушло наверх
                if (subsliderElem.offsetTop <= part5) {
                    subsliderElem.style.transition = 'all 0.5s'
                    subsliderElem.style.top = scrollHide + 'px'
                    scrollToggle.style.transition = 'all 0.5s'
                    scrollToggle.style.top = scrollHide + 'px'
                    e.preventDefault()
                    return
                } else if (subsliderElem.offsetTop <= part2) {
                    screen.classList.remove('_hide_page') // плавное появление элементов на первом слайде главного слайдера
                    if (isMobile) navMenu.classList.remove('_hide_menu') // плавное появление нав-меню
                }
                subsliderElem.classList.remove('_suslider-top-0') // убираем класс плавного опускания слайдера
                scrollToggle.classList.remove('_suslider-top-0') // убираем класс плавного опускания слайдера
                scrollToggle.style.display = 'block' // вешаем невидимый блок, чтобы слайдер не листался
                subsliderElem.style.top = subsliderElem.offsetTop - scrollSpeed + 'px' // поднимаем слайдер вверх
                scrollToggle.style.top = scrollToggle.offsetTop - scrollSpeed + 'px' // следом поднимаем блокирующий блок
            } else if (subSliderProgress === 1 && subsliderElem.offsetTop <= -scrollSpeed && e.deltaY < 0) {
                // если листаем вверх
                if (-scrollSpeed * 2 <= subsliderElem.offsetTop && subsliderElem.offsetTop <= -scrollSpeed) {
                    // если слайдер почти весь опущен
                    subsliderElem.style.top = '0px' // опускаем слайдер до конца
                    scrollToggle.style.top = '0px' // опускаем блокирующий блок
                    subsliderElem.classList.add('_suslider-top-0') // добавляем класс плавного опускания слайдера
                    scrollToggle.classList.add('_suslider-top-0')// добавляем класс плавного опускания слайдера
                    setTimeout(() => {
                        scrollToggle.style.display = 'none' // убираем див, блокирующий скролл слайдера
                        screen.classList.add('_hide_page') // плавное исчезание элементов на первом слайде главного слайдера
                        navMenu.classList.add('_hide_menu') // плавное исчезание нав-меню
                        e.preventDefault()
                        return
                    }, 500)
                } else {
                    subsliderElem.style.transition = 'none'
                    scrollToggle.style.transition = 'none'
                    scrollToggle.style.display = 'block'
                }
                subsliderElem.style.top = subsliderElem.offsetTop + scrollSpeed + 'px' // опускаем слайдер вниз
                scrollToggle.style.top = scrollToggle.offsetTop + scrollSpeed + 'px' // опускаем блокирующий блок
            }
        }

        // анимация снижения яркости главного верхнего меню
        const mainMenuLinks = mainMenu.querySelectorAll('a')
        subSliderProgress === 0 ?
            Array.from(mainMenuLinks).forEach(item => item.classList.remove('main_menu_in-down')) :
            Array.from(mainMenuLinks).forEach(item => item.classList.add('main_menu_in-down'))

        // включение и отключение главного слайдера
        if (scrollHide >= subsliderElem.offsetTop
            && !insliderIsOn
            && isSliderActive
            && !isSliderUp
        ) {
            extSlider.enable()
        } else {
            extSlider.disable()
        }
    }, { passive: false })

    return slider
}