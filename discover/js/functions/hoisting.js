// quando for function normal pode chamar antes
ola()

function ola() {
    console.log("olá")
}

// caso esteja em uma const ou let tem que declarar a função antes de chamar
const chamarDepois = function() {
    console.log("Chamou?")
}

chamarDepois()