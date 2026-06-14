// "use strict";
// console.log(this);
// function x(){
//     console.log(this);
// }   
// window.x();

// 1. Inside an Object Method
    // const person = {
    //     name: "Sayan",
    //     greet() {
    //         console.log(this);
    //     }
    // };

    // person.greet();

// 2. Inside a Regular Function
    // function show() {
    //     console.log(this);
    // }

    // show();         //window

    // "use strict";

    // function show() {
    //     console.log(this);
    // }

    // show(); // undefined

// 3. Inside an Arrow Function
    //Arrow functions do not have their own this. They inherit this from the surrounding scope.
    //     const person = {
    //     name: "Sayan",
    //     greet() {
    //         const arrow = () => {
    //             console.log(this);
    //         };

    //         arrow();
    //     }
    // };

    // person.greet();      //sayan

//4. Inside a Constructor Function
    //Here, this refers to the newly created object.
    //     function Person(name) {
    //     this.name = name;
    // }

    // const p1 = new Person("Sayan");
    // console.log(p1.name);

// 5. In Event Listeners
    //Here, this refers to the button that triggered the event.
    //     const btn = document.querySelector("button");

    // btn.addEventListener("click", function() {
    //     console.log(this);
    // });