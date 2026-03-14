# Approach: Maximum in 2D Array (JS)

## Idea
Scan every element of the 2D array and keep track of the largest value seen so far.

## Steps
1. Initialize `max` to `-Infinity` so any real array value can replace it.
2. Traverse each row using outer loop `i`.
3. Traverse each element in the current row using inner loop `j`.
4. If `array[i][j] > max`, update `max`.
5. After visiting all elements, return `max`.

## Why this works
- Every element in the matrix is checked exactly once.
- `max` is updated only when a bigger value is found.
- At the end, `max` is the greatest among all elements.

## Complexity
- Time: O(r * c), where `r` is number of rows and `c` is average columns per row.
- Space: O(1), because only one extra variable (`max`) is used.

## Edge Note
Using `-Infinity` correctly handles arrays containing negative numbers as well.
