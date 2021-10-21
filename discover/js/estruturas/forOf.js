// loop em cima de alguma variavel que tiver

let nome = 'Leo'
let names = ['joão', 'leo', 'douglas']

for(let char of nome) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

const arrayObjg = [
    {name: "Leo"},
    {name: "Leo"},
    {name: "Leo"},
]

for(let obj of arrayObjg) {
    console.log(obj)
}