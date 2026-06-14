function StudentDetails(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
}

StudentDetails.prototype.avarage = function () {
    let arr = this.marks;
    let total = 0;
    for (let i = 0; i < this.marks.length; i++) {
        total += arr[i];
    }
    return total / (arr.length);
}

StudentDetails.prototype.isPass = function () {
    let arr = this.marks;
    let avg = this.avarage();
    console.log(avg);
    for (let i = 0; i < this.marks.length; i++) {
        if (arr[i] < 30 && avg < 40) {
            return false;
        }
    }
    return true;
}

let s1 = new StudentDetails("sayan", 23, [45, 15, 76]);
console.log(s1.isPass());
