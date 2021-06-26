window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search-btn').addEventListener('click', function() {
      document.querySelector('.search__input').classList.toggle('active')
  })
  document.querySelector('.header__search-btn').addEventListener('click', function() {
    document.querySelector('.closed__search-btn').classList.toggle('active')
  })
  document.querySelector('.closed__search-btn').addEventListener('click', function() {
    document.querySelector('.search__input').classList.remove('active')
    document.querySelector('.closed__search-btn').classList.remove('active')
  })
})
