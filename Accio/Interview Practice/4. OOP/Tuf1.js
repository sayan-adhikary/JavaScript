/* TUF:-
You are tasked with designing a class Student that stores and displays information about students.

The class must have the following :

Attributes :
name (string) : Stores the name of the student.
rollNumber (int) : Stores the roll number of the student

Methods :
setDetails (String name, int rollNumber) : This method initializes the attributes name and rollNumber with the values provided by the user.
displayDetails() : This method prints the details of the student in following format (The output consist of two separate lines) :

Refer the sample input example to understand the output format.
Refer the commented code on IDE for output statements.
 */

class Student {
  constructor() {
    this.name = 'Sayan';
    this.rollNumber = 21;
  }

  setDetails(name, rollNumber) {
    this.name = name;
    this.rollNumber = rollNumber;
  }

  displayDetails() {
    console.log(this.name);
    console.log(this.rollNumber);
  }
}

let student = new Student();
student.setDetails('papu', 32);
student.displayDetails();
