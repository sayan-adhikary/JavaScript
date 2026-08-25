let a = [1, 2, 3, 4];
let b = [5, 6, 1, 2, 1, 2, 7, 8, 9];
let c = [...a, ...b];
// console.log(c);

let count = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            count++;
            break;
        }
    }
}
// console.log(count);

let arr = [];
let x = 0;

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (a[i] == b[j]) {
            // arr.push(a[i]);
            arr[x] = a[i];
            x++;
            break;
        }
    }
}

console.log(arr);


let common = a.filter(x => b.includes(x));

// console.log(common);