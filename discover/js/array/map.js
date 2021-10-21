// gera um novo array do MESMO tamanho só que com dados tranformados
// pode fazer maps em sequencia
// recebe element, index, próprio array

const nums = [1, 2, 3, 4, 5]

const num = nums.map(num =>{
    return num * 2 
})
console.log(num)

const soma10 = e => e + 10
const triplo = e => e * 3
const amount = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`


const valueFinal = nums.map(soma10).map(triplo).map(amount)
console.log(valueFinal)