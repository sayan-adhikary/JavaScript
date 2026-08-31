function outer() {
    let name = "Azmat";

    function inner() {
        console.log(name);
    }

    return inner;
}

const fn = outer();

fn();