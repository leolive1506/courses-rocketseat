// Uma função que está passando como parâmetro outra função

function sayMyName(name) {
    name()
}

sayMyName(
    () => {
        console.log("estou em uma callback")
    }
)