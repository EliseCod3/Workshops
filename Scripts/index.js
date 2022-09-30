"use strict"





function calculateMortgage() {
    //query html elements on the page and put them into variables
    const principalField = document.getElementById("principalField");
    const interestRateField = document.getElementById("interestRateField");
    const loanLengthField = document.getElementById("loanLengthField");
    const resultMonthlyPayment = document.getElementById("resultMonthlyPayment");
    const resultTotalInterestPaid = document.getElementById("resultTotalInterestPaid");
    const num1 = 1;

    //calculate something
    let principal = Number(principalField.value);
    let interestRate = Number(interestRateField.value);
    let loanLength = Number(loanLengthField.value);
    let percentInterest = interestRate;
    let monthly = principal * percentInterest / num1 - (num1  + percentInterest)**loanLength;
    let interest = principal * percentInterest * loanLength;
    console.log(principal * percentInterest * loanLength);

    //create your message to display
    let answerMortgage = `Your expected monthly payment is ${monthly}`;
    let answerTotalInterest = `Your total interest paid is ${interest}`;

    //display message
    resultMonthlyPayment.innerHTML = answerMortgage;
    resultTotalInterestPaid.innerHTML = answerTotalInterest;
}

calculateMortgage()
