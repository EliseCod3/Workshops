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
