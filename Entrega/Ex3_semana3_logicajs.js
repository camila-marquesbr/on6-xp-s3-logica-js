/*Faça um programa que receba um valor em metros e e chame uma função que converta em milímetros.*/

const readline = require('readline-sync')
const valorMetro= parseFloat(readline.question("Qual a o valor em metros?"))

function conversao(valorMetro){
    let valorMilimetro=parseFloat(valorMetro*1000)
    console.log(`o Valor em milímetros é ${valorMilimetro}`)
}
conversao(valorMetro)