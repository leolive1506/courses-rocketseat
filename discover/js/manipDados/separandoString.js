// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois, transforme o array em um texto e onde eram espaços, colocar _

let frase = "A Ana é lindosa demais"

let myArray = frase.split(" ")
console.log(myArray)

let tudoJunto = myArray.join("_")
console.log(tudoJunto.toLocaleUpperCase())

// split = separa string pelo desejado no argumento, nesse caso espaço vazio
// join() juntar o array com o tipo de separador passado no argumento