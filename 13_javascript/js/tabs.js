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


document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.how__step-link').forEach(function (howStepLink) {
        howStepLink.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.how__step-link').forEach(function (howInfo) {
                howInfo.classList.remove('step-active')
            })
            event.currentTarget.classList.add('step-active')
        })
    })
})
