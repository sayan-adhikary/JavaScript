# Spiral Matrix 2 - Approach

## Idea
We print the matrix in spiral order using **four boundaries**:
- `fr` -> first row
- `lr` -> last row
- `fc` -> first column
- `lc` -> last column

At every step, we print one outer "ring" and then shrink the boundaries inward.

## Traversal Order Used in Code
For each layer, the code prints in this order:
1. **Top to Bottom** on the current first column (`fc`)
2. **Left to Right** on the current last row (`lr`)
3. **Bottom to Top** on the current last column (`lc`) (only if `fc <= lc`)
4. **Right to Left** on the current first row (`fr`) (only if `fr <= lr`)

Then boundaries are updated:
- `fc++`
- `lr--`
- `lc--`
- `fr++`

The loop continues while `fr <= lr` and `fc <= lc`.

## Why Boundary Checks Are Needed
When rows or columns collapse (especially in odd-sized dimensions), some sides may already be consumed.
The checks:
- `if (fc <= lc)`
- `if (fr <= lr)`
prevent duplicate printing.

## Complexity
- **Time Complexity:** `O(R * C)` because every element is visited exactly once.
- **Space Complexity:** `O(1)` extra space (excluding output string).

## Notes for Input Handling
The solution reads:
1. Number of test cases
2. For each test case: `R C`
3. Next `R` lines as matrix rows

For each test case, it prints one spiral traversal line.
