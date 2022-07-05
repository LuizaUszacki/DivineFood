const $ = (x) => document.querySelector(x)

//DOM elements
const navMenuElement = $('#menu')
const navMenuHeight = navMenuElement.offsetHeight
const btnGoToTop = $('#go-top-btn')
const btnGoToTopHeight = btnGoToTop.offsetHeight
const bottomButton = innerHeight - (btnGoToTop.offsetTop + btnGoToTopHeight)

//Variables
let lastScrollY = window.scrollY


//EventListener
window.addEventListener('scroll', () => {
    let currentScrollY = window.scrollY
    let scrollDown = currentScrollY > lastScrollY

    if (scrollDown) {
        hideMenuAndButton()
    } else {
        showMenuAndButton()
        if (currentScrollY <= 200) {
            btnGoToTop.style.bottom = `-${btnGoToTopHeight + bottomButton}px`
        }
    }
    testLastScrollGreaterCurrent = lastScrollY < window.scrollY
    lastScrollY = window.scrollY
})



btnGoToTop.addEventListener('click', () => window.scrollTo(0, 0))

//Functions
function showMenuAndButton() {
    navMenuElement.style.top = '0'
    btnGoToTop.style.bottom = `${bottomButton}px`
}

function hideMenuAndButton() {
    navMenuElement.style.top = `-${navMenuHeight}px`
    btnGoToTop.style.bottom = `-${btnGoToTopHeight + bottomButton}px`
}




