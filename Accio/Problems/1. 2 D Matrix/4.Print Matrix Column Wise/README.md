# Approach: Print Matrix Column Wise

For each test case:

1. Read `n` (rows) and `m` (columns).
2. Read the matrix of size `n x m`.
3. Traverse column by column:
   - Outer loop runs from `0` to `m - 1` (columns).
   - Inner loop runs from `0` to `n - 1` (rows).
   - Print `mat[row][col]` in that order.
4. Build the output in a string and print once.

This traversal order gives column-wise output:
- First all elements of column 0
- Then all elements of column 1
- ... up to column `m - 1`

## Why this works

A matrix element at row `r` and column `c` is `mat[r][c]`.
To print column-wise, we must keep `c` fixed and move `r` from top to bottom.
Then move to the next `c`.
That is exactly what nested loops (`for col`, then `for row`) do.

## Time Complexity

- We visit each element exactly once: `O(n * m)`.

## Space Complexity

- Extra string used for output (excluding input storage): `O(n * m)` characters in worst case.
- If printed directly instead of building a string, extra space would be `O(1)`.
