const fade = document.querySelector("#fade");
const buttonTag = document.querySelector('.button-container')
const pos = document.querySelector('.pos')


fade.addEventListener('click', fadeAway)

function fadeAway(e) {
    if(e.target.closest('.button-tag')) {
        buttonTag.classList.add('fade')
        pos.classList.add('show')
    }
}


pos.addEventListener('click', showAway)


function showAway(e) {
    if(e.target.closest('.button-tag') && e.target.closest('#fade')) {
        return
    }
    buttonTag.classList.remove('fade')
    pos.classList.remove('show')
}