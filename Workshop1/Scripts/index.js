"use strict"

const calculateBtn = document.getElementById("calculateButton");

function calculateMortgage() {
    
    //query html elements on the page and put them into variables
    const principalField = document.getElementById("principalField");
    const interestRateField = document.getElementById("interestRateField");
    const loanLengthField = document.getElementById("loanLengthField");
    const resultMonthlyPayment = document.getElementById("monthlyPaymentOutput");
    const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");
    

    
    let principal = principalField.value;
    let interestRate = parseFloat(interestRateField.value);
    let loanLength = (loanLengthField.value)*12;
    let interest = (principal * (interestRate * 0.01))/loanLength;
    let monthly = ((principal/loanLength)+ interest);
    let interestTotal = interest * loanLength;
    
    resultMonthlyPayment.innerHTML = monthly.toFixed(2);
    resultTotalInterestPaid.innerHTML = interestTotal.toFixed(2);
    
}
window.onload = () => {
    calculateBtn.onclick = calculateMortgage;
}


// function calulateCompoundInterest() {
//     const loanLengthField = document.getElementById("loanLengthField");
//     const principalField = document.getElementById("principalField");
//     const interestRateField = document.getElementById("interestRateField");
//     // const compoundRate = document.getElementById("compoundField");
//     const mortgageOutput = document.getElementById("mortgageField");
    
//     let loanLength = (loanLengthField.value);
//     let principal = (principalField.value);
//     let interestRate = Number(interestRateField.value);
//     let interest = principal * interestRate * loanLength;

    
    
//     //let compound = Number(compoundRate.value);
// }

// console.log(calulateCompoundInterest());