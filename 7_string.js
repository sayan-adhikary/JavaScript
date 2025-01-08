const name = "Sayan"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sayan-A-A');

console.log(gameName[0]);
console.log(gameName.__proto__);        //{}  -> Object

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,3);
console.log(anotherString);

const oneAnotherString = "     Sayan    ";
console.log(oneAnotherString);
console.log(oneAnotherString.trim());

const url = "https://sayan.portfolio.com//sayan%20adhikary"
console.log(url.replace('%20', '--'));

console.log(url.includes('sayan'));
console.log(gameName.split("-"));

//study from :- https://developer.mozilla.org/en-US/