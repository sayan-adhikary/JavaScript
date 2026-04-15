# Array Sort

This folder contains a basic sorting implementation in JavaScript using **Selection Sort**.

## File
- `1. Array Sort.js`

## Description
The code sorts an array of numbers in ascending order using the selection sort algorithm.

## Approach (Selection Sort)
1. Iterate through the array from index `0` to `n-2`.
2. For each index `i`, assume the smallest element is at `i` (`minIdx = i`).
3. Scan the sub-array from `i+1` to end to find the actual minimum value and update `minIdx`.
4. If the minimum is not at position `i`, swap `arr[i]` and `arr[minIdx]`.
5. Continue until the array is fully sorted.

## Time complexity
- Worst-case: O(n²)
- Best-case: O(n²)
- Average-case: O(n²)

## Space complexity
- O(1) (in-place sorting)

## Example
Input: `[64, 25, 12, 22, 11]`
Output: `[11, 12, 22, 25, 64]`
