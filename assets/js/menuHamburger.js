import { toggleMenu } from "./functions.js"

const btnMenuHamburger = document.querySelector('#btn-menu-hamburger')
const btnCloseMenu = document.querySelector('#btn-close-menu')
const menuUl = document.querySelector('.menu-ul')

btnMenuHamburger.addEventListener('click', () => {
    toggleMenu(menuUl)
})

btnCloseMenu.addEventListener('click', () => {
    toggleMenu(menuUl)
})