
const {EventEmitter} = require("events")

const emitter = new EventEmitter()

// ouvir evento uma unica vez
emitter.once("ZUmmm", (message) => {
    console.log("eu ouvi vc", message)
})


emitter.emit("ZUmmm", "Leozera")
emitter.emit("ZUmmm", "Ana")
emitter.emit("ZUmmm", "Tamyla")
emitter.emit("ZUmmm", "Gabriel")


