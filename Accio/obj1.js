// input = [1, 2, 3, 4, 1, 2, 3, 1, 1, 2]
// output:
// 1 repetaed 4 times
// 2 repeated 3 times
// 3 repeated 2 times
// 4 repeated 1 times
const input = [1, 2, 3, 4, 1, 2, 3, 1, 1, 2, 4];
function add(input) {
  const frequency = new Object();
  for (const key of input) {
    let val = frequency[key];
    if (val === undefined) {
      val = 0;
    }
    frequency[key] = val + 1;
  }
}
add(input);
