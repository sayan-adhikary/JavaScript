function app() {
    return {
        x: 23
    }
}
// console.log(app());


function string() {
    let a = "Sayan"
    let b = new String("Sayan")
    console.log(a == b);
    console.log(a === b);
    console.log(typeof (a));
    console.log(typeof (b));

}
// string();


function arr(a, b) {
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}

const a = [1, 2, 3, 4]
const b = [1, 2, 3, 4]
const c = new Array(1, 2, 3, 4)
// console.log(arr(a, c));

console.log("Sayan" - "papu");
console.log("100" - "10");
console.log("100" * "10");
