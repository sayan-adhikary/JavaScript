function BankAccount(owner, balance, acccountNumber) {
    this.owner = owner;
    this.balance = balance;
    this.acccountNumber = acccountNumber;
}

BankAccount.prototype.deposite = function (x) {
    if (x < 0) return;
    else {
        this.balence += x;
    }
}


BankAccount.prototype.withDrawl = function (x) {
    if (x < this.balence) {
        this.balence -= x;
    } else {
        return;
    }
}

let b1 = new BankAccount("sayan", 39, 3333333);
b1.deposite(9);