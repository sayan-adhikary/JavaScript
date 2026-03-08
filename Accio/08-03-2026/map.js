function learn() {
    let alphabet = new Map();

    for (let i = 0; i < 26; i++) {
        alphabet.set(String.fromCharCode(97 + i), i + 1);
    }
    console.log(alphabet);
}

learn();