function largestString(strings) {
    let mp = new Map();
    for (let ele of strings) {
        if (!mp.get(ele)) {
            mp.set(ele, 1);
        } else {
            mp.set(ele, mp.get(ele) + 1);
        }
    }
    let maxFq = 0;
    let maxFqEle = "";
    for (let [key, value] of mp) {
        if (value > maxFq) {
            if (value === maxFq && key > maxFqEle) {
                maxFqEle = key;
            }
        }
    }
    return maxFqEle;
}