function clickMenu() {
    if (listamenu.style.display == 'flex') {
        listamenu.style.display = 'none'
        menuburguer.style.color = '#2a7899'
    } else {
        listamenu.style.display = 'flex'
        menuburguer.style.color = '#EAE0DA'
    }
    
}

function scrollEsq(elementos) {
    const left = document.querySelector("." + elementos);
    left.scrollBy(-100, 0);
}

function scrollDir(elementos) {
    const right = document.querySelector("." + elementos);
    right.scrollBy(100, 0);
}