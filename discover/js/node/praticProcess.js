const questions = [
    "A mais linda é:",
    "Ela é:",
    "E..."
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

let answers = []

process.stdin.on("data", data => {
    answers.push(data.toString().trim())

    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        process.exit()
    }
})

process.on("exit", () => {
    console.log(`
    
    A mais linda: ${answers[0]}
    Ela é: ${answers[1]}
    E ${answers[2]}
    `)
})