/* 

    Crie uma função que receba uma string em celsius ou fahrenheit
    e faça a transformação de uma unidade para outra 
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32

*/

function transform(number, unit) {

    const validatUnit = unit != "C" && unit != "F" &&
                        unit != "Celsius" && unit != "Fahrenheit" &&
                        unit != "celsius" && unit != "fahrenheit"

    const IfCelsius = unit == "C" && unit || unit == "Celsius" || unit == "celsius"
                        

    if(validatUnit) {
        console.log("Digite unidade Celsius ou Fahrenheit")
    } else { 
        
        let numberToString = String(number)
        console.log(numberToString)

        if(IfCelsius) 
        {
            console.log("É Celsius")
        }
    }
}

transform(123, "celsius")

