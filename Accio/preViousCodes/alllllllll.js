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
    average() {
        return (this.sum() / this.arr.length);
    },
    min() {
        let min = this.arr[0]
        for (const ele of this.arr) {
            if (ele < min) {
                min = ele;
            }
            return min;
        }
        return -1
    },
    round() {                                       //y.xabcd -> (0.x > 0.5) ||(0.x==0.5)  -> y + 1   and (0.x < 0.5) -> y
        let rounderValues = [];
        for (let ele of this.arr) {
            let tempNumRem = parseInt(ele * 10) % 10;
            rounderValues.push(parseInt(ele) + (tempNumRem >= 5))
        }
        return rounderValues;
    },
    floor() {                                       //y.xabcd → y
        let floorValues = [];
        for (const ele of this.arr) {
            let temp = parseInt(ele);
            floorValues.push(temp);
        }
        return floorValues;
    },
    ceil() {
        let ceilValues = [];
        for (const ele of this.arr) {
            let temp = parseInt(ele) + 1;
            ceilValues.push(temp);
        }
        return ceilValues;
    },
    toFixed() {
        let fixedValues = [];
        for (const ele of this.arr) {
            let temp = parseInt(ele * 10) % 10;
            fixedValues.push(parseInt(ele) + (temp >= 5));
        }
        return fixedValues;
    },
    variance() {                            //1.calculate avg(mean), 2.squared diff[ele - mean]^2, 3.sum squared diff, 4.divide by n
        let n = this.arr.length;
        if (n === 0) return 0;

        //1. calculate mean
        let mean = this.average();

        //2. calculate squared differences
        let squaredDiffs = [];
        for (const ele of this.arr) {
            squaredDiffs.push((ele - mean) ** 2);
        }

        //3. sum squared differences
        let total = 0;
        for (const val of squaredDiffs) {
            total += val;
        }

        //4. divide by n to get variance
        return total / n;
    },
    std() {
        let variance = this.variance();
        if (variance === 0) return 0;

        // Manual square root using Newton's method
        let guess = variance / 2;
        for (let i = 0; i < 20; i++) {
            guess = (guess + variance / guess) / 2;
        }
        return guess;
    },
    computeAllFunction() {              //did all sum mul sub div
        return {                        // return object so we useing {}
            sum: this.sum(),
            mul: this.mul(),
            sub: this.sub(),
            div: this.div(),
            avg: this.average(),
            min: this.min(),
            round: this.round(),
            floor: this.floor(),
            ceil: this.ceil(),
            variance: this.variance(),
            std: this.std()
        }
    }
};

function mathFunction(arr) {
    MathFunction.updateArr(arr)
    return MathFunction.computeAllFunction();
}

console.log(mathFunction([2.34, 3.54, 2.9, 4.4, 3.01, 5.11]));
