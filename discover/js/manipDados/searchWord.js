// verificar se a palavra contém amor
let frase = "eu quero viver o amor!"
console.log(frase.includes("Amor"))

// usar includes e passar como argumento a palavra desejada
// é case sensitive
let validateAmor = frase.includes("amor") ? "Amado" : "depressão"
console.log(validateAmor)
