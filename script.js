const bill = document.querySelector(".bill")
const percentage =  document.querySelectorAll(".qntTip")
const custom = document.querySelector(".custom")
const people = document.querySelector(".people")
const tipPerson = document.querySelector(".tipPerson")
const totalPerson = document.querySelector(".totalPerson")
const btnReset = document.querySelector(".reset")

let conta = 0
let qtnPorcento = 0
let qtnPessoas = 0

function calGorjeta(conta,porcentagem,numeroPessoas){
    let gorjetaTotal = conta*(porcentagem/100)
    return Math.round (gorjetaTotal /numeroPessoas)
}

function calTotal(){
    let gorjeta = calGorjeta(conta,qtnPorcento,qtnPessoas)
    let totalConta = gorjeta+conta
    return Math.round(totalConta/qtnPessoas)
}

bill.addEventListener("keyup",()=>{
    
    conta = parseInt(bill.value)
})

percentage.forEach((obj)=>{
    obj.addEventListener("click",(e)=>{
        let btnClidado = e.target.innerText
        let tirarOperador = btnClidado.slice(0, -1)
        qtnPorcento = parseInt(tirarOperador)
    })
})

custom.addEventListener("keyup",()=>{
    qtnPorcento = parseInt(custom.value)
})

people.addEventListener("keyup",()=>{
    qtnPessoas = parseInt(people.value)
    tipPerson.innerHTML = `$${calGorjeta(conta,qtnPorcento,qtnPessoas)}`
    totalPerson.innerHTML = `$${calTotal()}`
})

btnReset.addEventListener("click",()=>{
    conta = 0
    qtnPorcento = 0
    qtnPessoas = 0
    tipPerson.innerHTML = "$0"
    totalPerson.innerHTML = "$0"
    bill.value = null
    people.value = null
})