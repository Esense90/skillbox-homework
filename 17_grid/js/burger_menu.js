window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__menu').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('active')
    document.querySelector('.menu__fill1').classList.toggle('active')
    document.querySelector('.menu__fill2').classList.toggle('active')
    document.querySelector('.menu__fill3').classList.toggle('active')
  })
  document.querySelector('.closed__menu').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.remove('active')
  })
})
