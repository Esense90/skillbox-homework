let search__activeStatus = false

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.header__search-btn').addEventListener('click', function () {
    if (search__activeStatus) return
    search__activeStatus = true
    document.querySelector('.search__input').classList.toggle('active')
    document.querySelector('.closed__search-btn').classList.toggle('active')
    document.querySelector('.search__input').focus()
  })
  document.querySelector('.closed__search-btn').addEventListener('click', function () {
    search__activeStatus = false
    document.querySelector('.search__input').classList.remove('active')
    document.querySelector('.closed__search-btn').classList.remove('active')
    document.querySelector('.search__input').value = ""
  })
})