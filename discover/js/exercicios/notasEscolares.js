/* 
    Crie um algoritmo que transforme as notas do sistema
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima -   A
    * entre 80 - 89   -   B
    * entre 70 - 79   -   C
    * entre 60 - 69   -   D
    * menor que 60    -   F 

*/

function notas(nota) {
    
    const vazio = nota === ""
    const negativo = nota < 0
    const A = nota > 90
    const B = nota >= 80 && nota <= 89
    const C = nota >= 70 && nota <= 79
    const d = nota >= 60 && nota <= 69
    const f =  nota < 60

    if(vazio) {
        console.log("digite uma nota válida")
    } else if (negativo) {
        console.log("digite uma nota válida")
    } else if(A) {
        console.log("A") 
    } else if(B) {
        console.log("B") 

    } else if (C) {
        console.log("C") 
    } else if(d) {
        console.log("D")
    } else if(f) {
        console.log("F") 
    } else {
        console.log("digite uma nota válida")
    }


  
}

notas(68)
