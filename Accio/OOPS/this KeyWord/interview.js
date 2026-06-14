function interview1() {
    const person = {
        name: "Sayan",
        greet() {
            console.log(this.name);
        }
    };

    const fn = person.greet;
    fn();   ////connextions is lost for the main function -> "Undefined"
    // When fn() is called, it's just a regular function call. The connection with person is lost, so this is not person.

    person.greet(); //"Sayan"
}
// interview1();

function interview2() {
    const person = {
        name: "Sayan",
        greet: () => {
            console.log(this.name);
        }
    };

    person.greet(); //undefined
    // Arrow functions don't create their own this. They inherit it from the outer scope.
}
// interview2();

function interview3() {
    const obj = {
        name: "JavaScript",
        show() {
            console.log(this.name);
        }
    };

    obj.show();
}
// interview3();

function interview4() {
    const obj = {
        name: "JS",
        show() {
            return function () {
                console.log(this.name);
            };
        }
    };

    obj.show()();
    //The returned function is executed as a normal function.
}
// interview4();

function interview5() {
    const obj = {
        name: "JS",
        show() {
            return () => {
                console.log(this.name);
            };
        }
    };

    obj.show()();
    // The arrow function captures this from show().
}
// interview5();

function interview6() {
    function Person(name) {
        this.name = name;

        return {
            name: "React"
        };
    }

    const p = new Person("Sayan");
    console.log(p.name);
    //If a constructor explicitly returns an object, that object becomes the result of new.
}
// interview6();

function interview7() {
    var name = "Global";

    const obj = {
        name: "Object",
        print() {
            console.log(this.name);
        }
    };

    obj.print();
    // this refers to the object that called the method.
}
// interview7();

function interview8() {
    var name = "Global";

    const obj = {
        name: "Object",
        print: function () {
            console.log(this.name);
        }
    };

    const another = {
        name: "Another"
    };

    another.print = obj.print;
    another.print();
    // The caller object determines this.
}
// interview8();

function interview9() {
    function show() {
        console.log(this);
    }

    show.call({ name: "Sayan" });
}
// interview9();

function interview10() {
    const obj = {
        value: 10,
        regular() {
            console.log(this.value);
        },
        arrow: () => {
            console.log(this.value);
        }
    };

    obj.regular();
    obj.arrow();
}
// interview10();