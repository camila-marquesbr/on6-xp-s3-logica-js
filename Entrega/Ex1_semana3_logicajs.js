/*Crie uma função que receba uma temperatura em Celsius
e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32*/

const readline = require('readline-sync')
const tempC = parseFloat(readline.question("Qual a temperatura?"))

function ConversaoDeTemperatura(tempC){
    let fahrenheit=parseFloat(9*tempC/5+32)
    console.log(`A temperatura em Fahrenheit é ${fahrenheit}`)
}
ConversaoDeTemperatura(tempC)