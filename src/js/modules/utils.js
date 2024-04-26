import {
    insliderIsOn, navBackButton, isMobile, activeInslider,
    isSliderActive, sliderElement, isSliderUp,
    footer, navMenu,
    inSlidersExs,
    moreInfoButtons,
} from './common'
import { inSlidersInit } from './insliders'

// отключение/включение фримода
export const setScrollType = (slider, wrapper) => {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free')
        slider.params.freeMode.enabled = false
    }
    for (let i = 0; i < slider.slides.length - 1; i++) {
        const slide = slider.slides[i]
        const slideContent = slide.querySelector('.screen__content')
        if (slideContent) {
            const slideContentHeight = slideContent.offsetHeight
            if (slideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free')
                slider.params.freeMode.enabled = true
                break
            }
        }
    }
}

// взаимодействие с кнопкой "подробнее" и управление слайдерами
export const moreInfoHandle = (data) => {
    const mainSlider = data.mainSlider
    const inslider = data.inslider
    const insliderElem = data.insliderElem
    const moreInfoButton = data.moreInfoButton
    const index = data.index
    const wrapper = insliderElem.querySelector('.inslider__wrapper')
    const text = moreInfoButton.querySelector('.more-info__title')
    const circles = moreInfoButton.querySelectorAll('.more-info__button')
    let sliderShift = 0

    // слежение за положением курсора
    const mouseObserver = (x, y) => {
        // убираем/отображаем курсор на границах блока-родителя
        if (x <= 0 || y <= 0) {
            text.classList.remove('_hide-more-info__title')
            circles[0].classList.remove('_hide-more-info__button')
            circles[1].classList.add('_hide-more-info__button')
        } else {
            text.classList.add('_hide-more-info__title')
            circles[0].classList.add('_hide-more-info__button')
        }

        // двигаем слегка слайдер
        if (x > 0) {
            sliderShift = -Math.trunc(x * 0.092)
            inslider.translateTo(sliderShift, 300)
        }
    }


    // следование за курсором 
    const mouseMove = (e, cursor) => {
        cursor.style.position = 'absolute'
        cursor.style.marginTop = '0px'
        let newLeft = e.offsetX - (cursor.offsetWidth / 2)
        let newTop = e.offsetY - (cursor.offsetHeight / 2)
        cursor.style.left = newLeft + 'px'
        cursor.style.top = newTop + 'px'
        cursor.classList.remove('_hide-more-info__button')
        mouseObserver(newLeft, newTop)
    }

    // создание управление курсором
    const createMouseMoveHandler = cursor => {
        return function (e) {
            if (!insliderIsOn) mouseMove(e, cursor);
        };
    }

    // следим когда курсор входит в область анимации и выходит
    const mouseMoveHandler = createMouseMoveHandler(circles[1])
    moreInfoButton.addEventListener('mouseover', () => {
        moreInfoButton.addEventListener('mousemove', mouseMoveHandler)
    })
    moreInfoButton.addEventListener('mouseout', () => {
        if (!insliderIsOn) {
            inslider.translateTo(0, 500)
        }
        moreInfoButton.removeEventListener('mousemove', mouseMoveHandler)
    })

    // при клике на области подробнее отключаем главный слайдер
    // и включаем этот внутренний слайдер
    moreInfoButton.addEventListener('click', () => {
        activeInslider = index
        insliderIsOn = true
        moreInfoButton.classList.add('more-info-hidden')
        sliderShift = 0
        mainSlider.disable()
        inslider.enable()
        let firstSlidePart = window.innerWidth / 6 * 5
        const screens = insliderElem.querySelectorAll('.i-s_screen')
        const secondSlide = insliderElem.querySelector('.i-s_screen:nth-child(2)')
        const data = toogleTransition(secondSlide, false)
        let screensWidth = 0
        screens.forEach(item => {
            screensWidth += item.clientWidth
        })
        let slideTo = firstSlidePart / screensWidth
        inslider.setProgress(slideTo, 1000)
        navBackButton.classList.remove('nav-back-button-hidden')
        setTimeout(() => {
            wrapper.classList.add('inslider__wrapper-open')
            toogleTransition(secondSlide, data)
        }, 500)
    })
}



// отключаем скролл главного слайдер, 
// если курсор наведён на поле со скроллом городов
export const scrollToggle = (slider) => {
    const citiesField = document.querySelector('.geography-cities')
    if (citiesField) {
        citiesField.addEventListener('mouseover', e => {
            e.preventDefault()
            isSliderActive = false
            slider.disable()
        })
        citiesField.addEventListener('mouseout', e => {
            isSliderActive = true
            if (!isSliderUp) {
                slider.enable()
            }
        })
    }
}


// обработчик скролла на весь документ
// если это последний слайд и мы крутим дальше вниз
// чтобы увидеть футер
export const documentScroll = (slider) => {
    document.addEventListener('wheel', e => {
        const lastContent = sliderElement.querySelectorAll('.screen__content')[slider.slides.length - 1]
        const lastScreen = sliderElement.querySelectorAll('.screen')[slider.slides.length - 1]
        const isEnd = lastContent.getBoundingClientRect().bottom
            <= window.innerHeight

        if (e.deltaY > 0 && isEnd && isSliderActive) {
            // крутим вниз
            navMenu.classList.add('_hide_menu')
            isSliderUp = true
            slider.disable()
            let lastScreenSurplus = lastScreen.clientHeight - sliderElement.clientHeight
            const upValue = lastScreen.clientHeight - window.innerHeight + footer.clientHeight - lastScreenSurplus
            lastScreen.style.top = -lastScreenSurplus + 'px'
            sliderElement.style.overflow = 'visible'
            sliderElement.style.top = -upValue + 'px'
        } else if (e.deltaY < 0 && isEnd && isSliderActive) {
            // крутим вверх
            sliderElement.style.top = 0 + 'px'
            navMenu.classList.remove('_hide_menu')
            setTimeout(() => {
                sliderElement.style.overflow = 'hidden'
                isSliderUp = false
                slider.enable()
            }, 500)
        }
        if (slider.realIndex === slider.slides.length - 2) {
            lastScreen.style.transition = 'all 0.3s'
            lastScreen.style.top = 0 + 'px'
        } else {
            lastScreen.style.transition = 'none'
        }
    })
}


window.addEventListener('load', () => {
    // мобильный экран или нет
    window.innerWidth <= 850 ? isMobile = true : isMobile = false

    // печатание и стирание текста
    setTimeout(() => {
        const typed = new Typed('.typed-text-1', {
            strings: ['преумножить уровень доходов', 'перейти на новый уровень сервиса',
                'достичь успеха в развитии бизнеса'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
        })
    }, 300)

    setTimeout(() => {
        const typed = new Typed('.typed-text-2', {
            strings: ['удобно', 'легко',
                'надежно', 'выгодно'],
            typeSpeed: 80,
            backSpeed: 50,
            loop: true
        })
    }, 300)
})


// сбрасываем весь паралакс у внутренних слайдеров при переключении внешнего слайдера
// через навигационное меню
export const toogleParallax = (elem, data = null) => {
    const allElements = elem.querySelectorAll('*');
    const returnData = []
    if (!data) {
        allElements.forEach(element => {
            const attributes = element.attributes;
            const attributesArr = []
            for (let i = 0; i < attributes.length; i++) {
                if (attributes[i].name.startsWith('data-swiper-parallax')) {
                    attributesArr.push({
                        name: attributes[i].name,
                        value: attributes[i].value
                    })
                    element.setAttribute(attributes[i].name, 0)
                }
            }
            if (attributesArr.length > 0) {
                returnData.push({
                    element: element,
                    attributes: attributesArr
                })
            }
        });
        return returnData
    } else {
        data.forEach(item => {
            item.attributes.forEach(atr => {
                item.element.setAttribute(atr.name, atr.value)
            })
        });
    }
}


// переключаем свойство transition
// для лучшего отображения 2го слайда 
// во вложенных слайдераъ
function toogleTransition(elem, data = false) {
    if (data === null) return
    const allElements = elem.querySelectorAll('*');
    const returnData = []
    if (!data) {
        allElements.forEach(element => {
            const attributes = element.attributes;
            for (let i = 0; i < attributes.length; i++) {
                if (attributes[i].name.startsWith('data-swiper-parallax')) {
                    element.classList.add('toggle-parallax-transition')
                    returnData.push(element)

                }
            }
        });
        return returnData.length === 0 ? null : returnData
    } else {
        data.forEach(item => {
            item.classList.remove('toggle-parallax-transition')
        });
    }
}


// переключение слайдеров на мобильный режим
export const slidersToMobile = (slider, subslider) => {
    // главный слайдер
    const wrapper = document.querySelector('.wrapper')
    wrapper.classList.add('wrapper_mobile')
    slider.params.freeMode.enabled = true;



    // сабслайдер
    const subsliderEl = document.querySelector('.subslider')
    subsliderEl.classList.add('subslider-mobile')
    console.log('test')


    // вложенные слайдеры
    moreInfoButtons.forEach(item => {
        item.style.display = 'none'
    })
    inSlidersExs.forEach((item, i) => {
        item.destroy()
    })

    // другие обработчики и скрипты
}