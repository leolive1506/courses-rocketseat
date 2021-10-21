const notas = [7.7, 5.4, 1.2, 10, 9.8]

// Sem callback
const notasBaixas1 = []

for(let i in notas) {
    if(notas [i] < 7) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)

// Com callback
const notasBaixas2 = notas.filter(function(nota) {
    return nota < 7
})

console.log(notasBaixas2)



// Mais otimizado com callback
const notasMenor7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenor7)

console.log(notasBaixas3)