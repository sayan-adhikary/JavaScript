function peramid(n) {                       //Another problem not another way
    for (let i = 1; i <= n; i++) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {        //space
            row += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {              //stars
            row += "*";
        }

        console.log(row);
    }

    //reverce
    for (let i = n - 1; i >= 1; i--) {
        let row = "";

        for (let j = 1; j <= n - i; j++) {        //space
            row += " ";
        }

        for (let k = 1; k <= 2 * i - 1; k++) {              //stars
            row += "*";
        }

        console.log(row);
    }

}

peramid(3);