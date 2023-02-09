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
    left.scrollBy(-200, 0);
    if (left.scrollLeft <= 0) {
        document.getElementById("esquerdo").style.visibility = "hidden";
    } else {
        document.getElementById("esquerdo").style.visibility = "visible";
    }
    document.getElementById("direito").style.visibility = "visible";
}

function scrollDir(elementos) {
    const right = document.querySelector("." + elementos);
    right.scrollBy(200, 0);
    if (right.scrollLeft >= (right.scrollWidth - document.documentElement.clientWidth)) {
        document.getElementById("direito").style.visibility = "hidden";
    } else {
        document.getElementById("direito").style.visibility = "visible";
    }
    document.getElementById("esquerdo").style.visibility = "visible";
}