// cancelar um setInterval registrado

const timeOut = 1000
let i = 0
const finished = () => {
    if(i == 3) {
        clearInterval(interval)
    } else {

        i++
        console.log(i)
    }
    console.log(123)
}

let interval = setInterval(finished, timeOut)

setTimeout(() => clearInterval(interval), 5000)