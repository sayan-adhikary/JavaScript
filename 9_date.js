let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toUTCString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.getFullYear());
// console.log(myDate.getMonth());
// console.log(myDate.getDate());
// console.log(myDate.getDay());
// console.log(myDate.getHours()); 
// console.log(myDate.getMinutes());

// console.log(typeof myDate);

// let myPastDate = new Date(2023, 0, 23);
// let myPastDate = new Date(2023, 0, 23, 11, 25);
// let myPastDate = new Date("2023-01-23");

let myPastDate = new Date("01-23-2023");
// console.log(myPastDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myPastDate.getTime());
// console.log(Math.floor(Date.now()/1000));   // seconds

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDate());
// console.log(newDate.getDay());

newDate.toLocaleString('default', { month: 'long' });
