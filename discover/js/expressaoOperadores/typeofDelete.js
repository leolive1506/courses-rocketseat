// typeof - ver tipo do dadot
// delete - apaga um determinado dado de um obj
    // se não existir não será deletada

const person = {
    name: 'leo', 
    age: 25
}
console.log(person)

console.log(typeof person)

delete person.age

console.log(person)