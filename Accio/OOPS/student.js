function Student(name, marks, studentClass) {
    this.name = name;
    this.marks = marks;
    this.studentClass = studentClass;

    //method
    this.grade = function() {
        if (marks >= 75) console.log("A");
        else if (marks >= 60) console.log("B");
        else if (marks >= 50) console.log("C");
        else console.log("F");
    }
}

let s1 = new Student("Sayan", 76, 92);
console.log(s1);
s1.grade();
