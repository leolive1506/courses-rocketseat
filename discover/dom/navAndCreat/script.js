const element = document.querySelector('h1')

console.log(element.parentNode)

// irmãos
// retorna irmão do h1
const el = document.querySelector('h1')
console.log(el.nextElementSibling)

// criando
const div = document.createElement('div')
div.textContent = "Brotei!"

// add
const header = document.querySelector('header')
header.append(div)


// inserBefore
const divTwo = document.createElement('div')
divTwo.textContent = "Zummmmmmm"
const hTwo = document.querySelector('h2')

header.insertBefore(divTwo, hTwo)