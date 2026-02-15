function one_Two(num){
for (let i = 1; i <= num; i++) {
        let faf = "";
        for (let j = i; j >= 1; j--) {
            faf += j;
        }
        console.log(faf);
    }
}
one_Two(5)