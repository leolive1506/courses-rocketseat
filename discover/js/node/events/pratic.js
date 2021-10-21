const { EventEmitter } = require("events")

const emitter = new EventEmitter()

emitter.once("teste", msg => {
    console.log("To ouvindo heim", msg)
})

emitter.emit("teste", "Aninha")
emitter.emit("teste", "Eu, o Léo")
emitter.emit("teste", "Jublisqueodo")