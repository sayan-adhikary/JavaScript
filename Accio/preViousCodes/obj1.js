// input = [1, 2, 3, 4, 1, 2, 3, 1, 1, 2]
// output:
// 1 repetaed 4 times
// 2 repeated 3 times
// 3 repeated 2 times
// 4 repeated 1 times
const input = [1, 2, 3, 4, 1, 2, 3, 1, 1, 2, 4];
// function add(input) {
  const frequence = {}
//   for (const key of input) {
//     let val = frequency[key];
//     if (val === undefined) {
//       val = 0;
//     }
//     frequency[key] = val + 1;
//   }
//   console.log(frequency);
// }
  // for (let i = 0; i < input.length; i++) {
  //   console.log(`${input[i]} repetaed ${values[i]} times`);
  // }
//   for (let entry of entries) {
//     console.log(`${entry[0]} repetaed ${entry[1]} times`);
//   }
// }
// add(input);


for (let ele of input) {                              //const frequence = new Object();
    frequence[ele] = (frequence[ele] || 0) + 1;     //[1, 2, 3, 4, 1, 2, 3, 1, 1, 2, 4];
}
console.log(frequence)                            //{"1": 1,"2": ,"3": ,"4": ,}