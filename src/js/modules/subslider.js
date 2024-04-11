import { sliderBegin, navMenu } from './common'

export const subsliderInit = (extSlider, screen) => {
    const wrapper = document.querySelector('.wrapper')
    const sliderElem = document.querySelector('.subslider')
    const scrollToggle = document.querySelector('.toggle-scroll')
    let sliderProgress = 0
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
            slideChange: () => {
                // if (slider.realIndex === slider.slides.length - 1) {
                //     setTimeout(() => extSlider.mousewheel.enable(), 500)
                // } else {
                //     extSlider.mousewheel.disable()
                // }
            },
            progress: (slider, progress) => {
                sliderProgress = progress
            },
        }
    })
    // блокировка скролла при скрытом диве для остановки сабслайдера
    scrollToggle.addEventListener('wheel', e => {
        e.preventDefault()
    }, { passive: false })
    // поднятие и опускание сабслайдера при скролле вверх и вниз
    wrapper.addEventListener('wheel', e => {
        // измеряем размер максимального сокрытия сабслайдера вверху
        let scrollHide = -((Math.round(window.innerHeight / 100) * 100) + 100) // насколько скрыть
        let scrollSpeed = -1 * (scrollHide / 7) // шаг пролистывания в пикселях(скорость)

        if (sliderBegin) {
            if (sliderProgress === 1 && scrollHide < sliderElem.offsetTop && sliderElem.offsetTop <= 0 && e.deltaY > 0) {
                // если листаем вниз
                // для плавного сокрытия слайдера наверх
                let part5 = scrollHide / 7 * 4 // когда 5\7 слайдера ушло наверх
                let part2 = scrollHide / 7 * 2 // когда 2\7 слайдера ушло наверх
                if (sliderElem.offsetTop <= part5) {
                    sliderElem.style.transition = 'all 0.5s'
                    sliderElem.style.top = scrollHide + 'px'
                    scrollToggle.style.transition = 'all 0.5s'
                    scrollToggle.style.top = scrollHide + 'px'
                    e.preventDefault()
                    return
                } else if (sliderElem.offsetTop <= part2) {
                    screen.classList.remove('_hide_page') // плавное появление элементов на первом слайде главного слайдера
                    navMenu.classList.remove('_hide_menu') // плавное появление нав-меню
                }
                sliderElem.classList.remove('_suslider-top-0') // убираем класс плавного опускания слайдера
                scrollToggle.classList.remove('_suslider-top-0') // убираем класс плавного опускания слайдера
                scrollToggle.style.display = 'block' // вешаем невидимый блок, чтобы слайдер не листался
                sliderElem.style.top = sliderElem.offsetTop - scrollSpeed + 'px' // поднимаем слайдер вверх
                scrollToggle.style.top = scrollToggle.offsetTop - scrollSpeed + 'px' // следом поднимаем блокирующий блок
            } else if (sliderProgress === 1 && sliderElem.offsetTop <= -scrollSpeed && e.deltaY < 0) {
                // если листаем вверх
                if (-scrollSpeed * 2 <= sliderElem.offsetTop && sliderElem.offsetTop <= -scrollSpeed) {
                    // если слайдер почти весь опущен
                    sliderElem.style.top = '0px' // опускаем слайдер до конца
                    scrollToggle.style.top = '0px' // опускаем блокирующий блок
                    sliderElem.classList.add('_suslider-top-0') // добавляем класс плавного опускания слайдера
                    scrollToggle.classList.add('_suslider-top-0')// добавляем класс плавного опускания слайдера
                    setTimeout(() => {
                        scrollToggle.style.display = 'none' // убираем див, блокирующий скролл слайдера
                        screen.classList.add('_hide_page') // плавное исчезание элементов на первом слайде главного слайдера
                        navMenu.classList.add('_hide_menu') // плавное исчезание нав-меню
                        e.preventDefault()
                        return
                    }, 500)
                } else {
                    sliderElem.style.transition = 'none'
                    scrollToggle.style.transition = 'none'
                    scrollToggle.style.display = 'block'
                }
                sliderElem.style.top = sliderElem.offsetTop + scrollSpeed + 'px' // опускаем слайдер вниз
                scrollToggle.style.top = scrollToggle.offsetTop + scrollSpeed + 'px' // опускаем блокирующий блок
            }
        }

        if (scrollHide >= sliderElem.offsetTop) {
            extSlider.enable()
        } else {
            extSlider.disable()
        }
    }, { passive: false })
}