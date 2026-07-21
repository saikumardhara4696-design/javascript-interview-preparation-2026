


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





//  ASYNC AND AWAIT
// Async and await are JavaScript keywords that provide a cleaner syntax for working with Promises.
// They eliminate the need for nested.then() and.catch() blocks, allowing you to write asynchronous code that looks and behaves like synchronous code.

// Under the hood, async/await is strictly non-blocking syntactic sugar built on top of the JavaScript Event Loop.

// How to use:
//  async / awaitTo implement async / await, you apply the async keyword to a function,
//  which forces it to return a Promise, and use the await keyword to pause execution until a Promise resolves.

// Rules of usage:
// The async keyword: 
// Placed before a function declaration, arrow function, or method.
// It wraps the return value of the function in a resolved Promise.

// The await keyword:
//  Placed before any Promise.It pauses code execution within that specific function until the Promise settles(resolves or rejects).
// Note: await only works inside async functions or as a top - level module feature in modern environments.

// Error handling:
//  Instead of.catch(), you use standard JavaScript try...catch blocks

// 1. Declare the async function
async function getUserDashboard(userId) {
    try {
        // 2. Pause execution until the fetch Promise resolves
        const response = await fetch(`https://example.com{userId}`);

        if (!response.ok) throw new Error("Network response failed");

        // 3. Pause execution until the JSON parsing Promise resolves
        const userData = await response.json();
        return userData;

    } catch (error) {
        // 4. Catch errors naturally using try/catch
        console.error("Dashboard error:", error.message);
    }
}

// Calling the function returns a Promise
getUserDashboard(123).then(data => console.log(data));


// When to use them:
// Use async / await whenever your JavaScript application interacts with the outside world
//  or performs operations that take an indeterminate amount of time.

// Fetching data:
//  Making API calls using fetch() or libraries like Axios.

// Database operations:
//  Interacting with databases in Node.js via ORMs like Prisma or Mongoose.

// File system tasks:
//  Reading, writing, or deleting files using the Node.js fs/promises module.

// Third-party integration:
//  Waiting for authentication tokens, payment gateways, or AWS S3 uploads.

// When NOT to use them:-

// Heavy computation:
//  Do not use async / await for CPU - intensive tasks like image processing or matrix multiplication.
// JavaScript is single - threaded, and async / await will not prevent these operations from freezing the browser UI.
// For heavy math, use Web Workers or Node.js Worker Threads.

// Synchronous array methods:
//  Avoid placing await directly inside synchronous loops like.forEach(), .map(), or.filter(), 
// as they do not natively support asynchronous execution structures.


// Advantages and disadvantages:-
// ===============================
// Advantages:-
// ------------
// Linear readability: Code reads top - to - bottom, dramatically reducing cognitive load 
// compared to complex Promise chains or "callback hell".

// Unified error handling:
//  You can wrap multiple asynchronous operations inside a single try...catch block,
//  handling both runtime exceptions and network rejections in one place.

// Easier debugging:
//  Step - by - step debugging is straightforward.Setting a breakpoint on an await line pauses
//  execution reliably, and stack traces pinpoint exact code lines rather than anonymous Promise wrappers.

// Clean branching:
//  Writing conditional logic(if/else) around asynchronous data is simple,
//  unlike wrapping chained.then() blocks inside conditional scopes.

// Disadvantages:-
// --------------
// The sequential trap: It is easy to accidentally serialize independent operations.
// For example, awaiting two unrelated API fetches sequentially doubles your loading time.
// You must manually opt back into parallelism using Promise.all().

// BAD (Slow): Fetching data sequentially
const user = await fetchUser();
const posts = await fetchPosts(); // Waits for user to finish completely

// GOOD (Fast): Fetching data concurrently
const [user, posts] = await Promise.all([fetchUser(), fetchPosts()]);

// Contagious functions:-
//  Once you mark a low - level utility function as async, every parent function that calls
//  it must usually become async and use await, filtering up through your architectural layers.
//
// Swallowed exceptions:-
//  If you omit a try...catch block around an await statement, it results in an unhandled Promise rejection.
// In modern runtimes, this can crash your Node.js process or trigger console errors in browsers.












