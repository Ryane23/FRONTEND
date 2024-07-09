let mortgagetype

function calculateMortgage() {
    
    mortgagetype = document.querySelector('input[name="mortgagetype"]:checked')   
    const form = document.getElementById('mortgageForm');

  
    const formData = new FormData(form);


    const mortgageAmount = parseInt(formData.get('mortgageAmount'));
    const annualInterestRate = parseFloat(formData.get('interestRate'));
    const mortgageTerm = parseFloat(formData.get('mortgageTerm'));
    

  
    if (isNaN(mortgageAmount) || isNaN(annualInterestRate) || isNaN(mortgageTerm)) {
        alert('Please enter valid numbers for all fields.');
        return;
    }

    const monthlyInterestRate = (annualInterestRate / 100) / 12;
    const numberOfPayments = mortgageTerm * 12;

  
    const monthlyPayment = calculateMonthlyPayment(mortgageAmount, monthlyInterestRate, numberOfPayments);

    displayResult(monthlyPayment);

    const totalPayment = calculatetotalPayment(mortgageAmount, numberOfPayments);

    displayResult2(totalPayment);
}


function calculateMonthlyPayment(mortgageAmount, monthlyInterestRate, numberOfPayments) {

    if(mortgagetype) {
        console.log(mortgageAmount, monthlyInterestRate, numberOfPayments, mortgagetype.value)
    }
    console.log(mortgagetype)

    
    let monthlyRepayment;

   if (mortgagetype.value === 'repayment') {
        monthlyRepayment = (mortgageAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    } else if (mortgagetype.value === 'interest-only') {
        const annualInterest = mortgageAmount * (monthlyInterestRate / 100);
        monthlyRepayment = annualInterest / 12;
    }
    console.log(monthlyRepayment)
    return (monthlyRepayment);
}

function displayResult(monthlyPayment){
    console.log(monthlyPayment)
    const resultElement = document.getElementById('result1');
    resultElement.textContent = `$${monthlyPayment.toFixed(2)}`;
}

function calculatetotalPayment(mortgageAmount, numberOfPayments) {
    console.log(`${mortgageAmount} * ${numberOfPayments}`)
    return (mortgageAmount * numberOfPayments) ;
}

function displayResult2(totalPayment) {
    console.log(totalPayment)
    const resultElement = document.getElementById('result2');
    resultElement.textContent = `$ ${totalPayment.toFixed(2)}`;
}
