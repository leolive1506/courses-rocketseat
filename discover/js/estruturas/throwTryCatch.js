// throw - lançar
// try - tentar
// catch - pegar
// uncaught - não pego

function sayMyName(name = '') {
    if(name === '') {
        throw new Error("Nome é necessário")
    }

    console.log(name)
}

try {
    sayMyName()
} catch (event) {
    console.log(event)
}