/* 
Crie 2 arquivos JS
    O primeiro
        irá exportar uma função chamada getFlag()
        que receberá um argumento do tipo String
        Essa função deverá buscar dentro do aray process.argv a flag desejada, que é a String e retornar o valor da flag

    O segundo
        Irá imortar a função e passar a flag desejada
        Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting
        para que sej impresso no terminal a saudação e nome da pessoa

*/

function getFlag(flag) {
    const index = process.argv.indexOf(flag) 
    const saudacao = process.argv.indexOf("--greeting")

    const showName = process.argv[index + 1]
    const showGreeting = process.argv[saudacao + 1]
    return `${showName} ${showGreeting} `
}


module.exports = {
    getFlag
}

// executar 
// node desafioFile2.js process --name "Ana" --greeting "É a mais linda"
