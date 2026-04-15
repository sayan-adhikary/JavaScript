function CountABC(input, i) {
    if (i > input.length - 3) {
        return 0;
    }

    if (input.slice(i, i + 3) === "abc") {
        return 1 + CountABC(input, i + 1);
    }

    return CountABC(input, i + 1);
}

let input = "abcxxabc";
console.log(CountABC(input, 0));
