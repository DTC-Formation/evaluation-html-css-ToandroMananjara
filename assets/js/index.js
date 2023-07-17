let menuOpen = document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')
let menuToggle= document.getElementById('menu-toggle')

menuOpen.onclick= function(){
    menuClose.style.display="block"
    menuOpen.style.display="none"
    menuToggle.style.display="flex"
    menuClose.onclick=function() {
        menuClose.style.display="none"
        menuOpen.style.display="block"
        menuToggle.style.display="none"
    }
}