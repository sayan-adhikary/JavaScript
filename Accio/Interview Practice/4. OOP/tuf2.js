/* https://takeuforward.org/plus/oops/introduction-to-oops/practice-attributes-and-methods?subject=oops&approach=java
Practice (Attributes and Methods)
(Medium)

Design a class BankAccount with the following specification :

Attributes :
accountNumber (string) : Represents the account number of the user's account
balance (double) : Represents the balance of the account

Constructor :
Implement a parameterised constructor to have the accountNumber and balance initialised while creating the object.

Methods :
deposit (double amount) : It adds the amount to the balance of the user's account.
withdraw (double amount) : It deducts the money (amount) from the balance. If the balance is insufficient then print "Insufficient funds!" and do not change the original amount.
displayDetails() : It displays the accountNumber and balance of the account.


Refer the sample examples for understanding the output format.

Note :
Use the exact output format given in example with matching case and whitespaces else may face wrong answers.
Use the name convention for classes and methods as given in the IDE commented code or the problem statement to avoid the compilation error.
All outputs should always be displayed with exactly 2 decimal places.

Example 1
Input : accountNumber = "9662375274869" , balance = 8655 , addBalance = 5854 , withdrawBalance = 9437

Output :
Account Number : 9662375274869
Balance : 5072.00

Explanation :

The object of the class BankAccount is created using the parameterised constructor with accountNumber and balance as the two arguments to constructor.
Then the deposit() method is called with parameter addBalance.
Next the withdrawbalance() method is called with parameter withdrawBalance, Here the withdrawal balance is 9437 and Balance is 14509. So we can withdraw the given amount.
Next the displayDetails() method is called which displays the account number and balance present in the account.

Example 2
Input : accountNumber = "9662375274869" , balance = 8655 , addBalance = 10, withdrawBalance = 9437

Output :
Insufficient funds!
Account Number : 9662375274869
Balance : 8665.00

Explanation :

The object of the class BankAccount is created using the parameterised constructor with accountNumber and balance as the two arguments to constructor.
Then the deposit() method is called with parameter addBalance.
Next the withdrawbalance() method is called with parameter withdrawBalance, Here the withdrawal balance is 9437 and Balance is 8665. So we cannot withdraw the given amount so print "Insufficient funds!".
Next the displayDetails() method is called which displays the account number and balance present in the account.    
 */


class BankAccount {
  //Attribute
  accountNumber;
  balance;

  //constructor
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    if (balance < 0) {
      throw new Error('enter a valid amount');
    }
      this.balance = balance;
  }

  //Methods
  deposite(amount) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.error('Not valid amount');
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      console.log(`${amount} withdrawl`);
      this.balance -= amount;
    } else {
      console.error('Insufficienct Balance');
    }
  }

  displayDetails() {
    return `${this.accountNumber} have ${this.balance} `;
  }
}

let user1 = new BankAccount('Sayan', 300000);
let user2 = new BankAccount('Saurav', -20);

console.log(user1.displayDetails());
console.log(user2.displayDetails());

