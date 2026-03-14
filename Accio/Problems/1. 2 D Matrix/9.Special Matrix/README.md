# Special Matrix

## Problem Statement

Given an `n x n` matrix, determine whether it is a **Special Matrix** or not.

A matrix is considered **special** if:
- All elements on the **main diagonal** (where `row == col`) are **non-zero**.
- All elements on the **anti-diagonal** (where `row + col == n - 1`) are **non-zero**.
- All **other elements** (not on either diagonal) are **zero**.

---

## Approach

### Key Observations

1. For an `n x n` matrix:
   - **Main diagonal** positions satisfy: `i == j`
   - **Anti-diagonal** positions satisfy: `i + j == n - 1`
   - These two diagonals may **overlap** at the center when `n` is odd (at index `(n/2, n/2)`).

2. The matrix is special **only if**:
   - Every cell on the main or anti-diagonal has a **non-zero** value.
   - Every cell **not** on either diagonal has a value of **exactly zero**.

### Algorithm

1. Iterate over every cell `(i, j)` of the matrix.
2. If the cell lies on the **main diagonal** (`i == j`) or the **anti-diagonal** (`i + j == n - 1`):
   - Check if the value is **non-zero**. If it is `0`, return `false`.
3. If the cell is **not** on either diagonal:
   - Check if the value is **zero**. If it is non-zero, return `false`.
4. If all cells pass the checks, return `true`.

### Complexity

| Complexity | Value  |
|------------|--------|
| Time       | O(n²)  |
| Space      | O(1)   |

- **Time:** Every cell is visited exactly once.
- **Space:** No extra data structures are used beyond the input matrix.

---

## Example

### Input
```
Matrix (n = 3):
1 0 1
0 1 0
1 0 1
```

### Check
| Cell     | Diagonal? | Value | Valid? |
|----------|-----------|-------|--------|
| (0,0)    | Main      | 1     | ✓      |
| (0,1)    | Neither   | 0     | ✓      |
| (0,2)    | Anti      | 1     | ✓      |
| (1,0)    | Neither   | 0     | ✓      |
| (1,1)    | Main+Anti | 1     | ✓      |
| (1,2)    | Neither   | 0     | ✓      |
| (2,0)    | Anti      | 1     | ✓      |
| (2,1)    | Neither   | 0     | ✓      |
| (2,2)    | Main      | 1     | ✓      |

### Output
```
true
```
