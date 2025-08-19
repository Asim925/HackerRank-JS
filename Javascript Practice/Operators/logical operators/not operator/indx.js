// OR operator
let goodIncome = false;
let grades = false;
let egligibleForLoan = goodIncome || grades;
console.log("egligible for loan :", egligibleForLoan);

// NOT operator
let loanRefused = !egligibleForLoan;
console.log("loan is refused :", loanRefused);
