// const events = require("events")
const {EventEmitter} = require("events")

// EventEmitter -> função do estilo classe

// criar
const emitter = new EventEmitter()

// ouvir evento
emitter.on("ZUmmm", (message) => {
    console.log("eu ouvi vc", message)
})

// emitir (não esta ouvindo se não tiver o emitter.on no código)
emitter.emit("ZUmmm", "Leozera")
emitter.emit("ZUmmm", "Ana")
emitter.emit("ZUmmm", "Tamyla")
emitter.emit("ZUmmm", "Gabriel")


