let menuOpen = document.getElementById('menu-open')
let menuClose = document.getElementById('menu-close')

menuOpen.onclick= function(){
    menuClose.style.display="block"
    menuOpen.style.display="none"
    menuClose.onclick=function() {
        menuClose.style.display="none"
        menuOpen.style.display="block"
    }
}