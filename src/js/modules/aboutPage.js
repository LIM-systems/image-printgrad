import { mobileMenu } from "./common"

export const aboutPageScriptsInit = () => {


    const mobileMenuClose = document.querySelector('.main_menu-burger-close')
    const mobileMenuOpen = document.querySelector('.main_menu-burger')
    mobileMenuClose.addEventListener('click', () => {
        mobileMenu.classList.add('_hide_mobile_menu')
    })

    mobileMenuOpen.addEventListener('click', () => {
        mobileMenu.classList.remove('_hide_mobile_menu')
    })
}