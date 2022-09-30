"use strict"

window.onload = function init() {
    const calculateButton = document.getElementById("calculateButton");
    calculateButton.onclick = calculateMortgage();
}


function calculateMortgage() {
    //query html elements on the page and put them into variables
    const principalField = document.getElementById("principalField");
    const interestRateField = document.getElementById("iterestRateField");
    const loanLengthField = document.getElementById("loanLengthField");
    const resultMonthlyPayment = document.getElementById("resultMonthlyPayment");
    const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");


    //calculate something
    let principalField = Number(principalField.value);
    let interestRateField = Number(interestRateField.value);
    let loanLengthField = Number(loanLengthField.nodeValue);
    let percentInterest = interestRateField * 0.01;
    let monthly = principalField * percentInterest / 1 - (1  + percentInterest)**loanLengthField;
    let interest = principalField * percentInterest * loanLengthField;
    //create your message to display
    let answerMortgage = `Your expected monthly payment is ${monthly}`;
    let answerTotalInterest = `Your total interest paid is ${interest}`;

    //display message
    resultMonthlyPayment.innerText =answerMortgage;
    resultTotalInterestPaid.innerText = answerTotalInterest;
}

calculateMortgage();
