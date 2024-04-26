export const mainPageScriptsInit = () => {
    const map = document.querySelector('.geography-map')
    const cities = document.querySelector('.geography-cities').querySelectorAll('p')
    Array.from(cities).forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault()
            const id = e.target.id
            map.style.background = `url('../../img/map/${id}.png')`
            map.style.backgroundSize = `contain`
            map.style.backgroundRepeat = `no-repeat`
            map.style.backgroundPosition = `center right`
            Array.from(cities).forEach(item => {
                item.classList.remove('clicked-geography-city')
            })
            e.target.classList.add('clicked-geography-city')
        })
    })
}