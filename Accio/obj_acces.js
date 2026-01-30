// Creating an object
const user = {
  name: "Sayan",
  age: 22,
  "role a": "CSE Student"
};

// 1️⃣ Dot notation (static key)
console.log("Dot notation:");
console.log(user.name); // Sayan
console.log(user.age);  // 22
console.log(user["role a"]);    

// console.log("-------------");

// 2️⃣ Bracket notation (static key as string)
// console.log("Bracket notation with string:");
// console.log(user["role"]); // CSE Student

// console.log("-------------");

// 3️⃣ Bracket notation (dynamic key - MOST IMPORTANT)
// const key = "name";

// console.log("Bracket notation with variable:");
// console.log(user[key]); // ✅ Sayan

// console.log("-------------");

// ❌ Common mistake example
// console.log("Common mistake:");
// console.log(user.key); // ❌ undefined
