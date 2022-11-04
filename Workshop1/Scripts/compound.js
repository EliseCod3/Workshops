const calculateButton = document.getElementById("calcuButton");

function calulateCompoundInterest() {
        const LengthField = document.getElementById("LengthField");
        const depositField = document.getElementById("depositField");
        const interestRateField = document.getElementById("interestRateField");
        const futureValue = document.getElementById("futureValueOutput");
        const totalInterestEarned = document.getElementById("resultTotalInterestEarned");
        
        let loanLength = (LengthField.value);
        let deposit = (depositField.value);
        let interestRate = parseFloat(interestRateField.value)* .01;
        let n = 365;
        let totalValue = deposit * interestRate * loanLength;
        let totalInterest = deposit * interestRate * loanLength;
    
        futureValue.innerText = totalValue.toFixed(2);
        totalInterestEarned.innerText = totalInterest;

        
        //let compound = Number(compoundRate.value);
}

window.onload = () => {
    calculateButton.onclick = calulateCompoundInterest;
}