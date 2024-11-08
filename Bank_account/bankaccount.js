// Mock Data 
balance = 5000;
transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    // this function is to get the balance of bank account
    return balance;
}

function deposit(amount) {
    // Add the amount to the balance
    balance += amount;
    transactionHistory.push(`Deposited ${amount} into Savings Account`);
}

function withdraw(amount) {
    // Subtract the amount from the balance
    if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn ${amount} from Savings Account`);
    } else {
        console.log("Insufficient Balance");
    }
}

function getTransactionHistory() {
    return transactionHistory;
}

// test cases
console.log(getBalance());

deposit(4000);
console.log(getBalance());

withdraw(3000);
console.log(getBalance());

console.log(getTransactionHistory());