const MathFunction = {
    arr: [],
    updateArr(arr) {
        this.arr = arr;
    },
    sum() {
        let n = this.arr.length
        let sum = 0
        for (let i = 0; i < n; i++) {
            sum += this.arr[i]
        }
        return sum
    },
    mul() {
        let n = this.arr.length;
        let mul = 1;
        for (let i = 0; i < n; i++) {
            mul *= this.arr[i];
        }
        return mul;
    },
    sub() {
        let n = this.arr.length;
        let sub = 0;
        for (let i = 0; i < n; i++) {
            sub -= this.arr[i];
        }
        return sub;
    },
    div() {
        let n = this.arr.length;
        let div = 0;
        for (let i = 0; i < n; i++) {
            div *= this.arr[i];
        }
        return div;
    },
    cil() {

    },
    computeAllFunction() {              //did all sum mul sub div
        return {                        // return object
            sum: this.sum(),
            mul: this.mul(),
            sub: this.sub(),
            div: this.div(),
        }
    }
};

function mathFunction(arr) {
    MathFunction.updateArr(arr)
    return MathFunction.computeAllFunction();
}

console.log(mathFunction([2, 3, 2, 4, 3, 5]));
