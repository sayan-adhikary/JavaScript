console.log(name);      //undefined
console.log(firstName);     //TDZ(RefrenceError)
console.log(secName);       //TDZ(RefrenceError)



var name = "papu";
let firstName = "sayan";
const secName = "adhikary";

scope()

function scope(){
    console.log(name);  //inside memory location name

    var name = "papu"

    console.log(name);
} 