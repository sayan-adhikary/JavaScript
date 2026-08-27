class Employee {
  #salary;

  constructor(name, salary) {
    this.name = name;

    if (salary < 0) {
      throw new Error('Salary cannot be negative');
    }

    this.#salary = salary;
  }

  set salary(sl) {
    if (sl < 0) {
      throw new Error('Salary cannot be negative');
    }
    this.#salary = sl;
  }

  get salary() {
    return `Salary is ${this.#salary}`;
  }
}

let emp = new Employee('Sayan', 300000);

console.log(emp.salary);
emp.salary = -20;
console.log(emp.salary);

