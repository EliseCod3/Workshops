window.onload = () => {

}

function calulateCompoundInterest() {
        const loanLengthField = document.getElementById("loanLengthField");
        const principalField = document.getElementById("principalField");
        const interestRateField = document.getElementById("interestRateField");
        // const compoundRate = document.getElementById("compoundField");
        const mortgageOutput = document.getElementById("mortgageField");
        
        let loanLength = (loanLengthField.value);
        let principal = (principalField.value);
        let interestRate = Number(interestRateField.value);
        let interest = principal * interestRate * loanLength;
    
        
        
        //let compound = Number(compoundRate.value);
    }