let numeroDeAlunos = 25

for(let i = 0; i <= numeroDeAlunos; i++){
    if(i == 0){
        console.log("O número é ZERO")
    } else if(i % 2 == 0){
        console.log(`O número ${i} é PAR`)
    } else {
        console.log(`O número ${i} é ÍMPAR`)
    }
}
