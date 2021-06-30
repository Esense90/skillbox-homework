let search__activeStatus = false

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__search-btn').addEventListener('click', function () {
    if (search__activeStatus) return
    search__activeStatus = true
    document.querySelector('.header__search-adaptive').classList.toggle('active')
    document.querySelector('.closed__search-btn').classList.toggle('active')
    document.querySelector('.search__input-adaptive').focus()
    document.querySelector('.header__search-svg_adaptive').focus()
  })
  document.querySelector('.closed__search-btn').addEventListener('click', function () {
    search__activeStatus = false
    document.querySelector('.header__search-adaptive').classList.remove('active')
    document.querySelector('.closed__search-btn').classList.remove('active')
    document.querySelector('.search__input-adaptive').value = ""
  })
})
