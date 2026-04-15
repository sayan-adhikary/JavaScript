# Alternate Matrix Sum

## Problem Statement

Given an `n x n` matrix, compute two separate sums:
- **Alternate Sum 1**: Sum of all elements where `(row + column)` index is **even**.
- **Alternate Sum 2**: Sum of all elements where `(row + column)` index is **odd**.

## Approach

1. **Read Input**: Take `n` (size of the matrix) and then read `n` lines, each containing `n` space-separated integers to build the 2D matrix.

2. **Iterate over each cell**: Loop through every element `mat[i][j]` using nested loops.

3. **Check the parity of `(i + j)`**:
   - If `(i + j) % 2 === 0` → the cell is at an **even** position (like a checkerboard's white squares), add it to `diagonalSum`.
   - If `(i + j) % 2 !== 0` → the cell is at an **odd** position (like a checkerboard's black squares), add it to `nonDiaSum`.

4. **Output**: Print `diagonalSum` followed by `nonDiaSum`.

## Example

**Input:**
```
3
1 2 3
4 5 6
7 8 9
```

**Matrix positions (i+j parity):**
```
(0,0)=even  (0,1)=odd   (0,2)=even
(1,0)=odd   (1,1)=even  (1,2)=odd
(2,0)=even  (2,1)=odd   (2,2)=even
```

**Even positions:** 1 + 3 + 5 + 7 + 9 = **25**  
**Odd positions:** 2 + 4 + 6 + 8 = **20**

**Output:**
```
25
20
```

## Complexity

- **Time Complexity**: O(n²) — every element is visited once.
- **Space Complexity**: O(n²) — to store the matrix.
