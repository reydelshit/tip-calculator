let bill = document.querySelector('#bill__holder')
const btnnBro = document.querySelector('.tip__choices')
const btnCustom = document.getElementById('custom')
const inputPeople = document.getElementById('inputPeople')
let tipAmount = document.querySelector('.tip_amount')
let totalAmount = document.querySelector('.totall')

let resetBtn = document.querySelector('#reset')

// tipAmount = 0

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

    inputPeople.oninput = function(){

        if(!(inputPeople.value)){
            tipAmount.innerHTML = '$0.00'
        } else {
            ny = broBros / inputPeople.value
            tipAmount.innerHTML = ny
        } 
    
    }
}


resetBtn.addEventListener('click', () => {
    location.reload();
    return false;
})

