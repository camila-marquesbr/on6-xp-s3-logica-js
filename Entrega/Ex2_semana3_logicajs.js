/*Agora faça o contrário, uma função que receba uma temperatura
em Fahrenheit e chame uma função que converta para Celsius.*/

const readline = require('readline-sync')
const tempF = parseFloat(readline.question("Qual a temperatura?"))

function ConversaoDeTemperatura(tempF){
    let TempC=parseFloat((tempF-32)/1.8)
    console.log(`A temperatura em Celcius é ${TempC}`)
}
ConversaoDeTemperatura(tempF)