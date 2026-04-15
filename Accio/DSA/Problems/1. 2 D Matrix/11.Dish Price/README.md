# Dish Price

## Problem Statement

Given a 2D array where each inner array represents a dish, and the third element (index `2`) of each inner array is the price of that dish, calculate and return the **total price** of all dishes.

## Approach

1. **Parse Input:** Read the 2D array from standard input using `JSON.parse`.
2. **Iterate over rows:** Loop through each sub-array (dish) in the 2D matrix.
3. **Accumulate prices:** For each dish, access the element at index `2` (the price) and add it to a running `sum`.
4. **Return the total:** After iterating through all dishes, return the accumulated `sum`.

## Example

**Input:**
```
[[1, "Pasta", 150], [2, "Pizza", 300], [3, "Burger", 120]]
```

**Processing:**
- Dish 1 price: `150`
- Dish 2 price: `300`
- Dish 3 price: `120`
- Total: `150 + 300 + 120 = 570`

**Output:**
```
570
```

## Complexity Analysis

- **Time Complexity:** `O(n)` — where `n` is the number of dishes (rows) in the 2D array.
- **Space Complexity:** `O(1)` — only a single variable `sum` is used for accumulation.
