//5-4-2026
//recursion
function helper(s, idx, temp, mp) {
    if (idx === s.length) {
        console.log(temp.join(''));
        return;
    }

    let chars = mp.get(s[idx]);
    if (!chars) return;

    for (let ch of chars) {
        temp.push(ch);
        helper(s, idx + 1, temp, mp);
        temp.pop();
    }
}

function printKPC(input) {
    if (input.length === 0) return;

    let mp = new Map([
        ['0', ".;"],
        ['1', "abc"],
        ['2', "def"],
        ['3', "ghi"],
        ['4', "jkl"],
        ['5', "mno"],
        ['6', "pqrs"],
        ['7', "tu"],
        ['8', "vwx"],
        ['9', "yz"]
    ]);

    helper(input, 0, [], mp);
}
// console.log(printKPC("78"));


