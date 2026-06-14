class Stack {
    data;
    constructor(data) {
        this.data = data;
    }

    size() {
        return this.data.length;
    }

    topEle() {
        return this.data[0];
    }

    pop() {
        return this.data.pop();
    }

    push(x) {
        this.data.push(x);
    }

    clear() {
        this.data = [];
    }
}

let s1 = new Stack([1, 2, 3, 4]);
s1.clear();
console.log(s1.size());
