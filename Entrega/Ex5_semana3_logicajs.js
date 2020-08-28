/*Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5,
a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.*/
const readline = require('readline-sync')
const num= parseFloat(readline.question("Qual será o valor?"))
let somaSequencia=0
function soma(num){
    for(i=1; i<=num; i++){
        somaSequencia+=i
    }
    console.log("o resultado é " + somaSequencia)
}
soma(num)