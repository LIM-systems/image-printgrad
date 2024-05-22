import { aboutPageScriptsInit } from './aboutPage'
import { navMenuHandle } from './common'
import { mainPageScriptsInit } from './mainPage'
import { mainSliderInit } from './slider'

// инициализация отдельных уникальных скриптов
// для разных страниц
export const pagesInit = () => {
    const pagePath = window.location.pathname
    switch (pagePath) {
        case '/':
            navMenuHandle()
            mainSliderInit()
            mainPageScriptsInit()
            break
        case '/about.html':
            aboutPageScriptsInit()
            break
    }
}