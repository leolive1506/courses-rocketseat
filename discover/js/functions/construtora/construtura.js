function Carro(velocidadeMax = 200, delta = 5) {
    // atributo privado
    let velAtual = 0

    // metodo public
    this.acelerar = function () {
        if(velAtual + delta <= velocidadeMax) {
            velAtual += delta
        } else {
            velAtual = velocidadeMax
        }
    }

    // metodo public
    this.getVelocidadeAtual = function () {
        return velAtual
    }
}


const civic = new Carro()
civic.acelerar()
console.log(civic.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())