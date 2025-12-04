# Recursion Exercises — Project Overview

This repository contains solutions for several classic recursion and algorithm exercises, including iterative and recursive Fibonacci implementations and a full recursive merge sort. The goal of the project is to practice problem-solving using both iterative logic and recursive thinking.

## Features

### Generate Fibonacci Numbers
- Implements `fibs(n)` using iteration.
  - Returns an array of the first `n` Fibonacci numbers.
  - Example: `fibs(8)` produces `[0, 1, 1, 2, 3, 5, 8, 13]`.

- Implements `fibsRec(n)` using recursion.
  - Solves the same problem by repeatedly delegating work to calls of the same function.
  - Includes optional logging to demonstrate recursive depth:
    ```js
    console.log("This was printed recursively");
    ```
  - Calling `fibsRec(8)` prints the log multiple times, matching the recursive call count.

- Both versions can be tested by passing different lengths to verify correctness and performance.

### Recursive Merge Sort
- Implements `mergeSort(array)` using the divide-and-conquer approach.
- Behavior:
  - Splits the array into halves recursively.
  - Sorts each half.
  - Merges sorted halves into a final sorted array.
- Handles all edge cases:
  - Empty array → `[]`
  - Single element → `[value]`
  - Already-sorted arrays
  - Arrays with repeated or mixed values
- Test examples include:
  - `mergeSort([]) → []`
  - `mergeSort([73]) → [73]`
  - `mergeSort([1, 2, 3, 4, 5]) → [1, 2, 3, 4, 5]`
  - `mergeSort([3, 2, 1, 13, 8, 5, 0, 1]) → [0, 1, 1, 2, 3, 5, 8, 13]`
  - `mergeSort([105, 79, 100, 110]) → [79, 100, 105, 110]`

### Learning Focus
- Reinforces understanding of:
  - Base cases in recursive functions
  - How work is delegated to smaller subproblems
  - How merge sort uses splitting + merging as core behavior

## Notes
- All algorithms are implemented in plain JavaScript.
- Each function is separated into its own module/file for clarity.
- Logging in the recursive Fibonacci function helps illustrate the call structure when tested with `fibsRec(8)`.

## License
MIT License.
