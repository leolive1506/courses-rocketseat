// transformar caracteres em aray
// .from espera string
let word = "manipulação"

console.log(Array.from(word))

let techs = ["html", "css", "js"]

techs.splice(1, 1, "banana")

console.log(techs)

// achar posição de um elemento no array
let index = techs.indexOf("html")
console.log(index)

techs.splice(index, 1)
console.log(techs)