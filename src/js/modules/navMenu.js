export const menuLinks = document.querySelectorAll('.menu__link');

export const menuSliderRemove = () => {
    let menuLinkActive = document.querySelector('.menu__link._active');
    if (menuLinkActive) {
        menuLinkActive.classList.remove('_active');
    }
}

export const menuSlider = (slider) => {
    if (menuLinks.length > 0) {
        menuLinks[slider.realIndex].classList.add('_active');
        for (let i = 0; i < menuLinks.length; i++) {
            const menuLink = menuLinks[i]
            menuLink.addEventListener('click', e => {
                e.preventDefault()
                menuSliderRemove()
                slider.slideTo(i, 800)
                console.log(i)
                menuLink.classList.add('_active')
            })
        }
    }
}