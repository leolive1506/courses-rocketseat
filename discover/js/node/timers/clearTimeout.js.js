// cancelar um timeOut
const timeOut = 2000

const finished = () => console.log("done!")

// devolve um obj contendo informações do timeOut
// armazena em uma variavel p parar ele dps
let timer = setTimeout(finished, timeOut)

clearTimeout(timer)