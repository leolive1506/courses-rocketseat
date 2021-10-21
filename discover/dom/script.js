// Selecionar elementos

    // const element = document.getElementById('blog')
    // console.log(element)

    // document.getElementsByClassName()
    // document.getElementsByTagName('head')

    // document.querySelector('.one')
    // document.querySelectorAll('.one')

// Manipulando conteúdo
    // const element = document.querySelector('h1')
    // element.textContent += " Olá Devs"

    // element.innerText += " Olá Devs"
    // element.innerHTML += " Olá Devs! <small>!!!</small>"

// value
    const input = document.querySelector('input')
    // console.log(element.value)

    // input.value = "Outro valor"

// setAttribute / getAttribute /removeAttribute

    // const header = document.querySelector('header')

    // header.setAttribute('id', 'teste')

    // selecionando o ID criado
    // const headerID = document.querySelector("#teste")

    // // pegar so o elemento
    // console.log(headerID.getAttribute('id'))
    // console.log(headerID)
    // console.log(headerID.getAttribute('class'))

    // header.removeAttribute('id')

// Alterando estilos
    // const element = document.querySelector('h1')
    // element.style.color = '#00ff00'

// classList

    const elementOne = document.querySelector('h1')
    const elementTwo = document.querySelector('h2')

    elementOne.classList.add('red', 'green')
    elementTwo.classList.add('green', 'red')

    elementTwo.classList.remove('green')

    elementOne.classList.toggle('green')
    