function set() {
    let st = new Set();

    // add elements
    st.add(2);
    st.add(5);
    st.add(7);

    console.log(st.size);   //size of set

    st.add(7);
    console.log(st.size);


    st.add("Rahul");

    if (st.has("Rahul")) {
        console.log("Present");
    }
    else {
        console.log("Absent");
    }

    // check the presence of an element in set
    if (st.has("Rohit")) {
        console.log("Present");
    }
    else {
        console.log("Absent");
    }

    st.delete("Rahul");     //deleting an element from set
    console.log("After deleting rahul");
    if (st.has("Rahul")) {
        console.log("Present");
    }
    else {
        console.log("Absent");
    }

    for (let x of st) { //iterating over set
        console.log(x);
    }

    st.clear();     //clear the set

    console.log("After clear");
    for (let x of st) {
        console.log(x);
    }

    console.log("Cleared");
}

function learn() {  //put the unique elements of an array in a set
    let st = new Set();
    let arr = [1, 2, 6, 3, 4, 5, 6];
    for (let i = 0; i < arr.length; i++) {
        st.add(arr[i]);
    }
    return st;
}

console.log(set());
console.log(learn());
