// construtora vs factory
function Pessoa(nome) {
    this.nome = nome

    this.showNome = function() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa("Leo")
p1.showNome()
