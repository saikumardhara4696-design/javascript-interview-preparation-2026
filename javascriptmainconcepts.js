


// FOR LOOP Concept:-


// 1. What is the difference between for(), forEach(), for...in, and for...of ?

// what they iterate over, how they access the data, and their performance characteristics.

// Loop Type    Primary Use Case                         Accesses           Can use break/continue?      Supports async/await safely ?

//  for         Traditional indexing &                   Index(i)             Yes                         Yes
//              performance - critical tasks

// forEach()    Functional - style array execution     Element & Index        No                           No(breaks async order)
//
// for...of     Iterating over iterable values            Value               Yes                          Yes
//              (Arrays, Maps, Sets)
//
// for...in      Debugging object properties              Key / Property      Yes                           Yes


// Explaination:-
// ---------------
// 1. The Standard for Loop:
// The traditional for loop is entirely manual and relies on a counter variable.
// It gives you total control over the iteration direction, step size, and boundaries.

// Best for:
//  Performance - heavy tasks, looping backwards, or skipping steps(e.g., i += 2).

const arr = ['a', 'b', 'c'];
for (let i = 0; i < arr.length; i++) {
    console.log(i, arr[i]); // Logs index and value: 0 'a', 1 'b', 2 'c'
}

// 2. Array.prototype.forEach():-
// forEach is a higher - order array method that executes a callback function once for each array element.
// Best for:
// Clean, functional - style side effects on array elements.
// Key limitation: 
// You cannot use break or continue. If you return early inside the callback, it only skips the current iteration, acting like a continue.

// Code Example:
const arr = ['a', 'b', 'c'];
arr.forEach((value, index) => {
    console.log(index, value); // Logs: 0 'a', 1 'b', 2 'c'
});


// 3. for...of Loop
// Introduced in ES6, for...of iterates directly over the values of an iterable 
// object(Arrays, Strings, Maps, Sets, and arguments objects).

// Best for:
//  Standard, readable array iterations where you only need the value.

// Key advantage:
// Works perfectly with break, continue, and handles await sequentially in asynchronous loops.
// 
// Code Example:

const arr = ['a', 'b', 'c'];
for (const value of arr) {
    console.log(value); // Logs values directly: 'a', 'b', 'c'
}

// 4. for...in Loop:-
// The for...in loop iterates over all enumerable keys(property names) of an object, including inherited prototype properties.

//  Best for:
//  Inspecting or debugging plain objects.
//  Avoid using this for arrays because it iterates over string indices("0", "1") and can log unexpected custom array properties or prototype chains.

//  Code Example:
const user = { name: 'Alice', age: 25 };
for (const key in user) {
    console.log(key, user[key]); // Logs: name 'Alice', age 25
}




// DIFFERENCE BETWEEN MAP(), FILTER(), REDUCE():-

// 2. What is the difference between map(), filter() and reduce()?

// The core difference is that map transforms each element in an array,
//  filter selects a subset of elements based on a condition,
//  and reduce condenses the entire array into a single final value(such as a number, string, object, or even a new array).

//  All three are functional, immutable array methods in JavaScript that do not modify the original array, but instead return a new output.

// Comparison Table:-
// ------------------
// Method       Returns                                            Primary Use Case
// map()        A new array of the exact same length               Transforming or modifying every item(e.g., extracting IDs).
// filter()    A new array of the same or shorter length           Removing unwanted items based on a true / false condition.
// reduce()     A single accumulated value(any data type)          Grouping data, summing totals, or flattening arrays.

// 1. map():
// Executes a callback function on every element of an array and returns a new array with the transformed results.

// Uses:
// Converting raw API data into UI components(e.g., .map(user => <li>{user.name}</li>) in React).
// Applying mathematical operations or formatting to an entire dataset(e.g., converting prices to currencies).

// Disadvantages:
// Cannot skip elements; it always outputs a 1: 1 length match.Trying to filter items inside a map will leave undefined slots in your new array.
// It is highly inefficient if you don't actually use the returned array (use forEach instead if you just want to run side effects).

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]



// 2. filter():
// Checks every element against a conditional test(predicate function).If the function returns true, 
// the item is kept; if false, it is excluded.
// 
// Uses:
// Implementing search bars or frontend filtering toggles.
// Removing items from a state array(e.g., removing a deleted item by its ID: items.filter(item => item.id !== deletedId)).

// Disadvantages:
// It cannot alter the elements themselves; it can only decide whether they stay or go.
// It always iterates through the entire array.If you only want to find the very first matching item and stop, filter() is inefficient compared to find().

const evens = numbers.filter(num => num % 2 === 0); // [2, 4]


// 3. reduce():
// Passes an accumulator value along from one iteration to the next.
// It reduces a collection down to a single value by executing a reducer callback.
// 
// Uses:
// Calculating totals, tallies, averages, or shopping cart sums.
// Grouping an array of flat objects into a categorized object(e.g., grouping users by their role).

// Disadvantages:
// High cognitive load; it is notoriously difficult for junior developers to read, debug, and maintain.
// Overuse can overcomplicate code that could otherwise be written with a clean, readable for...of loop.

// Chaining Methods(The Real Power)
// You will often see these methods chained together to perform complex data transformations in a highly readable, 
// declarative pipeline:
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0); // 10

const products = [
    { name: 'Laptop', price: 1000, inStock: true },
    { name: 'Phone', price: 500, inStock: false },
    { name: 'Headphones', price: 100, inStock: true }
];

// Find total value of available stock
const totalValue = products
    .filter(p => p.inStock)         // 1. Keeps Laptop and Headphones
    .map(p => p.price)              // 2. Transforms to [1000, 100]
    .reduce((sum, p) => sum + p, 0); // 3. Sums them up to 1100


// Disadvantage of Chaining:
// Every method in the chain creates a brand - new intermediate array in memory.
// For massive datasets(hundreds of thousands of rows), chaining filter().map() is much slower than performing the operation inside a single reduce() or standard for loop.




















