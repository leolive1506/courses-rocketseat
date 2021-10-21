// declare variável nome weight
// let weight

// tipo de dado acima é undefined

/* 
3. Declare uma variável e atribua valores p cada um dos dados:
* name: string
* age: Number (integer) 
* stars: Number (float) 
* isSubscribed: Boolean
let name = "danone"
let age = 17
let weight = 5.6
let isSubscribed = true
*/ 
    

    // Atribuir os mesmos em obj
    const student = {
        name: "Danone",
        age: 17,
        weight: 64.6,
        isSubscribed: true
    }

    // console.log(`${student.name} de idade ${student.age} pesa ${student.weight}`)

// Atribuir variavel array, de nome students sem nenhum valor
let students = []

// retrubuir valor à variável acima com valor do student
students = [
    student
]

// colocar na posição zero
// console.log(students[0])

// criar novo estudante e add no array
const Leonardo = {
    name: "Leonardo",
    age: 18,
    weight: 70.6,
    isSubscribed: true
}

students.push(Leonardo)
console.log(students[1])