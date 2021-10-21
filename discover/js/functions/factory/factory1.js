// factory simples
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}
// console.log(criarPessoa())

function criarProduto(name, value) {
    const calcDesconto = value * 0.1
    const desconto = calcDesconto.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    
    return {
        nome: name,
        valor: `R$ ${value},00`,
        desconto
    }
}

console.log(criarProduto("danone", 1234))