/* 

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        * receitas: [] 
        * despesas: []
    Agora, crie uma função que irá calcular o total de receitas e 
    despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguido do valor do saldo.

*/

let family = {

    incomes: [200, 300],
    expenses: [100, 500],
    
}


function sum(array) {
   let total = 0

   for(let value of array) {
       total += value
   }
   return total
}



function total() {
    const income = sum(family.incomes)
    const expense = sum(family.expenses)

    const totalSum = income - expense
    
    if (totalSum > 0) {
        console.log(`Saldo positivo de ${totalSum}`)
    } else if (totalSum < 0) {
        console.log(`Saldo negativo de ${totalSum}`)
    }
}

total()

// solução da aula

function calculateBalance() {
    const calcIncomes = sum(family.incomes)
    const calcExpenses = sum(family.expenses)

    const total = calcIncomes - calcExpenses

    const okay = total >= 0

    let balanceText = "Negativo"
     if(okay){
         balanceText = "Positivo"
     }

     console.log(`Seu saldo é ${balanceText}: R$ ${total.toFixed(2)}`)
}

calculateBalance()