// your code here
const obj = {
    arr: [],
    updateArr(arr) {
        this.arr = arr;
    },
    one() {                                                         //totalSum
        let n = this.arr.length + 1
        let sum = 0
        for (let ele of this.arr) {
            sum += ele
        }
        let actualSum = Math.floor((n * (n + 1)) / 2)
        return actualSum - sum
    },
    two() {                                                     //sort and findout which one is missing
        this.arr.sort()
        for (let i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i + 1] != this.arr[i] + 1) {
                return this.arr[i] + 1;
            }
        }
    },
    third() {                                                    //Xor gate
        let n = this.arr.length + 1                                  // because one number is missing
        let xor1 = 0
        let xor2 = 0

        for (let i = 1; i <= n; i++) {                         // XOR of numbers from 1 to n
            xor1 ^= i
        }

        for (let ele of this.arr) {                                 // XOR of array elements
            xor2 ^= ele
        }
        return xor1 ^ xor2
    },
    forth(){
        return "using object and find this undefind"
    },
    all() {
        return {
            oneWay: this.one(),
            twoWay: this.two(),
            third: this.third(),
            forth: this.forth(),
        }
    }
};
function sum(arr) {
    obj.updateArr(arr);
    return obj.all();
}
console.log(sum([3, 4, 6, 1, 2]))