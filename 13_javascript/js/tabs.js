document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.how__step').forEach(function (howStep) {
        howStep.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how__info').forEach(function (howInfo) {
                howInfo.classList.remove('how__info-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how__info-active')
        })
    })
})



