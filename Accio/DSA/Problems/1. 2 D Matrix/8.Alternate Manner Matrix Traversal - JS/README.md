# Alternate Manner Matrix Traversal

## Problem Statement

Given a 2D matrix of size `m x n`, traverse and print all its elements in an **alternating (zigzag) manner**:
- Traverse **left to right** for even-indexed rows (0, 2, 4, ...)
- Traverse **right to left** for odd-indexed rows (1, 3, 5, ...)

---

## Approach

### Key Idea
Use two pointers/indices to simulate a zigzag traversal across rows:
- A `start` pointer tracks the current row.
- `left` and `right` pointers define the column boundaries (`0` to `n`).

### Steps

1. **Initialize** `start = 0`, `left = 0`, `right = n`.
2. **Loop** while `start < m` (i.e., while there are rows remaining):
   - **Forward pass (left → right):** Iterate columns from `left` to `right - 1` for `mat[start]`, then increment `start`.
   - **Check** if `start >= m` — if so, break (no more rows).
   - **Backward pass (right → left):** Iterate columns from `right - 1` down to `left` for `mat[start]`, then increment `start`.
3. Collect all elements in a string and print the result.

### Illustration

For a 3×3 matrix:
```
1 2 3
4 5 6
7 8 9
```
- Row 0 (left → right): `1 2 3`
- Row 1 (right → left): `6 5 4`
- Row 2 (left → right): `7 8 9`

Output: `1 2 3 6 5 4 7 8 9`

---

## Complexity

| | Complexity |
|---|---|
| **Time** | O(m × n) — every element is visited exactly once |
| **Space** | O(1) — no extra data structures used (excluding output string) |

---

## Example

**Input:**
```
3 3
1 2 3
4 5 6
7 8 9
```

**Output:**
```
1 2 3 6 5 4 7 8 9
```
