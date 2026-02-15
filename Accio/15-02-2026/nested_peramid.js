function three_Peramd(num) {
    for (let i = 1; i <= num; i++) {
        let star = "";
        for (let j = 1; j <= i; j++) {
            star += "*";
        }
        console.log(star);
    }

    for (let i = 1; i <= num; i++) {
        let stars = "";
        for (let j = num; j >= i; j--) {
            stars += "*";
        }
        console.log(stars);
    }
}
three_Peramd(24);