"use strict"




//query html elements on the page and put them into variables
const principalField = document.getElementById("principalField");
const interestRateField = document.getElementById("interestRateField");
const loanLengthField = document.getElementById("loanLengthField");
const resultMonthlyPayment = document.getElementById("resultMonthlyPayment");
const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");
const num1 = 1;

let principal = Number(principalField.value);
let interestRate = Number(interestRateField.value);
let loanLength = Number(loanLengthField.value);
let percentInterest = interestRate;

function calculateMortgage(principal, percentInterest, loanLength) {
    
    let monthly = (principal * percentInterest) / num1 - (num1  + percentInterest)**loanLength;
    return monthly;
}

console.log(calculateMortgage());

let interest = principal * percentInterest * loanLength;
console.log(principal * percentInterest * loanLength);