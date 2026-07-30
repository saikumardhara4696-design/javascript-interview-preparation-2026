// Let's understand javascript array functions and how to use them.

// 1. Array.map()
// Returns a new array with the results of calling a provided function on every element in this array.
// Code
const list = [1, 2, 3, 4];
list.map((el) => el * 2); // [2, 4, 6, 8]

// 2. Array.filter()
// Returns a new array with all elements that pass the test implemented by the provided function.
// Code
const list = [1, 2, 3, 4];
list.filter((el) => el % 2 === 0); // [2, 4]

// 3. Array.reduce()
// Reduce the array to a single value.The value returned by the function is stored in an accumulator(result / total).
const list = [1, 2, 3, 4, 5];
list.reduce((total, item) => total + item, 0); // 15

// 4.Array.reduceRight()
// Executes a reducer function (that you provide) on each element of the array resulting in a single output value(from right to left).
// Code
const list = [1, 2, 3, 4, 5];
list.reduceRight((total, item) => total + item, 0); // 15

// 5. Array.fill()
// Fill the elements in an array with a static value.
// Code
const list = [1, 2, 3, 4, 5];
list.fill(0); // [0, 0, 0, 0, 0]

// 6.Array.find()
// Returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.
// Code
const list = [1, 2, 3, 4, 5];
list.find((el) => el === 3); // 3
list.find((el) => el === 6); // undefined

// 7.Array.indexOf()
// Returns the first index at which a given element can be found in the array, or - 1 if it is not present.
// Code
const list = [1, 2, 3, 4, 5];
list.indexOf(3); // 2
list.indexOf(6); // -1

// 8. Array.lastIndexOf()
// Returns the last index at which a given element can be found in the array, or - 1 if it is not present.The array is searched backwards, starting at fromIndex.
// Code
const list = [1, 2, 3, 4, 5];
list.lastIndexOf(3); // 2
list.lastIndexOf(3, 1); // -1

// 9. Array.findIndex()
// Returns the index of the first element in the array that satisfies the provided testing function.Otherwise - 1 is returned.
// You might be thinking how it's different from `indexOf` 🤔
const array = [5, 12, 8, 130, 44];
array.findIndex((element) => element > 13); // 3

// 10.Array.includes()
// Returns true if the given element is present in the array.
// Code
const list = [1, 2, 3, 4, 5];
list.includes(3); // true
list.includes(6); // false

// 11.Array.pop()
// Removes the last element from an array and returns that element.
// Code
const list = [1, 2, 3, 4, 5];
list.pop(); // 5
list; // [1, 2, 3, 4]

// 12.Array.push()
// Appends new elements to the end of an array, and returns the new length.
// Code
const list = [1, 2, 3, 4, 5];
list.push(6); // 6
list; // [1, 2, 3, 4, 5, 6]

// 13.Array.shift()
// Removes the first element from an array and returns that element.
// Code
const list = [1, 2, 3, 4, 5];
list.shift(); // 1
list; // [2, 3, 4, 5]

// 14.Array.unshift()
// Adds new elements to the beginning of an array, and returns the new length.
// Code
const list = [1, 2, 3, 4, 5];
list.unshift(0); // 6
list; // [0, 1, 2, 3, 4, 5]

// 15.Array.splice()
// Changes the contents of an array by removing or replacing existing elements and / or adding new elements in place.
// Code
const list = [1, 2, 3, 4, 5];
list.splice(1, 2); // [2, 3]
list; // [1, 4, 5]

// 16.Array.slice()
// Returns a shallow copy of a portion of an array into a new array object selected from begin to end(end not included).The original array will not be modified.
// Code
const list = [1, 2, 3, 4, 5];
list.slice(1, 3); // [2, 3]
list; // [1, 2, 3, 4, 5]

// 17.Array.join()
// Joins all elements of an array into a string.
// Code
const list = [1, 2, 3, 4, 5];
list.join(', '); // "1, 2, 3, 4, 5"

// 18.Array.reverse()
// Reverses the order of the elements in an array.
// Code
const list = [1, 2, 3, 4, 5];
list.reverse(); // [5, 4, 3, 2, 1]
list; // [5, 4, 3, 2, 1]

// 19.Array.sort()
// Sorts the elements of an array in place and returns the array.The default sort order is according to string Unicode code points.

const array = ['D', 'B', 'A', 'C'];
array.sort(); // 😀 ['A', 'B', 'C', 'D']

// OR
const array = [4, 1, 3, 2, 10];
array.sort(); // 😧 [1, 10, 2, 3, 4]
array.sort((a, b) => a - b); // 😀 [1, 2, 3, 4, 10]

// 20. Array.some()
// Returns true if at least one element in the array passes the test implemented by the provided function.
// Code
const list = [1, 2, 3, 4, 5];
list.some((el) => el === 3); // true
list.some((el) => el === 6); // false

// 21.Array.every()
// Returns true if all elements in the array pass the test implemented by the provided function.
// Code
const list = [1, 2, 3, 4, 5];
list.every((el) => el === 3); // false

const list = [2, 4, 6, 8, 10];
list.every((el) => el % 2 === 0); // true
// 22.Array.from()
// Creates a new array from an array - like or iterable object.
const range = (n) => Array.from({ length: n }, (_, i) => i + 1);
console.log(range(10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 23. Array.of()
// Creates a new array with a variable number of arguments, regardless of number or type of the arguments.
// Code
const list = Array.of(1, 2, 3, 4, 5);
list; // [1, 2, 3, 4, 5]

// 24. Array.isArray()
// Returns true if the given value is an array.

// Code
Array.isArray([1, 2, 3, 4, 5]); // true
Array.isArray(5); // false

// 25. Array.at()
// Returns a value at the specified index.
// Code
const list = [1, 2, 3, 4, 5];
list.at(1); // 2
list.at(-1); // 5
list.at(-2); // 4

//  26.Array.copyWithin()
// Copies array elements within the array.Returns the modified array.
// Code
const list = [1, 2, 3, 4, 5];
list.copyWithin(0, 3, 4); // [4, 2, 3, 4, 5]

// first argument is the target at which to start copying elements from.
// second argument is the index at which to start copying elements from.
// third argument is the index at which to stop copying elements from.

// 27. Array.flat()
// Returns a new array with all sub - array elements concatenated into it recursively up to the specified depth.
// Code
const list = [1, 2, [3, 4, [5, 6]]];
list.flat(Infinity); // [1, 2, 3, 4, 5, 6]

// 28.Array.flatMap()
// Returns a new array formed by applying a given callback function to each element of the array,
// Code
const list = [1, 2, 3];
list.flatMap((el) => [el, el * el]); // [1, 1, 2, 4, 3, 9]



// Here's a JavaScript Array Cheat Sheet for interviews and LeetCode. Since you've been practicing without built -in methods, I've included both approaches where useful.

// 1. Add an Element
// ✅ Using methods
// let arr = [1, 2, 3];

// arr.push(4);        // End
//  [1,2,3,4]

// arr.unshift(0);     // Beginning
//  [0,1,2,3,4]
// ✅ Without methods
// let arr = [1, 2, 3];

// arr[arr.length] = 4;

// console.log(arr);
//  [1,2,3,4]
// 2. Remove Last Element
// Using method
// arr.pop();
// Without method
// arr.length = arr.length - 1;
// 3. Remove First Element
// Using method
// arr.shift();
// Without methods
// let arr = [1, 2, 3, 4];

// for (let i = 0; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }

// arr.length--;

// console.log(arr);
// // [2,3,4]
// 4. Remove Element by Index

// Example: Remove index = 2

// let arr = [10, 20, 30, 40, 50];

// let index = 2;

// for (let i = index; i < arr.length - 1; i++) {
//     arr[i] = arr[i + 1];
// }

// arr.length--;

// console.log(arr);
//  [10,20,40,50]
// 5. Remove Duplicates
// Method 1(Best using Set)
// let arr = [1, 1, 2, 2, 3];

// let ans = [...new Set(arr)];

// console.log(ans);
// // [1,2,3]
// Method 2(Without Set)
// let arr = [1, 1, 2, 2, 3];

// let result = [];

// for (let i = 0; i < arr.length; i++) {

//     let found = false;

//     for (let j = 0; j < result.length; j++) {

//         if (arr[i] == result[j]) {
//             found = true;
//             break;
//         }

//     }

//     if (!found) {
//         result[result.length] = arr[i];
//     }

// }

// console.log(result);
// 6. Remove Duplicate(Sorted Array) ⭐ LeetCode 26
// let nums = [1, 1, 2, 2, 3];

// let k = 1;

// for (let i = 1; i < nums.length; i++) {

//     if (nums[i] != nums[k - 1]) {
//         nums[k] = nums[i];
//         k++;
//     }

// }

// console.log(k);
// console.log(nums);

// Output

// k = 3

// nums = [1, 2, 3, 2, 3]

// First k elements are unique.

// 7. Insert Element at Index

// Insert 25 at index 2

// let arr = [10, 20, 30, 40];

// let index = 2;
// let value = 25;

// for (let i = arr.length; i > index; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[index] = value;

// console.log(arr);

// Output

// [10, 20, 25, 30, 40]
// 8. Find an Element
// let arr = [5, 10, 15];

// let target = 10;

// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] == target) {
//         console.log(i);
//     }

// }
// 9. Count Duplicates
// let arr = [1, 1, 2, 3, 3, 3];

// let count = {};

// for (let num of arr) {

//     if (count[num]) {
//         count[num]++;
//     } else {
//         count[num] = 1;
//     }

// }

// console.log(count);

// Output

// {
//     1: 2,
//         2: 1,
//             3: 3
// }
// 10. Reverse Array
// Using method
// arr.reverse();
// Without methods
// let arr = [1, 2, 3, 4];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {

//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
// }

// console.log(arr);
// 11. Copy an Array
// let copy = [...arr];

// Without methods

// let copy = [];

// for (let i = 0; i < arr.length; i++) {
//     copy[i] = arr[i];
// }
// 12. Merge Two Arrays
// let a = [1, 2];
// let b = [3, 4];

// let c = [...a, ...b];

// Without methods

// let c = [];

// for (let i = 0; i < a.length; i++) {
//     c[c.length] = a[i];
// }

// for (let i = 0; i < b.length; i++) {
//     c[c.length] = b[i];
// }

// console.log(c);
// 13. Rotate Array Right by 1
// let arr = [1, 2, 3, 4];

// let last = arr[arr.length - 1];

// for (let i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1];
// }

// arr[0] = last;

// console.log(arr);
// 14. Find Maximum
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {

//     if (arr[i] > max) {
//         max = arr[i];
//     }

// }

// console.log(max);
// 15. Find Minimum
// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {

//     if (arr[i] < min) {
//         min = arr[i];
//     }

// }

// console.log(min);
// 16. Sum of Array
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log(sum);
// ⭐ Interview Cheat Sheet(Memorize)
// Operation	Time	Common Approach
// Add at end	O(1)	arr[arr.length] = value / push()
// Add at beginning	O(n)	Shift right then insert
// Remove last	O(1)	length-- / pop()
// Remove first	O(n)	Shift left
// Remove by index	O(n)	Shift left from index
// Insert by index	O(n)	Shift right from end
// Find element	O(n)	Linear search
// Remove duplicates(unsorted)	O(n²) / O(n)	Nested loops or Set
// Remove duplicates(sorted)	O(n)	Two pointers
// Reverse array	O(n)	Two pointers
// Max / Min	O(n)	Single pass
// Sum	O(n)	Single pass

// This covers the array operations that appear most frequently in JavaScript coding interviews and LeetCode problems.