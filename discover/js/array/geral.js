const pilotos = ["Vettel", "Alonso", "Raikkonen", "Massa"]

pilotos.pop()
console.log(pilotos)

pilotos.push("Pilotão")
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift("Massa")
console.log(pilotos)

pilotos.splice(2, 0, "Zumm1", "Zumm2")
console.log(pilotos)

pilotos.splice(2, 2)
console.log(pilotos)

const algunsPilotos = pilotos.slice(2) //novo array
console.log(`Novo array a partir do slice ${algunsPilotos}`)

const algunsPilotos2 = pilotos.slice(1, 4) //novo array //4 não incluso
console.log(`Novo array a partir do slice ${algunsPilotos2}`)