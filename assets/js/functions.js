 export function showMenuAndButton(nav, button, buttonBottom) {
    nav.style.top = '0'
    button.style.bottom = `${buttonBottom}px`
}

export function hideMenuAndButton(nav, button, buttonBottom, navHeight, buttonHeight) {
    nav.style.top = `-${navHeight}px`
    button.style.bottom = `-${buttonHeight + buttonBottom}px`
}
