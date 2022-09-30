"use strict"
window,onload = init;

function init() {
    const onCalcMortgage = document.getElementById(".calcMortgage");
    onCalcMortgage.onclick = calculateMortgage;
}


function calculateMortgage() {
    //query html elements on the page and put them into variables
    const principalField = document.getElementById(".principalField");
    const interestRateField = document.getElementById(".iterestRateField");
    const loanLengthField = document.getElementById(".loanLengthField");
    const resultMonthlyPayment = document.getElementById("resultMonthlyPayment");
    const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");
    const num1 = 1;

    //calculate something
    let principal = Number(principalField.value);
    let interestRate = Number(interestRateField.value);
    let loanLength = Number(loanLengthField.nodeValue);
    let percentInterest = interestRate * 0.01;
    let monthly = principal * percentInterest / num1 - (num1  + percentInterest)**loanLength;
    console.log(principal * percentInterest / num1 - (num1  + percentInterest)**loanLength);
    let interest = principal * percentInterest * loanLength;
    console.log(principal * percentInterest * loanLength);

    //create your message to display
    let answerMortgage = `Your expected monthly payment is ${monthly}`;
    let answerTotalInterest = `Your total interest paid is ${interest}`;

    //display message
    resultMonthlyPayment.innerText = answerMortgage;
    resultTotalInterestPaid.innerText = answerTotalInterest;
}

calculateMortgage()
