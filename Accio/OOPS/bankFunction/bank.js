class BankAccount {
    static totalAccounts = 0;
    constructor(accountHolder, accountNumber, balance) {
        BankAccount.totalAccounts++;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    static showTotalAccounts() {
        return BankAccount.totalAccounts;
    }

    deposit(amount) {
        if (isNaN(amount) || amount < 0) {
            console.log("Invalid amount");
            return;
        }
        this.balance += Number(amount);
    }

    withdraw(amount) {
        if (isNaN(amount) || amount < 0) {
            console.log("Invalid amount");
            return;
        }
        amount = Number(amount);
        if (this.balance < amount) {
            console.log("Insufficient Balance");
            return;
        }
        this.balance -= amount;
    }

    showBalance() {
        return this.balance;
    }
}

class UPIAccount extends BankAccount {

    static totalUPIAccounts = 0;
    upiId;

    constructor(accountHolder, accountNumber, balance, upiId) {
        super(accountHolder, accountNumber, balance);
        UPIAccount.totalUPIAccounts++;
        this.upiId = upiId;
    }

    showUPI() {
        return this.upiId;
    }

    payViaUPI(amount, receiverAccount) {
        if (isNaN(amount) || amount < 0) {
            console.log("Invalid amount");
            return;
        }
        amount = Number(amount);
        if (this.balance < amount) {
            console.log("Insufficient Balance");
            return;
        }

        this.balance -= amount;
        receiverAccount.balance += amount;
        console.log("Transaction Successfull");
    }
}

let Ram = new UPIAccount("Ram", 1, 1000, "ram@ptsbi");
let Shyam = new UPIAccount("Shyam,", 2, 500, "shyam@ptsbi");
console.log(Ram);
console.log(Shyam);

Ram.payViaUPI(2000, Shyam);
console.log(Ram);
console.log(Shyam);

Ram.payViaUPI(200, Shyam);
console.log(Ram.balance);
console.log(Shyam.balance);