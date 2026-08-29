class Banking {
  static totalAcoount = 0;
  constructor(accountHolder, accountNumber, balance) {
    Banking.totalAcoount++;
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount >= 0) {
      this.balance += amount;
      console.log('Updated Balance');
    } else {
      throw new Error('Invalid amount');
    }
  }
  withdraw(amount) {
    if (amount > this.balance) {
      throw new Error('Not sufficient balance');
    } else {
      this.balance -= amount;
      console.log('Money withdrawl');
    }
  }
  showBalance() {
    return this.balance;
  }
}

class UPIAccount extends Banking {
  static totalUPIAccounts = 0;
  upiId;

  constructor(accountHolder, accountNumber, balance, upiId) {
    super(accountHolder, accountNumber, balance);
    this.upiId = upiId;
    UPIAccount.totalAcoount++;
  }

  showUPI() {
    return this.upiId;
  }

  payViaUPI(amount, receiverAccount) {
    // receiverAccount => u1, u2 like that
    this.balance -= amount;
    receiverAccount.balance += amount;
    if (this == receiverAccount) {
      throw new Error('Can not send balance to same account');
    }
    console.log(`${amount} resived on ${receiverAccount.accountNumber}`);
  }

  withdraw(amount) {
    if (amount > 100) {
      throw new Error('Daily limit exceeded');
    }
    super.withdraw(amount);
  }
}

const bank1 = new Banking('Sayan', '123654789', 300);
const bank2 = new Banking('Saurav', '147852369', 800);
// console.log(bank1.showBalance());
// console.log(bank2.showBalance());
// console.log(Banking.totalAcoount);

const upi1 = new UPIAccount('Shubhankar', '132587946', 900, 'sh@12');
const upi2 = new UPIAccount('Suraj', '154728963', 1000, 'su@21');
// upi1.payViaUPI(200, upi1);
upi1.withdraw(200);

//# Bonus Requirement 3: Transaction History DUE