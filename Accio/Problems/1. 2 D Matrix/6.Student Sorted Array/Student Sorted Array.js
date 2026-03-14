const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});

/*
  Function: sortStudents
  Purpose:
  1. Extract student names from the given array.
  2. Remove spaces from each name.
  3. Sort the processed names lexicographically.
  4. Return the result in JSON string format.
*/

function sortStudents(arr) {

    let names = [];

    // Step 1: Extract student names and remove spaces
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i][0].replace(/\s/g, "");
        names.push(name);
    }

    // Step 2: Sort the names lexicographically
    names.sort();

    // Step 3: Return the result in JSON format
    return JSON.stringify(names);
}

readline.question("", (input) => {

    // Convert input string into array
    const arr = JSON.parse(input);

    // Print sorted result
    console.log(sortStudents(arr));

    readline.close();
});