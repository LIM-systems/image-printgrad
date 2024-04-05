// слежение за размером контента и окна
export const setScrollType = (slider, wrapper) => {
    if (wrapper.classList.contains('_free')) {
        wrapper.classList.remove('_free')
        slider.params.freeMode.enabled = false
    }
    for (let i = 0; i < slider.slides.length; i++) {
        const slide = slider.slides[i]
        const slideContent = slide.querySelector('.screen__content')
        if (slideContent) {
            const slideContentHeight = slideContent.offsetHeight
            if (slideContentHeight > window.innerHeight) {
                wrapper.classList.add('_free')
                slider.params.freeMode.enabled = true
                console.log(slider.freeMode)
                break
            }
        }
    }
}