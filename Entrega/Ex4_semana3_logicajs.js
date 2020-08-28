/*Crie uma função com as seguintes características:

A função deve receber 3 parâmetros.
Se somente um argumento for passado, retorne o valor do argumento.
Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
Se nenhum argumento for passado, retorne "não recebeu parâmetro"*/

const readline = require('readline-sync')
const p1 = parseFloat(readline.question("Qual o 1 valor?"))
const p2 = parseFloat(readline.question("Qual o 2 valor?"))
const p3 = parseFloat(readline.question("Qual o 3 valor?"))

function soma (p1,p2,p3){
    if(isNaN(p1) && isNaN(p2) && isNaN(p3)){
        console.log("Não existe parâmetros")
    }else {
        if (!isNaN(p1)){
            if(!isNaN(p2)){
                if(!isNaN(p3)){
                    console.log(p1+p2+p3)
                    return;
                }else{
                    console.log(p1+p2);
                    return;
                }
                }else if(!isNaN(p3)){
                    console.log(p1+p3)
                    return;
                }else{
                    console.log(p1)
                    return;
                }
            }
        if(!isNaN(p2)){
            if(!isNaN(p3))
            console.log(p2+p3)
            return;
        }else{
            console.log(p2)
            return;
        }
        }
        if(!isNaN(p3)){
            console.log(p3)
            return;
        }
    }


soma(p1,p2,p3);
//soma(1)
//soma(1,2)
//soma(1,2,5)
//soma()