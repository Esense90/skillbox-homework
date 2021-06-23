window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__menu').addEventListener('click', function() {
        document.querySelector('.header__list').classList.toggle('active') 
    })
    document.querySelector('.header__menu').addEventListener('click', function() {
        document.querySelector('.menu__fill1').classList.toggle('in-active') 
        document.querySelector('.menu__fill2').classList.toggle('in-active')
        document.querySelector('.menu__fill3').classList.toggle('in-active')
    })
 })

 