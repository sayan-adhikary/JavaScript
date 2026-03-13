function map() {
    let mp = new Map();

    // add/insert/push into maps
    mp.set(1, 17);
    mp.set("1", 10);
    mp.set("Rahul", "Chennai");

    console.log(mp.size);


    // access the elements
    let a = mp.get("Rahul");
    let b = mp.get(1);
    let c = mp.get("1");

    console.log(a, b, c);

    // check the key is present or not
    // has
    if (mp.has("Shivam")) {
        console.log("Shivam present");
    }
    else {
        console.log("Shivam Absent");
    }

    // delete
    mp.delete("Rahul");

    if (mp.has("Rahul")) {
        console.log("Rahul Present");
    }
    else {
        console.log("Rahul Absent")
    }

    mp.set("Shivam", "Delhi");
    mp.set("Sayan", "Bengal");
    mp.set(4, 5);
    mp.set("Sayan", "chennai");
    
    // iterate over my map
    for (let [key, val] of mp) {
        // console.log(key,val);
    }

    // want to make my map empty
    mp.clear();
    console.log("After clear");
    for (let [key, val] of mp) {
        console.log(key, val);
    }
}

function learn() {
    let alphabet = new Map();

    for (let i = 0; i < 26; i++) {
        alphabet.set(String.fromCharCode(97 + i), i + 1);
    }
    console.log(alphabet);
}

// learn();
map();