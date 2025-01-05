// Primitive

// 7types : String, Number, Boolean, null, undifined, Symbol, BigInt 

const  score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;  //=undifined{Same}

const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log(id === anotherId);  //false

const bigNumber = 32745282734774874783478387233642834n


// Refrence (Non Primitive)

// Array, Objects, Functions {{JavaScript is dynamically typed}}

const heros = ["Sayan", "Papu", "Anuj"]
let myObj = {
    name: "Sayan",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);      //typeof:- to know the datatype

//https://262.ecma-international.org/5.1/#sec-11.4.3

/* Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object */
