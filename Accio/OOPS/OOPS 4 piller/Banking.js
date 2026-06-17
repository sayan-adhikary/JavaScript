class Banking {
    static totalAccount = 0;
    constructor(accountHolder, accountNumber, balance) {
        totalAccount++;
        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    depostite(amount) {
        if (amount < 0) {
            return;
        } else {
            this.balance += amount;
            return `balance increased`;
        }
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return `insufficient`;
        } else {
            this.balance -= amount;
            return `withdral`;
        }
    }

    showBalance() {
        return this.balance;
    }

    static showTotalAccount(){
        return this.totalAccount;
    }
}

class upiAccount extends Banking{

}