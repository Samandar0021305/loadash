Custom Lodash-like Utility Functions
This project provides a set of utility functions that replicate some common methods found in the Lodash library. These functions aim to simplify everyday tasks such as cloning objects, deep merging arrays, and handling collections, but without requiring a full Lodash library.

Functions
Here is a brief description of each function included in this package:

1. cloneDeep(value)
   Description: Creates a deep copy of a value, including deeply nested objects and arrays.

Parameters:

value: The value to deep clone.
Returns: A deep copy of the given value.

Usage:

```javascript
import { deepClone } from "sloadash"
const deepClone = cloneDeep({ a: { b: 1 } });
console.log(deepClone); // { a: { b: 1 } } 2. once(func)
Description: Creates a function that will execute func only once, no matter how many times it's called.
```

Parameters:

func: The function to execute once.
Returns: A new function that will only invoke func once.

Usage:

```javascript
import { once } from "sloadash"
const logOnce = once(() => console.log("Executed"));
logOnce(); // Executed
logOnce(); // No output 3. get(object, path, defaultValue)
Description: Accesses the value at path of object. If the value is undefined, it returns the defaultValue.

```

Parameters:

object: The object to query.
path: The path to the value (as a string or an array).
defaultValue: The default value to return if the path doesn't exist.
Returns: The value at the specified path, or defaultValue if the path is invalid.

Usage:

```javascript
import { get } from "sloadash"

const obj = { a: { b: 1 } };
console.log(get(obj, 'a.b', 0)); // 1
console.log(get(obj, 'a.c', 0)); // 0 4. concat(arr, ...args)
Description: Concatenates multiple arrays or values into the first array.
```

Parameters:

arr: The initial array.
...args: Additional arrays or values to concatenate.
Returns: The concatenated array.

Usage:
```javascript
import { concat } from "sloadash"

const arr = [1, 2];
console.log(concat(arr, [3, 4], 5)); // [1, 2, 3, 4, 5]
```

5. difference(arr, ...args)
   Description: Creates an array of values from the first array that are not present in any of the other arrays.

Parameters:

arr: The initial array.
...args: Additional arrays to compare against.
Returns: An array of values that exist in arr but not in any of the other arrays.

Usage:
```javascript
import { difference } from "sloadash"
const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5];
console.log(difference(arr1, arr2)); // [1, 2]
```

`` 6. drop(arr, n = 1)
Description: Removes the first n elements from the array.

Parameters:

arr: The array to modify.
n: The number of elements to remove from the start (default is 1).
Returns: The array with the first n elements removed.

Usage:

```javascript
import { drop } from "sloadash"
const arr = [1, 2, 3, 4];
console.log(drop(arr, 2)); // [3, 4] 7. fill(arr, value, start = 0, end = arr.length)
Description: Fills the elements of an array with a specific value between start and end indices.
```

Parameters:

arr: The array to modify.
value: The value to fill the array with.
start: The start index.
end: The end index.
Returns: The modified array.

Usage:


```javascript
import { fill } from "sloadash"
const arr = [1, 2, 3, 4];
console.log(fill(arr, 0, 1, 3)); // [1, 0, 0, 4] 8. flattenDeep(arr)
Description: Flattens a nested array recursively.
```

Parameters:

arr: The array to flatten.
Returns: A new array with all nested arrays flattened.

Usage:

```javascript
import { flattenDeep } from "sloadash"
const arr = [1, [2, [3, [4]]]];
console.log(flattenDeep(arr)); // [1, 2, 3, 4] 9. head(arr)
Description: Returns the first element of an array.
```

Parameters:

arr: The array to query.
Returns: The first element of the array, or undefined if the array is empty.

Usage:

```javascript
import { head } from "sloadash"
const arr = [1, 2, 3];
console.log(head(arr)); // 1 10. initial(arr)
Description: Returns all elements of an array except the last one.
```

Parameters:

arr: The array to query.
Returns: An array with all elements except the last.

Usage:

```javascript
import { initial } from "sloadash"
const arr = [1, 2, 3];
console.log(initial(arr)); // [1, 2] 11. intersection(...args)
Description: Creates an array of values that are present in all given arrays.
```

Parameters:

...args: The arrays to compare.
Returns: An array of values that are present in all arrays.

Usage:

```javascript
import { intersection } from "sloadash"
console.log(intersection([1, 2, 3], [2, 3, 4], [3, 2])); // [2, 3] 12. join(arr, separator = ',')
Description: Joins all elements of an array into a string with a specified separator.
```

Parameters:

arr: The array to join.
separator: The string separator (default is ,).
Returns: A string with all elements joined by the separator.

Usage:
```javascript
import { join } from "sloadash"
const arr = [1, 2, 3];
console.log(join(arr, '-')); // "1-2-3"
Installation
To use these utility functions, you can install them via npm:

```
bash
Copy code
npm install lodash-utils
Or include them in your project directly by copying the files.

Usage
Once installed, you can use the functions like this:


```javascript
import { cloneDeep } from "sloadash"
const arr = [1, 2, 3, 4];
const newArr = cloneDeep(arr);
console.log(newArr); // [1, 2, 3, 4]

```
Contribution
Feel free to open issues or submit pull requests if you'd like to add more utility functions or improve existing ones.


This is a basic overview of the functions in this project. It gives users a clear understanding of what each function does, how to use them, and some practical examples to make the integration smoother.
