function outer() {
    const secret = "hidden"
    
    function inner() {
        return secret // closure
    }

    return inner;
}

// Usage
console.log(outer()());