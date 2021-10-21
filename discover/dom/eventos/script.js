// eventos via JS
const h1 = document.querySelector('h1')

h1.addEventListener('click', print)

function print() {
    console.log('print')
}

// argumento event

const input = document.querySelector('input')

input.onkeydown = function(event) {
    // console.log(event) - oq tem dentro dele
    console.log(event.currentTarget.value) // retorna value digitado
}