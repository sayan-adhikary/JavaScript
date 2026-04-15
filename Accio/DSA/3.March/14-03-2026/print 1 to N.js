function nToOne(n) {
    if (n === 7) {
        return 7;
    }
    console.log(n);
    let ans = nToOne(n + 1);
    return ans;
}

// console.log(nToOne(1));

function nToOne2(n){
    if(n === 7){
        return;
    }
    console.log(n);
    nToOne2(n + 1);
}

nToOne2(1);