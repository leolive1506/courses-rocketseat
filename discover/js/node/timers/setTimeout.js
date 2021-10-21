// roda um função dps de X milissegundos
// passa a funçã como uma referência (sem os parenteses)
// executa uma vez
const timeOut = 2000

const finished = () => console.log("done!")

setTimeout(finished, timeOut)

console.log("Mostrar")