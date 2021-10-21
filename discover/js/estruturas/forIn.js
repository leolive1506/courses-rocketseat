// cria um loop em cima de um obj, pegando suas propriedades

let person = {
    name: "John",
    age: 30,
    weight: 88.6
}

for(let property in person) {
    // pegar as chaves dos campos
    console.log(property)
    // pegar valores campos
    console.log(person[property])
}