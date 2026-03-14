# Approach: Transpose of Matrix (JS)

## Problem Insight
For a matrix transpose, rows and columns are swapped.
If an element is at position `(r, c)` in the original matrix, it moves to `(c, r)` in the transposed matrix.

## Algorithm Used in the Code
1. Create an empty matrix `transpose` with `n` rows.
2. Use two nested loops over all indices `i` and `j` from `0` to `n - 1`.
3. Fill each transposed cell using:
   - `transpose[i][j] = mat[j][i]`
4. Return `transpose`.
5. Print each row of the returned matrix.

## Visualization (Index Mapping)
Original index and transpose mapping:
- `mat[0][1]` -> `transpose[1][0]`
- `mat[2][0]` -> `transpose[0][2]`
- General rule: `mat[r][c]` -> `transpose[c][r]`

### Example
Input matrix:

|   | C0 | C1 | C2 |
|---|----|----|----|
| R0 | 1 | 2 | 3 |
| R1 | 4 | 5 | 6 |
| R2 | 7 | 8 | 9 |

Transposed matrix:

|   | C0 | C1 | C2 |
|---|----|----|----|
| R0 | 1 | 4 | 7 |
| R1 | 2 | 5 | 8 |
| R2 | 3 | 6 | 9 |

### Flow Diagram
```mermaid
flowchart TD
    A[Start] --> B[Read n and n x n matrix]
    B --> C[Create empty transpose matrix]
    C --> D[Loop i from 0 to n-1]
    D --> E[Loop j from 0 to n-1]
    E --> F[Set transpose[i][j] = mat[j][i]]
    F --> E
    E -->|j complete| D
    D -->|i complete| G[Return transpose]
    G --> H[Print transpose row by row]
    H --> I[End]
```

## Correctness Intuition
- Every pair `(i, j)` is visited exactly once.
- The assignment `transpose[i][j] = mat[j][i]` applies the exact transpose rule.
- Therefore, all values are moved to their swapped row-column positions correctly.

## Complexity
- Time: O(n^2), because all `n x n` elements are processed once.
- Space: O(n^2), because a new transposed matrix is created.
