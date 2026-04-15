# Approach: Sum of 2D Array Elements (JS)

## Idea
We need the sum of all elements in a 2D matrix. The simplest way is to visit every cell once and keep adding values to a running total.

## Steps
1. Initialize `sum = 0`.
2. Loop through each row index `i` from `0` to `n - 1`.
3. Inside that, loop through each column index `j` from `0` to `m - 1`.
4. Add `arr[i][j]` to `sum`.
5. After both loops finish, return `sum`.

## Why this works
- The nested loops cover every valid position in the matrix exactly once.
- Since each element is added once, the final `sum` is the total of all matrix elements.

## Complexity
- Time: O(n * m), because every element is visited once.
- Space: O(1), ignoring input storage, because only a single accumulator variable is used.
