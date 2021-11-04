let bill = document.querySelector('#bill__holder')

const btnnBro = document.querySelector('.tip__choices')

//btn
// const btn5 = document.getElementById('value__of5')
// const btn10 = document.getElementById('value__of10')
// const btn15 = document.getElementById('value__of15')
// const btn25 = document.getElementById('value__of25')
// const btn50 = document.getElementById('value__of50')
const btnCustom = document.getElementById('custom')


const inputPeople = document.getElementById('inputPeople')

const tipAmount = document.querySelector('.tip_amount')
let totalAmount = document.querySelector('.totall')


btnnBro.addEventListener('click', (y) => {
    if(y.target !== y.currentTarget){
        const ngee = y.target.value
        // parseFloat(y.target.value) / 100
        // tipAmount.innerHTML = ngee
        multi(ngee)
    }
})

bill.oninput = function(){
    totalAmount.innerHTML = `$${bill.value}`
    // multi(bill.value)
}

function multi(bros){
    let broBros = Math.floor(bill.value / bros)
    // let dsa = Math.floor(broBros)

    // console.log(dsa)
    tipAmount.innerHTML = broBros
    console.log(broBros)

}



