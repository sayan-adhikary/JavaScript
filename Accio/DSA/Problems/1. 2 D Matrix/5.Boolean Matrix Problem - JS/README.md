# Boolean Matrix Problem - Approach

## Problem idea
Given an `m x n` matrix containing only `0` and `1`, if any cell `mat[i][j]` is `1`, then in the final matrix:
- Entire row `i` should become `1`
- Entire column `j` should become `1`

## Efficient approach
Do it in two passes using marker arrays:

1. Create two arrays:
- `rowHasOne` of size `m` (all false initially)
- `colHasOne` of size `n` (all false initially)

2. First pass over matrix:
- For every cell `(i, j)`, if `mat[i][j] == 1`, mark:
  - `rowHasOne[i] = true`
  - `colHasOne[j] = true`

3. Second pass over matrix:
- For every cell `(i, j)`, if `rowHasOne[i]` OR `colHasOne[j]` is true, set `mat[i][j] = 1`

4. Return/print the modified matrix.

## Why this works
- First pass remembers exactly which rows and columns must become `1`.
- Second pass applies that rule to every cell.
- We avoid changing values too early, so new `1`s do not incorrectly affect later decisions.

## Complexity
- Time: `O(m * n)`
- Extra Space: `O(m + n)`

## Pseudocode
```text
rowHasOne = [false] * m
colHasOne = [false] * n

for i in 0..m-1:
    for j in 0..n-1:
        if mat[i][j] == 1:
            rowHasOne[i] = true
            colHasOne[j] = true

for i in 0..m-1:
    for j in 0..n-1:
        if rowHasOne[i] or colHasOne[j]:
            mat[i][j] = 1
```
