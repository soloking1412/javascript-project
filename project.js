const prompt = require("prompt-sync")();





    const deposit = () => {
        while(true){
        const depositAmount = prompt("Enter a deposit Amount: ");
        const numberDepositAmount = parseFloat(depositAmount);

        if(isNaN(numberDepositAmount) || numberDepositAmount <= 0){
            console.log("Invaild deposit amount, Try again");
        } else{
            return numberDepositAmount;
        }
        }
    };
const getNumberOfLines = () => {
    while(true){
        const lines = prompt("Enter the number of lines bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3){
            console.log("Invaild Number of lines, Try again");
        } else{
            return numberOfLines;
        }
        }
    };

const getBet = (balance , lines) => {
    while(true){
        const bet = prompt("Enter the bet per line: ");
        const numberBet = parseFloat(bet);

        if(isNaN(numberBet) || numberBet <= 0 || numberBet > balance/lines){
            console.log("Invaild Bet, Try again");
        } else{
            return numberBet;
        }
        }
    
}    

let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

