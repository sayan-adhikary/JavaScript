# Student Sorted Array

## Approach

The solution processes the given 2D array of students by focusing only on the name stored at index `0` of each inner array. For every student entry, it removes all spaces from the name and stores the cleaned value in a separate array. After collecting all processed names, it sorts them in lexicographical order and returns the final result as a JSON string.

This approach works well because the problem only requires sorted student names, not the full student data. So instead of rearranging the original 2D array, the code extracts the relevant part, normalizes it, sorts it, and prints the result.

## Logic of `sortStudents(arr)`

1. Create an empty array `names` to store processed student names.
2. Traverse the input array `arr` using a loop.
3. For each student record, access the name using `arr[i][0]`.
4. Remove all spaces from that name using `replace(/\s/g, "")`.
5. Push the cleaned name into the `names` array.
6. After the loop ends, sort the `names` array using `names.sort()`.
7. Convert the sorted array into JSON string format using `JSON.stringify(names)`.
8. Return the final string.

## Why spaces are removed

The code uses `replace(/\s/g, "")` to remove every whitespace character from each student name. This ensures that names are compared and sorted without internal or external spaces affecting the order.

## Input and Output Flow

- The input is read as a string.
- `JSON.parse(input)` converts it into a 2D JavaScript array.
- `sortStudents(arr)` processes and sorts the names.
- `console.log(...)` prints the sorted names as a JSON array string.

## Time Complexity

- Extracting and cleaning names takes `O(n * k)`, where `n` is the number of students and `k` is the average length of a name.
- Sorting takes `O(n log n)`.
- Overall complexity is dominated by sorting, so it is `O(n log n)` for typical analysis.

## Space Complexity

The extra space used is `O(n)` because a separate array is created to store the processed names.