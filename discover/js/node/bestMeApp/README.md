# Best me App
Encontre sua melhor versão!

use o App ao final de cada dia para refletir sobre sua jornada

## O que vamos aprender?

A se comunicar com o processo enquanto ele estiver rodando

[] process.stdout
    `stdout - escrever algo de saida, saida padrão do processo`
    console.log usa ele com um \n
        ex: process.stdout.write("alguma coisa \n")
[] process.stdin
    `"data" // "data" -> ouve entrada de dados,`
    `on -> vai ficar ouvindo pum evento, toda vez que acontecer ele vai rodar uma função, nesse caso uma entrada de dados`
    process.stdin.on("data", data => {

    process.exit() // fechar o processo

[] process.on
    `Mesma ideia do process.stdin.on`
* Assincronismo