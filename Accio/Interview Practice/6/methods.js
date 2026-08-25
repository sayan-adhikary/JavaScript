//find

let numbers = [10, 20, 30, 40, 50];
let result = numbers.find(x => x > 25);
// console.log(result);


let user = [
    { 'id': 1, 'name': 'Sayan', 'age': 24 },
    { 'id': 2, 'name': 'Saurav', 'age': 25 },
    { 'id': 3, 'name': 'Shubhankar', 'age': 25 }
]

let ceo = user.find(user => user.age === 25)
console.log(ceo);


//findIndex

let arr = [10, 20, 30, 40];
let a = arr.findIndex(x => x == 30);
// console.log(a);

//indexOf

let b = arr.indexOf(30);
// console.log(b);
