function helper(x, n){
        if (n === 0) {
            return 1;
        }
        let m = Math.floor(n / 2);
        let temp = helper(x, m);
        if (n % 2 === 0) {
            //even 10 = 5 + 5
            return temp * temp;
        } else {
            //odd   9 = 1 + 4 + 4
            return x * temp * temp;
        }
    }
function myPow(x, n) {
        //your code goes here
        let ans = helper(x, Math.abs(n));
        if (n < 0) {
            return 1 / ans;
        }
        return ans;
    }
console.log(myPow(2,-3));
