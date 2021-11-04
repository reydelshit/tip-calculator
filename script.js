let bill = document.querySelector('#bill__holder')

//btn

const btn5 = document.getElementById('value__of5')
const btn10 = document.getElementById('value__of10')
const btn15 = document.getElementById('value__of15')
const btn25 = document.getElementById('value__of25')
const btn50 = document.getElementById('value__of50')
const btnCustom = document.getElementById('custom')


const inputPeople = document.getElementById('inputPeople')

const tipAmount = document.querySelector('.tip_amount')
let totalAmount = document.querySelector('.totall')





// totalAmount.innerHTML = 'yow'

bill.oninput = function(){
    totalAmount.innerHTML = bill.value
    
    if(bill.value > 8){
        return 0
    }
}

// bill.addEventListener(oninput, () => {
//     bill.value = totalAmount.innerHTML
//     console.log(bill.value)
// })
// console.log(bill.value)
// const jdaj = realtimeInput()

// console.log(jdaj)
// bill.value = realtimeInput()

// function realtimeInput(){
//     bill.addEventListener(oninput, function(){
//         bill.value = totalAmount.innerHTML
//     })
// }
// realtimeInput()

// bill.value = totalAmount.innerHTML
// console.log(bill.value)
