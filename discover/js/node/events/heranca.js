const { inherits } = require("util")

// inherits herdar funcionalidades do EventEmitter
const { EventEmitter } = require("events")

function Character(name) {
    this.name = name
}

inherits(Character, EventEmitter)

const chapolin = new Character("Chapolin")
chapolin.on("help", () => console.log(`EU! O ${chapolin.name} colorado!`))

console.log("Oh! E agora, quem poderá me defender?")
chapolin.emit("help")