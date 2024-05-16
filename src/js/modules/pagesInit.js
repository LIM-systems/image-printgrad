import { mainPageScriptsInit } from './mainPage'
import { pagePath } from './common'

// инициализация отдельных уникальных скриптов
// для разных страниц
export const pagesInit = () => {
    switch (pagePath) {
        case '/':
            mainPageScriptsInit()
            break
        default:
            break
    }
}