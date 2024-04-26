import { mainPageScriptsInit } from './mainPage'
import { pagePath } from './common'

export const pagesInit = () => {
    switch (pagePath) {
        case '/':
            mainPageScriptsInit()
            break
        default:
            break
    }
}