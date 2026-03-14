# Unique Categories

## Problem

Given a 2D array where each sub-array contains an item and its category, find and return all **unique categories** in the order they first appear.

## Example

**Input:**
```
[["apple","fruit"],["banana","fruit"],["carrot","vegetable"],["mango","fruit"]]
```

**Output:**
```
fruit vegetable
```

## Approach

1. **Initialize an empty array** (`store`) to keep track of unique categories seen so far.
2. **Iterate** through each sub-array in the input 2D array.
3. For each sub-array, **extract the second element** (index `1`), which represents the category.
4. **Check** if the category already exists in `store` using `Array.includes()`.
5. If it does **not** exist, **push** it into `store`.
6. After iterating through all sub-arrays, **return** `store`, which now contains only unique categories in first-appearance order.

## Complexity

| | Complexity |
|---|---|
| **Time** | O(n²) — for each element, `includes()` performs a linear scan of `store` |
| **Space** | O(k) — where `k` is the number of unique categories |

## Code

```js
function uniqueCategories(arr) {
    let store = [];
    for (let i = 0; i < arr.length; i++) {
        if (!store.includes(arr[i][1])) {
            store.push(arr[i][1]);
        }
    }
    return store;
}
```
