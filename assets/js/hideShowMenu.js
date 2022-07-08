import { showMenuAndButton, hideMenuAndButton } from './functions.js'

const $ = (x) => document.querySelector(x)

//DOM elements
const navMenuElement = $('#menu')
const navMenuHeight = navMenuElement.offsetHeight
const btnGoToTop = $('#go-top-btn')
const btnGoToTopHeight = btnGoToTop.offsetHeight
const btnBottom = innerHeight - (btnGoToTop.offsetTop + btnGoToTopHeight)
//Variables
let lastScrollY = window.scrollY


//EventListener
window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY
    let scrollDown = currentScrollY > lastScrollY

    if (scrollDown) {
        hideMenuAndButton(navMenuElement, btnGoToTop, btnBottom, navMenuHeight, btnGoToTopHeight)
    } else {
        showMenuAndButton(navMenuElement, btnGoToTop, btnBottom)
        if (currentScrollY <= 200) {
            btnGoToTop.style.bottom = `-${btnGoToTopHeight + btnBottom}px`
        }
    }
    lastScrollY = window.scrollY
})

btnGoToTop.addEventListener('click', () => window.scrollTo(0, 0))