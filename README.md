Custom Lodash-like Utility Functions
This project provides a set of utility functions that replicate some common methods found in the Lodash library. These functions aim to simplify everyday tasks such as cloning objects, deep merging arrays, and handling collections, but without requiring a full Lodash library.

Functions
Here is a brief description of each function included in this package:

## Functions

| Function Name    | Description                                                                                                         | Example Usage                                        |
|------------------|---------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|
| `cloneDeep`      | Deeply clones an object or array, ensuring all nested properties are copied.                                        | `cloneDeep({a: {b: 1}});`                           |
| `once`           | Returns a function that is only invoked once, no matter how many times it is called.                               | `const func = once(() => console.log('Called'));`   |
| `get`            | Retrieves the value at a given path of an object, safely handling undefined paths.                                  | `get(obj, 'a.b.c');`                                |
| `concat`         | Concatenates multiple arrays into a single array.                                                                  | `concat([1, 2], [3, 4]);`                           |
| `difference`     | Returns an array of values that are present in the first array but not in the subsequent arrays.                    | `difference([1, 2, 3], [3, 4]);`                    |
| `drop`           | Returns a new array with the first `n` elements removed.                                                             | `drop([1, 2, 3], 2);`                               |
| `fill`           | Fills an array with a specific value between `start` and `end` indexes.                                             | `fill([1, 2, 3], 0, 2);`                            |
| `flattenDeep`    | Flattens a deeply nested array into a single level array.                                                            | `flattenDeep([1, [2, [3, [4]]]]);`                  |
| `head`           | Returns the first element of an array.                                                                             | `head([1, 2, 3]);`                                  |
| `initial`        | Returns a new array excluding the last element.                                                                    | `initial([1, 2, 3]);`                               |
| `intersection`   | Returns an array of values that are present in all provided arrays.                                                 | `intersection([1, 2], [2, 3]);`                     |
| `join`           | Joins the elements of an array into a string, separated by a specified separator.                                   | `join([1, 2, 3], ',');`                             |
| `findIndex`      | Finds the index of the first element in an array that satisfies the provided predicate function.                   | `findIndex([1, 2, 3], x => x === 2);`               |
| `reverse`        | Reverses the order of the elements in an array.                                                                    | `reverse([1, 2, 3]);`                               |
| `tail`           | Returns a new array excluding the first element.                                                                   | `tail([1, 2, 3]);`                                  |
| `union`          | Combines multiple arrays into a single array, removing duplicate elements.                                         | `union([1, 2], [2, 3], [3, 4]);`                    |
| `pull`           | Removes all instances of the given values from an array.                                                           | `pull([1, 2, 3, 4, 5], 2, 4);`                      |