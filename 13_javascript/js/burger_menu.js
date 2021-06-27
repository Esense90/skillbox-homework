window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__menu').addEventListener('click', function() {
        document.querySelector('.header__list').classList.toggle('active')
    })
    document.querySelector('.header__menu-closed').addEventListener('click', function() {
      document.querySelector('.header__list').classList.remove('active')
  })
 })

