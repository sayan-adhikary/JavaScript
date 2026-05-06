// How to access elements
let ele = document.getElementById('child');
// getElementById -> gives exact element
console.log("Hello")
console.log(ele);
console.log("World")

let heading = document.getElementById('heading');
console.log(heading);

let classElement = document.getElementsByClassName('box');

// getElementsByClassName -> gives HTMLCollection
console.log("element accessing from HTMLCollection")
console.log(classElement[2]);

let eleByTags = document.getElementsByTagName('p');
console.log(eleByTags);


// using query. -> NodeList

let eleByQuery = document.querySelector('p');
console.log("by query:",eleByQuery);

let eleByQueryAll = document.querySelectorAll('p');
console.log("by all", eleByQueryAll);

// target of query is similar to writing css selectors

let eleById = document.querySelector('#heading');
console.log(eleById);
let eleByClass = document.querySelectorAll('.box');
console.log(eleByClass);


let pUnderDiv = document.querySelectorAll('div p');
console.log("PudrDiv:",pUnderDiv);

let pInBody = document.querySelectorAll('body > p');
console.log("P at 23", pInBody);




let allDivsUsingClass = document.getElementsByTagName('div'); // html collection
let allDivsUsingQuery = document.querySelectorAll('div'); // Nodelist

console.log(allDivsUsingClass);
console.log(allDivsUsingClass.length);
console.log(allDivsUsingQuery);
console.log(allDivsUsingQuery.length);

let element = document.createElement('div');
element.textContext = "Hello";
document.querySelector('body').appendChild(element);

console.log(allDivsUsingClass);
console.log(allDivsUsingClass.length);
console.log(allDivsUsingQuery);
console.log(allDivsUsingQuery.length);


// form HTMLCollections/Nodelist to Array
// allDivsUsingClass.forEach((x)=>{
//     console.log(x);
// })

allDivsUsingQuery.forEach((x)=>{
    console.log(x);
})

let arr = Array.from(allDivsUsingClass);
arr.map((x)=>{
    console.log("Inside arr:",x);
})

