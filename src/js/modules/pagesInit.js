import { aboutPageScriptsInit } from './aboutPage'
import { navMenuHandle, pagePath } from './common'
import { contactsPageScriptsInit } from './contactsPage'
import { mainPageScriptsInit } from './mainPage'
import { partnersPageScriptsInit } from './partnersPage'
import { mainSliderInit } from './slider'

// инициализация отдельных уникальных скриптов
// для разных страниц
export const pagesInit = () => {
    switch (pagePath) {
        case '/':
            navMenuHandle()
            mainSliderInit()
            mainPageScriptsInit()
            break
        case '/about.html':
            aboutPageScriptsInit()
            break
        case '/partners.html':
            partnersPageScriptsInit()
            break
        case '/contacts.html':
            contactsPageScriptsInit()
            break
        case '/po.html':
            navMenuHandle()
            mainSliderInit()
            break
    }
}