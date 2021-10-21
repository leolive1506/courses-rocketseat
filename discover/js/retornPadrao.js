/* FALSY 

    false em contextos onde uom booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN

*/

console.log(0 ? "verdadeiro" : "falso")

/*
TRUTHY
    true em contextos onde um booleano é obrigatório (condicionais e lops)

    true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity

*/

console.log( 52 ? "verdadeiro" : "falso")


// OBS------>>>>>
// DIFERENTE DE FAZER 
// console.log( true == true ? "verdadeiro" : "falso")

// console.log(0 == false ? "verdadeiro" : "falso")