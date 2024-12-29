const account = 144254
let accountEmail = "Sayan@gmail.com"
var accountPass = "158753"
accoutCity = "Kolkata"
let accountState;

console.log(account);

accountEmail = "Papau@gmail.com"
accountPass = "2413"
accoutCity= "Chennai"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([account , accountEmail , accountPass , accoutCity , accountState])
