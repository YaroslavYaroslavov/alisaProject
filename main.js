const firstPage = document.querySelector('.firstPage')
const secondPage = document.querySelector('.secondPage')
const thirdPage = document.querySelector('.thirdPage')
const fourthPage = document.querySelector('.fourthPage')
const main = document.querySelectorAll('.page')

const logoWrap = document.querySelector('.logoWrap')

const logoBird = document.querySelector('.logoBird')
const navBarRaces = document.querySelector('.navBarRaces')
const navBarShops = document.querySelector('.navBarShops')
const ambulance = document.querySelector('.ambulance')

clearActiveFromAll = () => {
    main.forEach(elem => {
        elem.classList.remove('active')
    })
}

changeColor = (color) => {
    logoBird.style.filter = `invert(${color})`
    navBarRaces.style.filter = `invert(${color})`
    navBarShops.style.filter = `invert(${color})`
    ambulance.style.filter = `invert(${color})`
}

const redirectTo = (target) => {
    switch (target) {
        case 'logoBird':
            clearActiveFromAll()
            firstPage.classList.add('active')
            changeColor(0)
            break
        case 'navBarRaces':
            clearActiveFromAll()
            secondPage.classList.add('active')
            changeColor(1)
            break
        case 'navBarShops':
            clearActiveFromAll()
            thirdPage.classList.add('active')
            changeColor(1)
            break
        case 'ambulance':
            clearActiveFromAll()
            fourthPage.classList.add('active')
            changeColor(1)
            break
    }
}

logoBird.addEventListener('click', (e) => { redirectTo(e.target.classList[0]) })
navBarRaces.addEventListener('click', (e) => { redirectTo(e.target.classList[1]) })
navBarShops.addEventListener('click', (e) => { redirectTo(e.target.classList[1]) })
ambulance.addEventListener('click', (e) => { redirectTo(e.target.classList[1]) })