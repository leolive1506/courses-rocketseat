// recebe tres parametros
// element, index, proprio array
// sendo so o primeiro obrigatório e os outros opcionais

const elementos = ["danone", "danone2", "danone2"]

elementos.forEach((element, index, array) => {
    console.log(`${index + 1}) ${element}`)
    console.log(` - Do array ${array}`)
})