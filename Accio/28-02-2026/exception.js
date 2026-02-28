let a = [1,2,3,4,5];
console.log(a.length);  // Output: 5
a[10] = 11;             // This will create empty slots from index 5 to 9
console.log(a.length);  // Output: 11, because the length property counts the highest index + 1, even if there are empty slots
console.log(a);         // Output: [1, 2, 3, 4, 5, <5 empty items>, 11]
