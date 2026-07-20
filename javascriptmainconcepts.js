


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


























