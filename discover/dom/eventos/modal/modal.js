const buttonOpen = document.querySelector('#openModal')
const div = document.querySelector('.modal-wrapper')

buttonOpen.addEventListener('click', removeClass)

function removeClass() {
    div.classList.remove('invisible')
}

function addClass() {
    div.classList.add('invisible')
}


function getEsc (event) {
    let ESC = event.keyCode
    if (ESC == 27) {
        addClass()
    }
}

onkeydown = getEsc