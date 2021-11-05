let bill = document.querySelector('#bill__holder')
const btnnBro = document.querySelector('.tip__choices')
const btnCustom = document.getElementById('custom')
const inputPeople = document.getElementById('inputPeople')
const tipAmount = document.querySelector('.tip_amount')
let totalAmount = document.querySelector('.totall')



bill.oninput = function(){
    totalAmount.innerHTML = `$${bill.value}`
}

btnnBro.addEventListener('click', (y) => {
    if(y.target !== y.currentTarget){
        let ngee = parseFloat(y.target.value)
        multi(ngee)
    }
})
function multi(bros){
    let broBros = (bill.value * bros) / 100 
    broBros.toFixed(2)
    tipAmount.innerHTML = broBros
}

inputPeople.oninput = function(){

    if(tipAmount.innerHTML === '' || tipAmount.innerHTML === NaN){
        tipAmount.innerHTML = `$0.00`
    } else {
        let ny = parseInt(tipAmount.innerHTML) / inputPeople.value
        tipAmount.innerHTML = ny
    }
}



// let total = 0

// function toCalc(){
//     total =  Math.round(total * 100) / 100;
//     total = total.toFixed(2)
// }



