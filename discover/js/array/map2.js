const carrinho = [
    
    '{"nome": "Mochila", "preco": 125.9}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Caneta", "preco": 7.50}'
]

const json = carrinho.map(el => JSON.parse(el))
const  jsonValues = json.map(product => product.preco)
console.log(jsonValues)