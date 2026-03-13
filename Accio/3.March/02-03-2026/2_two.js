//you have to return the count of a givent name in list of people
let people = ["rahul", "sayan", "rahul", "sayan", "rahul", "sayan"];
let person = "sayan";
function countName(arr, name) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === name) {
            count++;
        }
    }
    return count;
}
console.log(countName(people, person));