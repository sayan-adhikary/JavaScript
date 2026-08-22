function outer() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    return increment();
}

console.log(outer()); // 1
console.log(outer()); // 2