function hollowDiamond(n) {

    for (let i = 1; i <= n; i++) {              //upper
        let row = "";
        for (let s = 1; s <= n - i; s++) {      //space
            row += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {  //star && hollow
            if (j === 1 || j === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }

    for (let i = n - 1; i >= 1; i--) {                  //lower
        let row = "";
        for (let s = 1; s <= n - i; s++) {
            row += " ";
        }
        for (let j = 1; j <= 2 * i - 1; j++) {
            if (j === 1 || j === 2 * i - 1) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

hollowDiamond(4);