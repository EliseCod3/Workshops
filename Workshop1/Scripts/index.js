"use strict"
window.onload

function calculateMortgage() {
    
    //query html elements on the page and put them into variables
    const principalField = document.getElementById("principalField");
    const interestRateField = document.getElementById("interestRateField");
    const loanLengthField = document.getElementById("loanLengthField");
    const resultMonthlyPayment = document.getElementById("resultMonthlyPayment");
    const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");

    
    let principal = principalField.value;
    let interestRate = interestRateField.value;
    let loanLength = loanLengthField.value;
    let monthly = (principal / loanLength) * interestRate;
    let formulaInterest = Math.abs(Math.round((monthly * loanLength) - principal));
    let interestTotal = Math.abs(Math.round(formulaInterest / 0.01));
    
    resultMonthlyPayment.innerHTML = monthly.toFixed(2);
    resultTotalInterestPaid.innerHTML = interestTotal.toFixed(2);
}

console.log(calculateMortgage());

function calulateCompoundInterest() {
    const loanLengthField = document.getElementById("loanLengthField");
    const principalField = document.getElementById("principalField");
    const interestRateField = document.getElementById("interestRateField");
    const compoundRate = document.getElementById("compoundField");
    const mortgageOutput = document.getElementById("mortgageField");
    
    let loanLength = (loanLengthField.value);
    let principal = (principalField.value);
    let interestRate = Number(interestRateField.value);
    let interest = principal * interestRate * loanLength;
    
    //let compound = Number(compoundRate.value);
}

console.log(calulateCompoundInterest());